import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FaithPage from "../features/faith/pages/FaithPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faith" element={<FaithPage />} />
      </Routes>
    </BrowserRouter>
  );
}