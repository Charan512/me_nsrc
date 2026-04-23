=== REPO: AyusethuML ===
---
title: AyusethuML
emoji: 🌿
colorFrom: green
colorTo: blue
sdk: docker
pinned: false
---

# AyuSethu ML

> FastAPI inference service for medicinal plant species identification.

**Live:** https://ayusethuml.onrender.com

## Pipeline

```
Input Image (300×300)
  → EfficientNetV2B3 Feature Extractor (1,536 features)
  → PCA Dimensionality Reduction (1,024 components)
  → SVM Classifier (92 species)
  → Top-3 Predictions with Confidence Scores
```

## Tech Stack

FastAPI · TensorFlow 2.18 · Scikit-learn 1.6.1 · Pillow · Gunicorn + Uvicorn

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/health` | Model readiness check |
| POST | `/api/v1/ml/identify` | Species identification (multipart image) |

### Example Response

```json
{
  "success": true,
  "plant": "Eclipta prostrata (Bringaraja)",
  "confidence": 0.6447,
  "top_predictions": [
    { "plant": "Eclipta prostrata (Bringaraja)", "confidence": 0.6447 },
    { "plant": "Ocimum tenuiflorum (Tulsi)", "confidence": 0.2373 },
    { "plant": "Spinacia oleracea (Palak(Spinach))", "confidence": 0.0872 }
  ]
}
```

## Model Artifacts

| File | Size | Description |
|------|------|-------------|
| `feature_extractor.keras` | 51 MB | EfficientNetV2B3 (pretrained) |
| `pca.pkl` | 6 MB | PCA (1,024 components) |
| `svm_model.pkl` | 40 MB | SVM classifier (92 classes) |
| `class_names.json` | 3 KB | Species name mapping |

## Setup

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Test

```bash
curl -X POST http://localhost:8000/api/v1/ml/identify \
  -F "file=@leaf_image.jpg"
```

## Deployment (Render)

- Runtime: Python 3.11
- Start: `gunicorn -w 1 -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:$PORT --timeout 120`
- Single worker (models are ~100MB in memory)

## License

ISC


=== REPO: AyusethuAPI ===
# AyuSethu API

> Express.js backend for the AyuSethu medicinal plant supply chain platform.

**Live:** https://ayusethuapi.onrender.com

## Architecture

```
MongoDB Atlas ← Express.js API → FastAPI ML Service
                      ↓
               Pinata (IPFS)
```

- **Auth:** JWT + RBAC (6 roles: Farmer, Collector, Lab, Admin, Manufacturer, Consumer)
- **Storage:** MongoDB (source of truth) + IPFS/Pinata (immutable files)
- **ML:** Forwards leaf images to FastAPI service for species identification
- **QR:** Generates QR codes on product finalization for consumer verification

## Tech Stack

Express 5 · Mongoose · JWT · Multer · Axios · QRCode · Pinata IPFS

## Project Structure

```
src/
├── server.js                   # Entry point, middleware, routes
├── config/db.js                # MongoDB connection
├── middlewares/authMiddleware.js
├── models/
│   ├── User.js                 # 6-role auth (phone + bcrypt)
│   ├── CropBatch.js            # 5-stage crop tracking
│   ├── LabReport.js            # Full assay data + IPFS PDF
│   ├── AuctionBid.js           # Manufacturer bidding
│   └── FinalProduct.js         # Manufactured product + QR
├── controllers/
│   ├── authController.js       # Register / Login
│   ├── farmerController.js     # Bhashini voice stubs
│   ├── collectorController.js  # Stage 1-5, Pinata + ML
│   ├── labController.js        # FIFO claim, PDF pinning
│   ├── adminController.js      # Auction trigger + grading
│   ├── manufacturerController.js # Bid, finalize, QR gen
│   └── consumerController.js   # Public timeline (no PII)
└── routes/                     # Route → Controller mapping
```

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/v1/auth/register` | — | Register user |
| POST | `/api/v1/auth/login` | — | Login, get JWT |
| POST | `/api/v1/collector/batch/init` | Collector | Create batch (Stage 1) |
| PUT | `/api/v1/collector/batch/:id/stage/:n` | Collector | Update stages 2-4 |
| PUT | `/api/v1/collector/batch/:id/stage5` | Collector | ML verification |
| POST | `/api/v1/lab/accept` | Lab | FIFO batch claim |
| POST | `/api/v1/lab/batch/:id/results` | Lab | Submit results + PDF |
| POST | `/api/v1/admin/auction/trigger` | Admin | Move to auction |
| POST | `/api/v1/manufacturer/bid` | Manufacturer | Submit bid |
| POST | `/api/v1/manufacturer/auction/:id/finalize` | Manufacturer | Finalize + QR |
| GET | `/api/v1/verify/:batchId` | **Public** | Consumer timeline |

