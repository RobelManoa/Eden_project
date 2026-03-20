import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";
import FaithPage from "../features/faith/pages/FaithPage";

export default function AppRouter() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faith" element={<FaithPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
