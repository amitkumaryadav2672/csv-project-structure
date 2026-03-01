import Data from "../models/Data.js";
import readCSV from "../utils/readCSV.js";
import fs from "fs";

export const uploadCSV = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;

    console.log("File path:", filePath);

    const data = await readCSV(filePath);

    console.log("Rows:", data.length);

    await Data.deleteMany();

    // insert small batches (safe)
    const chunkSize = 100;

    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      await Data.insertMany(chunk);
    }

    // optional delete file after read
    fs.unlinkSync(filePath);

    res.json({
      message: "CSV uploaded",
      count: data.length,
    });

  } catch (error) {

    console.log("ERROR:", error);

    res.status(500).json({
      message: "Upload failed",
      error: error.message,
    });
  }
};


export const getData = async (req, res) => {
  try {

    const data = await Data.find().limit(100);

    res.json(data);

  } catch (error) {

    res.status(500).json(error);
  }
};