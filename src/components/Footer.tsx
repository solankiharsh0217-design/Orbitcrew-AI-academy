import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>Academy</h3>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/student-journey">Student Journey</Link>
          <Link to="/placements">Placements</Link>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Counseling</Link>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener">WhatsApp</a>
          <a href="/#faq">FAQ</a>
        </div>
        <div className="footer-col">
          <h3>Admissions</h3>
          <Link to="/student-journey">Laptop Requirement</Link>
          <Link to="/student-journey">Attendance Expectations</Link>
          <Link to="/placements">Internship Eligibility</Link>
          <Link to="/contact">Admission Process</Link>
        </div>
        <div className="footer-col">
          <h3>Trust</h3>
          <Link to="/">Real Projects</Link>
          <Link to="/about">Classroom Environment</Link>
          <Link to="/about">Mentorship</Link>
          <Link to="/">Portfolio Development</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 OrbitCrew AI Academy. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
