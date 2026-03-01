# CSV PROJECT STRUCTURE 📊

A full-stack MERN project that allows users to upload a CSV file, store data in MongoDB, and visualize the data in a dashboard with filters, charts, and tables.

This project provides a professional UI with file upload, analytics, filtering, pagination, and charts.

---

## 🚀 Features

* Upload CSV file
* Store CSV data in MongoDB
* Display data in table
* Dashboard cards (Total rows, cities, brands)
* Location-based filter (city, region, brand)
* Search box
* Pagination
* Charts (City wise data)
* Drag & Drop file upload UI
* Progress bar while uploading
* Modern dashboard UI

---

## 🛠 Tech Stack

Frontend

* React.js
* Vite
* React Router
* Axios
* React Dropzone
* Chart.js

Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* csv-parser

---

## 📂 Project Structure

CSV PROJECT STRUCTURE

backend
├── config
│    └── db.js
├── controllers
│    └── csvController.js
├── middleware
│    └── upload.js
├── models
│    └── Data.js
├── routes
│    └── csvRoutes.js
├── utils
│    └── readCSV.js
├── uploads
├── server.js
└── .env

frontend
├── src
│   ├── api
│   │    └── api.js
│   ├── pages
│   │    ├── UploadPage.jsx
│   │    └── TablePage.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx

README.md

---

## ⚙️ Setup Instructions

Step 1 — Install backend

cd backend
npm install

Create .env

PORT=5000
MONGO_URI=your_mongodb_url

Run

npm run dev

---

Step 2 — Install frontend

cd frontend
npm install
npm run dev

---

Open browser

http://localhost:5173

---

## 📤 Upload CSV

Go to

http://localhost:5173

Upload CSV file

After upload

http://localhost:5173/table

---

## 📊 Dashboard Features

* Total rows
* City filter
* Region filter
* Brand filter
* Search
* Pagination
* Charts
* Table view

---

## 📡 API

POST /api/csv/upload
GET /api/csv/data

---

## 👨‍💻 Author

Amit Kumar Yadav
B.Tech CSE
MERN Stack Developer

---
