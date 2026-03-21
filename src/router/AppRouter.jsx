import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";
import FaithPage from "../features/faith/pages/FaithPage";
import NotesPage from "../features/love-notes/pages/NotesPage";
import QuizPage from "../features/quiz/pages/QuizPage";

export default function AppRouter() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faith" element={<FaithPage />} />
            <Route path="/notes" element={<NotesPage />} /> 
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
