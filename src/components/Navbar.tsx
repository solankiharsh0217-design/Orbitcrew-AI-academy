import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/student-journey", label: "Student Journey" },
    { to: "/placements", label: "Placements" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <nav className={`nav ${isTransparent ? "" : "scrolled"} ${open ? "nav-open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          OrbitCrew<span>AI</span>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={location.pathname === l.to ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contact">
            <button className="btn btn-primary">Book Counseling</button>
          </Link>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener">
            <button className="btn btn-whatsapp">WhatsApp</button>
          </a>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav-mobile-overlay">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={location.pathname === l.to ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <div className="mobile-nav-actions">
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary">
            Book Free Counseling
          </Link>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" className="btn btn-whatsapp">
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
}
