import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/csv"
  //baseURL:"https://csv-project-structure-1.onrender.com/api/csv"
});

export const uploadCSV = (data) =>
  API.post("/upload", data);

export const getData = () =>
  API.get("/data");