# 🚀 Developer Portfolio Platform

A full-stack MERN application that allows developers to create, manage, and showcase their professional portfolios. Users can securely manage their profiles, add projects, and share a public portfolio link.

## 🌐 Live Demo

Frontend: https://developer-portfolio-platform.vercel.app/

Backend API: https://developer-portfolio-platform-backend.onrender.com/

## ✨ Features

- 🔐 JWT Authentication (Register/Login)
- 👤 Profile Management
- 🖼️ Profile Image / Initials Avatar
- 💼 Project CRUD (Create, Read, Update, Delete)
- 🔍 Project Details Page
- 🌐 Public Portfolio
- 📱 Fully Responsive UI
- 🔗 GitHub & Live Demo Links
- 🚀 REST API
- ☁️ MongoDB Atlas Database

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS
- React Toastify

### Backend
- Node.js
- Express.js
- JWT Authentication
- Mongoose

### Database
- MongoDB Atlas

### Deployment
- Frontend: Vercel
- Backend: Render

## 📂 Folder Structure

Developer-Portfolio-Platform
│
├── client/
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
│
└── README.md

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/riyakamhub15/developer-portfolio-platform.git
```

### Install Backend

```bash
cd server
npm install
```

### Install Frontend

```bash
cd ../client
npm install
```

### Backend Environment Variables

Create `.env` inside the server folder:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### Frontend Environment Variables

Create `.env` inside the client folder:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Run Backend

```bash
cd server
npm start
```

### Run Frontend

```bash
cd client
npm start
```

## 🔮 Future Improvements

- Profile image upload using Cloudinary
- Dark Mode
- Resume Download
- Project Categories
- Contact Form
- Analytics Dashboard

## 📝 Note

The backend is hosted on Render's free tier. The first request after inactivity may take around a minute while the server wakes up.

## 👩‍💻 Author
**Riya Kamboj**

GitHub: https://github.com/riyakamhub15