## Setup

```bash
cp .env.example .env    # Fill in credentials
npm install
npm run dev             # Dev (auto-reload)
npm start               # Production
```

## Environment Variables

See [.env.example](.env.example) for all required keys:
`MONGO_URI`, `JWT_SECRET`, `ML_SERVICE_URL`, `PINATA_API_KEY`, `PINATA_SECRET_KEY`, `PINATA_JWT`, `FRONTEND_URL`, Bhashini keys.

## License

ISC


=== REPO: AyusethuApp ===
# AyuSethu Farmer App (Mobile UI)

> **Voice-First AI Agricultural Supply Chain Assistant**

The AyuSethu Farmer mobile app empowers rural farmers by providing a native, highly accessible entry point into the AyuSethu supply chain ecosystem. Built with **Flutter**, it completely removes traditional digital literacy barriers by using native language voice-interfaces for all critical actions.

## 🚀 Key Features

- **Multilingual Voice AI Onboarding:** Powered by Google's Gemini LLM and Bhashini (for hyper-localized Indian language ASR & TTS), the app acts as conversational agent to profile the farmer, record their land size, and capture their crop details without them ever needing to type a strict form.
- **Supply Chain Batch Tracking:** Farmers can view the live progress of their harvest via their "My Crops" dashboard. The system tracks a full 240-day, 5-stage phenotypic timeline per crop.
- **Hardware-Backed Data Integrity:** To complete a growth stage, the app forces real-time hardware data capture:
  - **Camera (`image_picker`):** Captures high-res photos of the harvest.
  - **GPS Geotagging (`geolocator`):** Imprints exact lat/lng coordinates to prove origin.
- **Decentralized Storage:** Growth stage photos are intrinsically pinned to the **IPFS Filecoin Network** (via Pinata) to ensure immutable trust before being evaluated by the backend ML pipeline.

## 🛠 Tech Stack
- **Framework:** Flutter / Dart
- **AI Pipelines:** Google Gemini AI, Bhashini (ASR/TTS)
- **Data Capture:** `geolocator`, `image_picker`, `audioplayers`, `record`
- **Network / State:** `http`, `shared_preferences`

## 📦 Setup & Usage

1. **Pre-requisites:** Flutter SDK, Android Studio or Xcode.
2. **Clone & Install:**
   ```bash
   flutter pub get
   ```
3. **Environment Config:**
   Create a `.env` in the root (though sensitive keys belong in the backend, the mobile app strictly points to the backend API).
   Make sure `/lib/config/api_constants.dart` points to your backend URL (e.g. `https://ayusethuapi.onrender.com`).
4. **Run:**
   ```bash
   flutter run
   ```

## 🔐 Security Notes
APK signing keystores and `google-services.json` files are strictly excluded from source control. To compile a release APK for Android (`flutter build apk --release`), ensure you attach your own valid `key.jks` and insert your release password within `android/key.properties`.


=== REPO: AyusethuUI ===
# AyuSethu Web Portals (Frontend)

> **Enterprise Supply Chain Dashboards for the AyuSethu Ecosystem**

The AyuSethu Web UI acts as the central command hub for the entire multi-stakeholder agricultural pipeline. It provides highly secure, role-based dashboards that seamlessly adapt depending on whether the user is an Administrator, Collector, Laboratory Technician, Manufacturer, or a Public Consumer.

## 🌟 Ecosystem Portals

1. **Admin Command Center**
   - Universal monitoring across all supply chain activities.
   - Real-time weather and crop tracking analytics.
   - Overrides and analytics engine.

