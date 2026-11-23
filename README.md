# CloudPixel Technologies

A responsive React + Vite agency website starter with an optional Flask contact API.

## 1. Requirements
- Node.js 18+ and npm
- Python 3.10+ (only if you want to run the contact API)

## 2. Run the website
Open this folder in VS Code, open Terminal and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Configure your contact details
Open `src/components/Contact.jsx` and replace:
- `919000000000` with your WhatsApp number including country code, digits only.
- `hello@cloudpixel.example` with your real business email.

Also update the social links in `src/components/Footer.jsx`.

## 4. Run the optional Flask contact API
In a second terminal:

```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

The API runs at http://localhost:5000. The React contact form posts to `/api/contact` through the Vite proxy. If you deploy frontend and backend separately, set `VITE_API_URL` to your API base URL or configure a reverse proxy.

Submissions are appended to `backend/submissions.jsonl`. This is a simple starter, not a production CRM. Before launch, add spam protection, rate limiting, secure storage, backups and an email notification provider. Never commit customer submissions or secrets.

## 5. Build for deployment
```bash
npm run build
```
Upload the generated `dist/` folder to your chosen static host. The Flask API must be hosted separately if you want server-side form storage.

## 6. Before going live
- Buy and connect your domain.
- Replace all demo project cards with real work, or clearly label them as concept demos.
- Confirm package pricing and scope before publishing.
- Add your real legal/business details and have Privacy/Terms reviewed for your jurisdiction.
- Configure WhatsApp, email, API URL and social profiles.
- Test the contact form on the deployed site.

## Languages
The header includes Google's website translation widget so visitors can choose from languages supported by Google Translate. Machine translations may be imperfect; review important legal and sales text professionally.
