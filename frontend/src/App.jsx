import { BrowserRouter, Routes, Route } from "react-router-dom";

import UploadPage from "./pages/UploadPage";
import TablePage from "./pages/TablePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<UploadPage />} />

        <Route path="/table" element={<TablePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;