2. **Collector Gateway**
   - Processes crop batches sourced from rural farmers who use the AyuSethu Mobile App.
   - Triggers the automated **Machine Learning Pipeline**. Evaluates IPFS-pinned harvest photos against an EfficientNet-V2 model (hosted on Hugging Face Spaces) to autonomously verify the exact plant species (`/api/v1/ml/identify`).

3. **Laboratory Analysis Portal (Pharmacognostic API)**
   - Allows certifiers to validate medicinal/chemical thresholds of the crops.
   - Automatically generates a dynamic, tamper-proof PDF certification of the chemical composition.
   - Saves the final PDF straight to the **Filecoin IPFS Network** (via Pinata) for absolute transparency.

4. **Manufacturer Bidding & Supply Engine**
   - Live WebSocket-driven auction system (`Socket.io`) allowing enterprise drug manufacturers to bid on newly verified raw materials.
   - Completes the supply loop and generates consumer-facing QR tracking codes.

5. **Public Transparency Engine**
   - Enables consumers to scan a QR code and trace the entire historical lineage of the plant, from the farmer's geolocation data to the IPFS lab certificate.

## 🛠 Tech Stack
- **Framework:** Vite + React (JavaScript)
- **Styling:** Tailwind CSS, Framer Motion
- **State & Routing:** Context API, React Router DOM v6
- **Real-time Engine:** Socket.io-client
- **PDF Generation:** jsPDF, html2canvas

## 📦 Setup & Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Environment Configuration:**
   Configure your backend API base URL in the root folder.
   ```env
   VITE_API_BASE_URL=https://ayusethuapi.onrender.com/api/v1
   ```
3. **Run Development Server:**
   ```bash
   npm run dev
   ```
4. **Compile for Production:**
   ```bash
   npm run build
   ```


=== REPO: ui_bot ===
# Soul Connect — Frontend

> 🧠 An AI-powered Mental Health Companion built with React + Vite.

This directory contains the frontend for the **Soul Connect** application — a compassionate, real-time AI chat interface for mental health support. It communicates with the FastAPI backend to deliver sentiment analysis, emotion detection, risk assessment, and empathetic LLM responses.

---

## ✨ Features

- 🔐 **JWT Authentication** — Register, Login, auto-logout on token expiry
- 💬 **AI Chat Interface** — Real-time conversation with the Soul Connect AI companion
- 🎙️ **Voice Input** — Microphone support via Bhashini Speech-to-Text API
- 🔊 **Text-to-Speech** — Plays bot responses aloud using browser's Web Speech API
- 🗂️ **Session History** — Multiple chat sessions with a collapsible sidebar
- 🗑️ **Session Management** — Create new chats, delete old ones
- 🚨 **Emergency Mode UI** — Visual cues when high-risk distress is detected
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Bundler | Vite 5 |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| Styling | Vanilla CSS (custom design system) |
| Auth | JWT via `localStorage` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm `v9+`
- Backend server running (see `/backend/README.md`)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create a `.env.local` file in this directory:

```env
# URL of your running backend (local or deployed)
VITE_API_URL=http://localhost:8000
```

> For a deployed backend (e.g. via ngrok or Render), replace the URL accordingly.

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at **`http://localhost:5173`**.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Preview the production build with:

```bash
npm run preview
```

---

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── context/
│   │   └── AuthContext.jsx   # Global auth state, login/logout, authFetch helper
│   ├── pages/
│   │   ├── Landing.jsx       # Marketing / landing page
│   │   ├── Login.jsx         # Login form
│   │   ├── Register.jsx      # Registration form
│   │   ├── Welcome.jsx       # Post-login welcome screen
│   │   └── Chat.jsx          # Main chat interface
│   ├── App.jsx               # Route definitions
│   ├── App.css               # Global design system & component styles
│   └── main.jsx              # React app entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔑 Authentication Flow

1. User registers or logs in → backend returns a **JWT token** (valid 24 hours)
2. Token is stored in `localStorage`
3. Every API request uses `Authorization: Bearer <token>`
4. On app load, `/me` is called to validate the token
5. If expired (HTTP 401), the user is **automatically logged out** and redirected to login

---

