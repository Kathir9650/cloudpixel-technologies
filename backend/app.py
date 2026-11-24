import os
import re
import smtplib
from datetime import datetime, timezone
from email.message import EmailMessage
from threading import Thread

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_sqlalchemy import SQLAlchemy

load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-change-in-prod")
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///leads.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

allowed_origins = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "*").split(",")]
CORS(app, resources={r"/api/*": {"origins": allowed_origins}})

db = SQLAlchemy(app)
limiter = Limiter(get_remote_address, app=app, default_limits=["200 per day", "50 per hour"])


class Lead(db.Model):
    __tablename__ = "leads"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(160), nullable=False)
    phone = db.Column(db.String(30), nullable=True)
    service = db.Column(db.String(80), nullable=True)
    message = db.Column(db.Text, nullable=False)
    ip_address = db.Column(db.String(45), nullable=True)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))


with app.app_context():
    db.create_all()

EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def send_async_notification(lead_data: dict):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    notify_to = os.getenv("NOTIFY_EMAIL")

    if not all([smtp_host, smtp_user, smtp_pass, notify_to]):
        return

    msg = EmailMessage()
    msg["Subject"] = f"New Agency Lead: {lead_data['name']} ({lead_data.get('service', 'General')})"
    msg["From"] = smtp_user
    msg["To"] = notify_to
    msg.set_content(
        f"Name: {lead_data['name']}\n"
        f"Email: {lead_data['email']}\n"
        f"Phone: {lead_data.get('phone', 'N/A')}\n"
        f"Service: {lead_data.get('service', 'N/A')}\n\n"
        f"Message:\n{lead_data['message']}"
    )

    try:
        with smtplib.SMTP(smtp_host, int(os.getenv("SMTP_PORT", 587))) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
    except Exception as exc:
        app.logger.error(f"Failed to send lead notification: {exc}")


@app.get("/api/health")
def health_check():
    return jsonify({"status": "ok", "timestamp": datetime.now(timezone.utc).isoformat()}), 200


@app.post("/api/contact")
@limiter.limit("5 per minute")
def create_contact():
    data = request.get_json(silent=True) or {}

    # Honeypot field check (add a hidden input named 'website' in React)
    if data.get("website"):
        return jsonify({"status": "ok", "message": "Submission received."}), 200

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip().lower()
    phone = str(data.get("phone", "")).strip()
    service = str(data.get("service", "")).strip()
    message = str(data.get("message", "")).strip()

    if len(name) < 2 or len(name) > 120:
        return jsonify({"error": "Please enter a valid name (2-120 characters)."}), 400
    if not EMAIL_REGEX.match(email) or len(email) > 160:
        return jsonify({"error": "Please enter a valid email address."}), 400
    if len(message) < 10 or len(message) > 3000:
        return jsonify({"error": "Message must be between 10 and 3000 characters."}), 400

    lead = Lead(
        name=name,
        email=email,
        phone=phone[:30],
        service=service[:80],
        message=message,
        ip_address=request.headers.get("X-Forwarded-For", request.remote_addr),
    )
    db.session.add(lead)
    db.session.commit()

    Thread(
        target=send_async_notification,
        args=({"name": name, "email": email, "phone": phone, "service": service, "message": message},),
        daemon=True,
    ).start()

    return jsonify({"status": "ok", "message": "Thank you! Our team will reach out shortly."}), 201


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))
