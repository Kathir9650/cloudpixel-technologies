from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timezone
from pathlib import Path
import json
import re

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}})
DATA_FILE = Path(__file__).with_name("submissions.jsonl")

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "CloudPixel contact API"})

@app.post("/api/contact")
def contact():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    service = str(data.get("service", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or len(name) > 120:
        return jsonify({"error": "Please provide a valid name."}), 400
    if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", email) or len(email) > 254:
        return jsonify({"error": "Please provide a valid email address."}), 400
    if not message or len(message) > 5000:
        return jsonify({"error": "Please provide a message (maximum 5000 characters)."}), 400

    record = {
        "received_at": datetime.now(timezone.utc).isoformat(),
        "name": name, "email": email, "service": service[:120], "message": message
    }
    with DATA_FILE.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
    return jsonify({"ok": True, "message": "Enquiry received."}), 201

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