## 🌐 API Endpoints Used

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/register` | Create a new account |
| `POST` | `/login` | Authenticate and get token |
| `GET` | `/me` | Validate token & get user info |
| `POST` | `/chat` | Send a message and get AI response |
| `GET` | `/sessions` | List all past chat sessions |
| `GET` | `/history/:id` | Load messages for a session |
| `DELETE` | `/history/:id` | Delete a session |
| `POST` | `/speech-to-text` | Transcribe voice audio to text |

---

## 🧩 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_API_URL` | ✅ Yes | Base URL of the FastAPI backend |

> If `VITE_API_URL` is not set, the app falls back to `/api` (useful when frontend and backend are served from the same domain).

---

## 📝 Notes

- The app uses the browser's built-in **Web Speech API** for TTS — no external service needed.
- Voice input uses **Bhashini ASR** via the backend `/speech-to-text` endpoint.
- Session IDs are generated as Unix timestamps (`Date.now().toString()`) on the client side.


=== REPO: EmotionBot ===
# AI Mental Health Assistant - Backend API

This directory contains the FastAPI backend for the AI Mental Health Assistant application.

## Prerequisites
- Python 3.9+ 
- Local or globally installed `uvicorn`

## Setup Instructions

### 1. Install Dependencies
Install all required Python packages using pip:

```bash
pip install -r requirements.txt
```

*(Note: Depending on your environment, you may want to use a virtual environment before installing.)*

### 2. Environment Variables
Create a `.env` file in the root of the `backend` directory. The following environment variables are required for full functionality:

```env
# Twilio Required Credentials (For emergency calls)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone

# Allowed CORS Origins
FRONTEND_URL=https://your_frontend_url.com

# Bhashini Transcription Keys
BHASHINI_USER_ID=your_bhashini_id
BHASHINI_UDYAT_KEY=your_udyat_key
BHASHINI_INFERENCE_API_KEY=your_inference_api_key
```

### 3. Running the Server
You can start the FastAPI backend server using the following command:

```bash
uvicorn api:app --reload --port 8000
```

The API will then be accessible at `http://localhost:8000`. You can test functionality via the interactive Swagger docs at `http://localhost:8000/docs`.

### Notes
- **Models**: The application will automatically download lightweight text classification models on first startup. Please allow a minute or two on initial run.
- **Risk Model**: Ensure `vectorizer.pkl` and `risk_model.pkl` are present in this directory to load successfully.


=== REPO: ManaHospitalUI ===
# Mana Hospital - Patient & Admin App (Frontend)

This repository contains the Flutter frontend application for Mana Hospital. It provides distinct interfaces for hospital administrators and patients with a focus on real-time appointment booking, triage, and daily log tracking.

## Architecture & Tech Stack

- **Framework**: Flutter (Dart)
- **Routing**: `go_router` for strict, declarative state-driven navigation.
- **Authentication**: Firebase Phone Auth coupled with a secure backend-issued JWT.
- **Local Storage**: `flutter_secure_storage` for persisting session tokens securely.

## Key Workflows & Features

### 1. Robust Authentication & Reactive Routing
The entire application routing logic is declaratively mapped to a singleton `AuthProvider`. 
- Logging in caches the JWT and user metadata.
- Pushing a logout natively drops the token; `go_router` passively triggers a teardown back to `LoginScreen` instantly, preventing widget-tree deadlocks and race conditions.

### 2. Patient Booking Wizard
A highly responsive 3-step wizard workflow designed for non-technical users.
- **Family & Friend Quotas**: Patients can book an appointment for themselves (limited to 1 active), and act as caretakers booking for others (up to 5 active slots globally).
- **Graceful Error Handling**: Overbooking errors trigger dynamic conflict dialogs pulled straight from the backend API.

### 3. Admin Offline Walk-In Portal
A specific workflow allowing hospital administrators to bypass the patient limits.
- **Unlimited Overrides**: Admins can force walk-in patients into a fully booked slot (e.g. 6/5 bookings).
- **Chronological Time-Gates**: The native `showDatePicker` disables passed dates, forces "Tomorrow" as the default selection after 7:00 PM, and automatically grays-out and disables slots that have natively elapsed for the day.

### 4. Patient Feed & Slot Logs
- Patients have a customized feed showing their history and prescriptions.
- Admins possess a central Slot Log where they monitor all appointments chronologically per day, accepting/rejecting or marking patients as 'Completed' with native Follow-up scheduling.

