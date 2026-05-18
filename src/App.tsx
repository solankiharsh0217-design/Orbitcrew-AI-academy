import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import StudentJourney from "./pages/StudentJourney";
import Placements from "./pages/Placements";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/student-journey" element={<StudentJourney />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </Router>
  );
}
