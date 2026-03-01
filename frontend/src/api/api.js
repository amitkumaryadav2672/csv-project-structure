import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/csv",
});

export const uploadCSV = (data) =>
  API.post("/upload", data);

export const getData = () =>
  API.get("/data");