## Build Instructions (Release)

To compile the application routing to your live backend endpoint:
```bash
flutter clean
flutter pub get
flutter build apk --release --dart-define=BACKEND_URL=https://manahospitalapi.onrender.com/api
```


=== REPO: ManaHospitalAPI ===
# Mana Hospital - Core API (Backend)

This repository contains the Node.js/Express backend powering the Mana Hospital mobile application. It governs authentication, appointment slot limitations, and offline administrative overrides.

## Architecture & Tech Stack

- **Framework**: Express.js (Node)
- **Database**: MongoDB (Mongoose ODMs)
- **Authentication**: Firebase Admin SDK (token verification) + Custom JWT issuing.
- **Transaction Safety**: Mongoose implicit transactions ensuring concurrency safety for bookings.

## Key Logic & Route Structures

### 1. Authentication (`/api/auth`)
- Takes Firebase ID tokens, verifies them against `firebase-admin`, and maps them to a local MongoDB `User` schema.
- Issues a robust JWT dictating `admin` vs `patient` scopes.

### 2. Booking Engine (`/api/appointments`)
The core controller responsible for time and capacity management.
#### `GET /slots`
- Dynamically checks IST time offsets to calculate current occupancy metrics on a given day. Returns `{ isExpired, isFull, available }` payloads dictating what the frontend is allowed to display.

#### `POST /book` (Online Patient Booking)
- Protected by a strictly typed Mongoose `startTransaction()` session.
- Validates limits in atomic operations: 
  - **Self-Booking**: Max `1` active appointment globally.
  - **Caretaker/Family**: Max `5` active family bookings.
- Checks raw 5/5 interval occupancy thresholds.

#### `POST /offline` (Admin Walk-In Gate)
- Unlocked for authenticated Admin roles.
- Intentionally skips the `abortTransaction()` limits for full capacities allowing admins to push highly demanded slots to 6/5 or 7/5 organically. 
- Hard enforces identical chronological IST time-gates rejecting bookings placed in previously elapsed daily hours.

### 3. Patient Recovery Flow & FCM Sync
- Manages Firebase Cloud Messaging to send direct push notifications for Rejections/Missed alerts.
- Supplies `/recover` bridges mapping rejected bookings seamlessly into next available `suggest-next` time gaps.

## Running the Server Locally

```bash
npm install
npm run dev
```

*Ensure an `.env` file containing your `MONGO_URI`, `JWT_SECRET`, and `FIREBASE_ADMIN` config block is present at root.*


=== REPO: Prajwalan2k26_api ===
# Prajwalan 2K26 - Backend API

Node.js + Express + MongoDB backend API for the Prajwalan 2K26 event management system.

## Features

- **RESTful API**: Clean, consistent API design
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access Control**: Admin, Evaluator, and Team Lead roles
- **MongoDB Integration**: Mongoose ODM for data modeling
- **Weighted Scoring System**: Student (30%) and Staff (70%) evaluator weights
- **Domain-Based Filtering**: Evaluators assigned to specific domains
- **Flash Round Support**: Special round for selected teams

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
PORT=5001
FRONTEND_URL=http://localhost:5173
```

## Database Setup

```bash
# Seed the database with sample data
node scripts/seed.js
```

This will create:
- 10 sample teams
- 24 evaluators (8 student + 16 staff) across 8 domains
- Admin user
- Sample tasks for each round

## Development

```bash
# Start development server
npm run dev
```

The API will be available at `http://localhost:5001`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Admin Routes (Protected)
- `GET /api/admin/teams` - Get all teams
- `GET /api/admin/teams/:teamId` - Get single team
- `PUT /api/admin/teams/:teamId/tasks/:round` - Update tasks
- `POST /api/admin/teams/:teamId/publish/:round` - Publish tasks
- `POST /api/admin/publish-all` - Publish all tasks
- `POST /api/admin/teams/:teamId/flash-round` - Select for Flash Round
- `DELETE /api/admin/teams/:teamId/flash-round` - Remove from Flash Round
- `GET /api/admin/leaderboard` - Get ranked teams

