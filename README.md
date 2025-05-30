
# 🚗 Car Booking Test Drive System

A full-stack web application for managing car test drives, enabling users to browse, compare, and book test drives with an intuitive interface and powerful backend management tools.

## 📋 Table of Contents

- [Overview](#overview)
- [Team Members](#team-members)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage Flow](#usage-flow)
- [Screenshots](#screenshots)
- [License](#license)

---

## 📖 Overview

The Car Booking Test Drive System addresses the inefficiencies in traditional vehicle test drive management. It provides a responsive platform for customers to browse cars, book test drives, and give feedback, while also offering admin tools for car and booking management.

---

## 👨‍💻 Team Members

- Ali Mohamed – 221383  
- Omar Khaled Saadeldin Noureldin – 193687  
- Youssef Walid – 221215  
- Mahmoud Ibrahim El-Molla – 224417  
- Zeyad Kamel – 221761  
- Momen Aly – 232889  

---

## ✨ Features

### ✅ Functional

- **User Authentication**: Registration, login, profile, password reset.
- **Car Management**: View, filter, compare cars with image gallery.
- **Test Drive Booking**: Calendar, time slot selection, notifications.
- **Feedback System**: Ratings, reviews, admin moderation.

### 🔐 Non-Functional

- **Security**: JWT, encryption, CORS, validation.
- **Performance**: < 3s page load, 99.9% uptime.
- **Usability**: Mobile-friendly, responsive, accessible.
- **Scalability**: Modular structure, database indexing, horizontal scaling.

---

## 🧱 Tech Stack

### Frontend
- React.js + Vite
- Tailwind CSS
- React Router
- Context API

### Backend
- NestJS
- MongoDB
- Multer (for file uploads)
- JWT Authentication

---

## 🧩 System Architecture

### 📦 Modules

- **User**: Auth, profile, roles.
- **Car**: CRUD, filters, comparison.
- **Booking**: Schedule, confirm, manage test drives.
- **Feedback**: Create, view, rate cars.

### 📁 MongoDB Collections
- `users`, `cars`, `bookings`, `feedback`

---

## 🚀 Installation

1. **Clone the repo**  
```bash
git clone https://github.com/yourusername/car-test-drive.git
cd car-test-drive
```

2. **Install dependencies**

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

3. **Set up `.env` files**

_Backend `.env`:_
```
PORT=3000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

4. **Run the project**

**Backend:**
```bash
npm run start:dev
```

**Frontend:**
```bash
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Authentication
- `POST /user/register`
- `POST /user/login`
- `GET /user/profile` *(Auth Required)*

### 🚘 Car Management
- `GET /car`
- `POST /car` *(Admin)*
- `PUT /car/:id`, `DELETE /car/:id`

### 🗓️ Test Drive Booking
- `POST /book-test-drive`
- `GET /book-test-drive`
- `GET /book-test-drive/date/:date`

### ⭐ Feedback
- `POST /feedback`
- `GET /feedback/car/:carId`

👉 See full [API Reference in Documentation](#)

---

## ✅ Usage Flow

1. Register and log in
2. Browse available cars
3. Compare car specifications
4. Book a test drive
5. Submit feedback after test drive

---

## 📸 Screenshots
![WhatsApp Image 2025-05-30 at 11 03 42 PM](https://github.com/user-attachments/assets/4b95ffd4-e5d0-4e7b-86eb-38b7358e7215)
![WhatsApp Image 2025-05-30 at 11 00 42 PM](https://github.com/user-attachments/assets/9ca0ab93-c79f-45a8-8629-4a84eff80527)![WhatsApp Image 2025-05-30 at 10 59 46 PM](https://github.com/user-attachments/assets/5b031e62-9696-4ef7-8aa3-a0f507ce824c)
![WhatsApp Image 2025-05-30 at 11 00 12 PM](https://github.com/user-attachments/assets/0d9d2235-49f0-44e9-8693-f0223d663b50)
![WhatsApp Image 2025-05-30 at 10 59 20 PM](https://github.com/user-attachments/assets/13651fc6-cb4d-485e-a30d-8eb5ea6f6c8d)

![WhatsApp Image 2025-05-30 at 10 59 20 PM](https://github.com/user-attachments/assets/9668abb4-fb84-4952-bde6-854e5491ae4c)


---

## 📄 License

This project is for academic use only. For commercial use, please contact the team.

---
