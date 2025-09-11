# YouTube Clone (MERN Stack)

A full-stack YouTube-style video-sharing application built with **React, Node.js, Express, and MongoDB**.

This project replicates the **core functionality of YouTube** — including video playback, user authentication, comments, likes/dislikes, and channel management — while serving as a hands-on learning project for the MERN stack.

---

## ✨ Features

- **User Authentication**: Register, login, JWT-based authentication with secure password hashing (bcrypt).
- **Channels**: Create and manage your own channel with custom name and avatar.
- **Video Uploads**: Upload videos with title, description, thumbnail, and category (via URL).
- **Video Player**: Watch videos, view channel info, like/dislike, and comment.
- **Comments**: Add, edit, and delete your own comments on videos.
- **Responsive UI**: Desktop and mobile-friendly interface styled similar to YouTube.
- **Sidebar & Header**: Collapsible sidebar, search functionality, and user dropdown menu.
- **Recommended Videos**: "Up next" suggestions with lazy loading for performance.
- **404 Page**: Custom YouTube-style Not Found page.
- **Custom Loader**: YouTube-style loading animation for better UX.
- **Date Formatting**: Upload date displayed using `date-fns`.

---

## 🚀 Live Demo

- **Frontend (Deployed)** 👉 [YouTube Clone Live](https://youtube-frontend-liart.vercel.app)

  🔹 _Note: You don’t need to run the backend manually — it is automatically connected and runs with the frontend._

- **Backend API** 👉 [YouTube Backend](https://youtube-backend-9m2f.onrender.com)

## 🛠️ Tech Stack

| Layer    | Technology                             |
| -------- | -------------------------------------- |
| Frontend | React 19, React Router v7, Axios, Vite |
| Backend  | Node.js, Express 5, MongoDB, Mongoose  |
| Auth     | JWT, bcrypt                            |
| Styling  | Custom CSS (No frameworks)             |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (Atlas or local)
- npm or yarn

---

### 1. Clone the Repository

```bash
git clone https://github.com/shubh4579/youtube-clone.git
cd youtube-clone
```

## 2. Backend Setup

```bash
cd backend
npm install
```

## 3. Start the Server

```
npm start
```

Backend runs at: http://localhost:3000

## 4. Frontend Steup

```
cd ../frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

📖 Usage Guide
Register/Login – Sign up and log in and upload profile pic.

Create Channel – Customize channel name and picture.

Upload Videos – Add video by entering title, description, thumbnail URL, and category.

Browse Videos – Explore from homepage, filter by category, or search titles.

Watch Videos – Play video, like/dislike, and interact with comments.

Manage Comments – Edit or delete your own comments.

Navigate Channels – View uploaded videos by channel.