### Evaluator Routes (Protected)
- `GET /api/evaluator/profile` - Get evaluator profile
- `GET /api/evaluator/teams` - Get teams (domain filtered)
- `GET /api/evaluator/teams/:teamId` - Get team details
- `GET /api/evaluator/search/:teamNumber` - Search team by number
- `POST /api/evaluator/teams/:teamId/score/:round` - Submit score
- `GET /api/evaluator/flash-round-teams` - Get Flash Round teams

### Team Lead Routes (Protected)
- `GET /api/teamlead/dashboard` - Get team dashboard
- `GET /api/teamlead/tasks` - Get visible tasks

## Data Models

### User
- email, password, name, role
- Roles: admin, evaluator, teamlead
- Evaluators have: evaluatorType (student/staff), domain

### Team
- teamName, teamNumber, domain
- members: [{ name, rollNumber, year, branch }]
- tasks: { round1, round2, round3, round4 }
- scores: Weighted scoring with evaluations array
- isFlashRoundSelected, totalScore

## Scoring System

- **Round 1**: Max 30 points (Project Explanation)
- **Round 2**: Max 20 points (Progress Demo)
- **Round 3**: Max 50 points (Final Presentation)
- **Round 4**: Max 20 points (Flash Round - selected teams only)

### Weighted Scoring
- Student Evaluators: 60% weight
- Staff Evaluators: 40% weight
- Final score calculated automatically on save

## Security

- Passwords hashed with bcryptjs
- JWT tokens expire in 7 days
- Protected routes require valid JWT
- Role-based middleware for authorization
- CORS configured for frontend origin

## Login Credentials (Development)

```
Admin:          srkraceofficial@gmail.com / prajwalan@2k26
Student Eval:   student.eval.1@prajwalan.com / eval123
Regular Eval:   evaluator.1@prajwalan.com / eval123
Team Lead:      team1@prajwalan.com / team123
```

## Project Structure

```
├── config/          # Database configuration
├── middleware/      # Authentication middleware
├── models/          # Mongoose models
├── routes/          # API routes
│   ├── auth.js      # Authentication routes
│   ├── admin.js     # Admin routes
│   ├── evaluator.js # Evaluator routes
│   └── teamlead.js  # Team lead routes
├── scripts/         # Utility scripts
│   └── seed.js      # Database seeding
└── server.js        # Application entry point
```

## Domains

1. Web Development
2. App Development
3. AI/ML
4. IoT
5. Cybersecurity
6. Blockchain
7. Game Development
8. Cloud Computing

## License

Proprietary - SRKR ACE Prajwalan 2K26


=== REPO: Prajwalan2k26_ui ===
# Prajwalan 2K26 - Frontend

React + Vite frontend application for the Prajwalan 2K26 event management system.

## Features

- **Admin Dashboard**: Manage teams, tasks, and leaderboard
- **Evaluator Portal**: Evaluate teams with domain-based filtering
- **Team Lead Dashboard**: View assigned tasks and team information
- **Professional VR Theme**: Modern UI with HoloBackground and cyber-glass aesthetics
- **Role-Based Access Control**: Secure authentication with JWT
- **Responsive Design**: Optimized for both desktop and mobile devices

## Tech Stack

- React 18
- Vite
- React Router v6
- Axios
- Context API for state management

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5001/api
```

For production, update the API URL to your backend server.

## Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components (Navbar, HoloBackground, etc.)
├── context/         # React Context (Auth, Theme)
├── pages/           # Page components
│   ├── admin/       # Admin dashboard pages
│   ├── evaluator/   # Evaluator portal pages
│   └── teamlead/    # Team lead dashboard pages
├── services/        # API service layer
├── App.jsx          # Main app component with routing
└── main.jsx         # Application entry point
```

## User Roles

1. **Admin**: Full access to manage teams, tasks, and view leaderboard
2. **Evaluator**: Evaluate teams within assigned domain
3. **Team Lead**: View team information and assigned tasks

## Login Credentials (Development)

```
Admin:          srkraceofficial@gmail.com / prajwalan@2k26
Student Eval:   student.eval.1@prajwalan.com / eval123
Regular Eval:   evaluator.1@prajwalan.com / eval123
Team Lead:      team1@prajwalan.com / team123
```

## Key Features

### Admin Dashboard
- View all teams and their scores
- Manage tasks for each round
- Publish tasks to team leads
- Select teams for Flash Round
- View leaderboard

