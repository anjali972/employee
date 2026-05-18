# COMPLETE SETUP GUIDE

## 1. Create MongoDB Atlas Database

1. Go to https://www.mongodb.com/atlas
2. Create free account
3. Create Cluster
4. Click Database Access
5. Create username/password
6. Click Network Access
7. Allow IP: 0.0.0.0/0
8. Click Connect
9. Choose Drivers
10. Copy MongoDB URL

Example:
mongodb+srv://username:password@cluster.mongodb.net/employeeDB

---

## 2. Create OpenRouter API Key

1. Visit https://openrouter.ai
2. Login
3. Click Keys
4. Create API Key
5. Copy key

---

## 3. Backend Setup

Open terminal:

cd backend

Install packages:
npm install

Create .env file

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=mysecret
OPENROUTER_API_KEY=your_openrouter_key

Run backend:
npm run dev

---

## 4. Frontend Setup

Open another terminal:

cd frontend

Install:
npm install

Run:
npm run dev

Frontend URL:
http://localhost:5173

---

## 5. Render Deployment

## Deploy Backend

1. Push code to GitHub
2. Login to Render
3. New Web Service
4. Connect GitHub Repo
5. Root Directory = backend
6. Build Command:
npm install
7. Start Command:
npm start

Add Environment Variables:
- MONGO_URI
- JWT_SECRET
- OPENROUTER_API_KEY

Deploy

---

## Deploy Frontend

1. New Static Site
2. Root Directory = frontend
3. Build Command:
npm install && npm run build
4. Publish Directory:
dist

Deploy

---

## 6. Testing APIs

Signup:
POST /api/auth/signup

Login:
POST /api/auth/login

Add Employee:
POST /api/employees

Get Employees:
GET /api/employees

AI Recommendation:
POST /api/ai/recommend

---

## 7. Project Viva Tips

Explain:
- MERN Flow
- JWT Authentication
- MongoDB CRUD
- OpenRouter AI API
- Render Deployment
- React useState/useEffect