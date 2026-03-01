# CSV PROJECT STRUCTURE 📊

A Full Stack MERN Application that allows users to upload a CSV file, store the data in MongoDB, and visualize it in a professional dashboard with filters, charts, pagination, and table view.

This project is built using React, Node.js, Express, and MongoDB with a modern UI.

------------------------------------------------------------

## 🚀 Features

✔ Upload CSV file  
✔ Store CSV data in MongoDB  
✔ Show data in table format  
✔ Dashboard cards (Total Rows, Cities, Brands)  
✔ Location-wise filter (City / Region / Brand)  
✔ Search box  
✔ Pagination  
✔ Charts / Graphs  
✔ Drag & Drop upload UI  
✔ Progress bar while uploading  
✔ Modern dashboard layout  

------------------------------------------------------------

## 🛠 Tech Stack

Frontend

- React.js
- Vite
- React Router
- Axios
- React Dropzone
- Chart.js

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- csv-parser

------------------------------------------------------------

## 📂 Project Structure

CSV PROJECT STRUCTURE

backend
│
├── config
│   └── db.js
│
├── controllers
│   └── csvController.js
│
├── middleware
│   └── upload.js
│
├── models
│   └── Data.js
│
├── routes
│   └── csvRoutes.js
│
├── utils
│   └── readCSV.js
│
├── uploads
│
├── server.js
└── .env


frontend
│
├── src
│   ├── api
│   │   └── api.js
│   │
│   ├── pages
│   │   ├── UploadPage.jsx
│   │   └── TablePage.jsx
│   │
│   ├── components
│   │   ├── Sidebar.jsx
│   │   └── Navbar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx

README.md

------------------------------------------------------------

## ⚙️ Setup Instructions

### Step 1 — Backend Setup

Open terminal

cd backend

Install packages

npm install

Create .env file

PORT=5000  
MONGO_URI=your_mongodb_connection

Run backend

npm run dev


------------------------------------------------------------

### Step 2 — Frontend Setup

Open new terminal

cd frontend

Install packages

npm install

Run frontend

npm run dev


------------------------------------------------------------

### Open Browser

http://localhost:5173


------------------------------------------------------------

## 📤 Upload CSV

Open

http://localhost:5173

Upload CSV file

After upload redirect to

http://localhost:5173/table


------------------------------------------------------------

## 📊 Dashboard Features

- Total Rows count
- City filter
- Region filter
- Brand filter
- Search
- Pagination
- Charts
- Table view


------------------------------------------------------------

## 📡 API Endpoints

Upload CSV

POST /api/csv/upload

Get Data

GET /api/csv/data


------------------------------------------------------------

## 👨‍💻 Author

Amit Kumar Yadav  
B.Tech Computer Science Engineering  
MERN Stack Developer

------------------------------------------------------------