### Evaluator Portal
- Search teams by number
- View assigned domain teams
- Submit scores with feedback
- Weighted scoring (Student: 30%, Staff: 70%)

### Team Lead Dashboard
- View team information
- Access visible tasks for all rounds
- Track team members

## Theme

The application features a professional VR theme with:
- Custom HoloBackground component
- Cyber-glass aesthetic
- Orbitron and JetBrains Mono typography
- Dark/Light mode support

## License

Proprietary - SRKR ACE Prajwalan 2K26


=== REPO: HerbDetectionModel ===
# Herb Identification System

A web-based herb identification system using Deep Learning (EfficientNetV2B3 + PCA + SVM) with a FastAPI backend and modern HTML/CSS/JavaScript frontend.

## Model Architecture

- **Feature Extractor**: EfficientNetV2B3 (pre-trained on ImageNet)
- **Dimensionality Reduction**: PCA (1024 components)
- **Classifier**: SVM with RBF kernel
- **Accuracy**: 95.92% on validation set
- **Classes**: 92 different herb/plant species

## Features

- 🌿 Identify 92 different herb and plant species
- 📸 Drag-and-drop or click to upload images
- 🎨 Modern, responsive UI with animations
- ⚡ Fast predictions using pre-trained models
- 📊 Real-time confidence scores

## Installation

### Quick Setup (Recommended)

1. **Navigate to the repository**:
   ```bash
   cd /Users/deepakthota/HerbIdentificationModel
   ```

2. **Run the setup script**:
   ```bash
   ./setup.sh
   ```
   
   This will:
   - Create a virtual environment
   - Install all required dependencies
   - Set up the project

### Manual Setup

If you prefer to install manually:

```bash
cd /Users/deepakthota/HerbIdentificationModel
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Usage

### Quick Start

1. **Run the application**:
   ```bash
   ./run.sh
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

3. **Upload an image** of a herb or plant and click "Identify Herb" to get the prediction!

### Manual Start

If you set up manually:

```bash
source venv/bin/activate
python app.py
```

Or using uvicorn directly:
```bash
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

## API Endpoints

### 1. Home Page
- **GET** `/`
- Returns the HTML interface

### 2. Predict
- **POST** `/predict`
- Upload an image file to get herb identification
- **Request**: Multipart form data with image file
- **Response**:
  ```json
  {
    "prediction": "Ocimum tenuiflorum (Tulsi)",
    "class_index": 59,
    "confidence": 0.95
  }
  ```

### 3. Get Classes
- **GET** `/classes`
- Returns list of all available herb classes
- **Response**:
  ```json
  {
    "classes": ["Allium cepa (Onion)", ...],
    "total": 92
  }
  ```

### 4. Health Check
- **GET** `/health`
- Check if the API is running and models are loaded
- **Response**:
  ```json
  {
    "status": "healthy",
    "models_loaded": true
  }
  ```

## Model Files

The following files are required for the application to work:

- `feature_extractor.keras` - EfficientNetV2B3 feature extraction model
- `pca.pkl` - PCA transformation model
- `svm_model.pkl` - SVM classifier model
- `class_names.json` - List of 92 herb/plant class names

## Supported Plants/Herbs

The system can identify 92 different species including:
- Tulsi (Holy Basil)
- Neem
- Aloe Vera
- Turmeric
- Ginger
- Mint
- And 86 more species!

## Technical Details

### Image Processing
- Input size: 300x300 pixels
- Preprocessing: EfficientNetV2 preprocessing
- Supported formats: JPG, PNG, JPEG

### Model Pipeline
1. Image is resized to 300x300
2. EfficientNetV2B3 extracts features (1536 dimensions)
3. PCA reduces dimensions to 1024
4. SVM classifier predicts the species

## Requirements

- Python 3.8+
- TensorFlow 2.15.0
- FastAPI 0.104.1
- See `requirements.txt` for full list

## License

This project is for educational purposes.

## Acknowledgments

- Model trained on Herbify Dataset
- Uses EfficientNetV2B3 architecture
- Built with FastAPI and modern web technologies


=== REPO: smartSpend ===
# Smart Expense Tracker 💰

A full-stack expense tracking application with AI-powered features for intelligent expense management.

## Features

- 💬 **Smart Chat Interface** - Add expenses via natural language
- 📸 **Receipt OCR Processing** - Extract expense data from receipt images
- 📊 **Budget Goals & Optimization** - Set and track spending goals
- 📈 **Spending Forecasts** - AI-powered expense predictions
- 📅 **Monthly Summaries** - Comprehensive spending analytics
- 🔄 **Real-time Updates** - WebSocket-based live updates
- 📁 **CSV Import** - Bulk import historical expenses

## Tech Stack

### Frontend
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend
- **Framework**: FastAPI (Python)
- **Database**: SQLite (development) / PostgreSQL (production ready)
- **ORM**: SQLAlchemy
- **AI/ML**: spaCy, scikit-learn, Tesseract OCR
- **Authentication**: Bcrypt password hashing
- **Rate Limiting**: SlowAPI
- **Scheduler**: APScheduler

## Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.11+
- **Tesseract OCR** (for receipt processing)

### Installing Tesseract

**macOS:**
```bash
brew install tesseract
```

**Ubuntu/Debian:**
```bash
sudo apt-get install tesseract-ocr
```

**Windows:**
Download from [GitHub Releases](https://github.com/UB-Mannheim/tesseract/wiki)

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd task-2
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Download spaCy model
python download_models.py

# Create .env file from example
cp .env.example .env
# Edit .env and set your configuration

# Run the backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at `http://localhost:8000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000" > .env.local
echo "NEXT_PUBLIC_WS_BASE=ws://127.0.0.1:8000" >> .env.local

