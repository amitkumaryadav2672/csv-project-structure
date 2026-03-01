import express from "express";

import upload from "../middleware/upload.js";

import {
  uploadCSV,
  getData,
} from "../controllers/csvController.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadCSV);

router.get("/data", getData);

export default router;