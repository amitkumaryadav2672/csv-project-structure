import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import csvRoutes from "./routes/csvRoutes.js";

dotenv.config();

const app = express();


// ✅ connect MongoDB
connectDB();


// ✅ middlewares
app.use(cors());
app.use(express.json());


// ✅ home route (to remove Cannot GET /)
app.get("/", (req, res) => {
  res.send("API is running by amit");
});


// ✅ csv routes
app.use("/api/csv", csvRoutes);


// ✅ port
const PORT = process.env.PORT || 5000;


// ✅ start server
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});