# Run the frontend
npm run dev
```

Frontend will be available at `http://localhost:3000`

## Environment Variables

### Backend (.env)

```bash
ENVIRONMENT=development
DATABASE_URL=sqlite:///./expenses.db
JWT_SECRET_KEY=your-secret-key-here
RUN_SCHEDULER=true
```

### Frontend (.env.local)

```bash
NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000
NEXT_PUBLIC_WS_BASE=ws://127.0.0.1:8000
```

## API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Production Deployment

### Backend (Render/Railway/Fly.io)

1. Set environment variables:
   - `ENVIRONMENT=production`
   - `DATABASE_URL=<your-postgres-url>`
   - `JWT_SECRET_KEY=<secure-random-key>`
   - `RUN_SCHEDULER=true` (only on one instance)

2. Install dependencies and run:
   ```bash
   pip install -r requirements.txt
   python download_models.py
   uvicorn app.main:app --host 0.0.0.0 --port $PORT
   ```

### Frontend (Vercel/Netlify)

1. Set environment variables:
   - `NEXT_PUBLIC_API_BASE=<your-backend-url>`
   - `NEXT_PUBLIC_WS_BASE=<your-backend-ws-url>`

2. Deploy:
   ```bash
   npm run build
   npm start
   ```

## Docker Deployment

```bash
# Build and run with docker-compose
docker-compose up -d
```

## Project Structure

```
task-2/
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI application
│   │   ├── models.py        # Database models
│   │   ├── schemas.py       # Pydantic schemas
│   │   ├── crud.py          # Database operations
│   │   ├── nlp.py           # NLP processing
│   │   ├── ocr.py           # OCR processing
│   │   ├── exceptions.py    # Custom exceptions
│   │   └── database.py      # Database configuration
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.jsx     # Main dashboard
│   │   │   └── layout.js
│   │   └── lib/
│   │       ├── api.js       # API client
│   │       └── config.js    # Configuration
│   ├── package.json
│   └── next.config.mjs
└── docker-compose.yml

```

## Features in Detail

### Smart Chat
- Natural language expense entry
- Automatic category classification
- Date and merchant extraction
- Real-time WebSocket updates

### Receipt OCR
- Upload receipt images
- Automatic text extraction
- Intelligent parsing of amounts, dates, merchants
- Category prediction

### Budget Management
- Set monthly budgets
- Category-wise budget allocation
- Automatic budget optimization suggestions
- Real-time budget usage tracking

### Analytics
- Monthly spending summaries
- Category-wise breakdowns
- Spending forecasts using ARIMA/Linear Regression
- Historical trend analysis

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ using FastAPI and Next.js**

=== REPO: AppointmentManagementSystemFrontend ===
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


=== REPO: FarmGuide ===
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

