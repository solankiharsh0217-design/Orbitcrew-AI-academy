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

  const links = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/student-journey", label: "Student Journey" },
    { to: "/placements", label: "Placements & Internships" },
    { to: "/about", label: "About Academy" },
    { to: "/contact", label: "Contact" },
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isTransparent ? "20px 48px" : "12px 48px",
      background: isTransparent ? "transparent" : "rgba(255, 255, 255, 0.95)",
      backdropFilter: isTransparent ? "none" : "blur(20px)",
      borderBottom: isTransparent ? "none" : "1px solid rgba(107, 69, 240, 0.1)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontSize: "24px",
            fontWeight: 800,
            color: isTransparent ? "#ffffff" : "#1a1a2e",
            letterSpacing: "-0.5px",
          }}>
            OrbitCrew<span style={{
              background: "linear-gradient(135deg, #6b45f0, #00c9a7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>AI</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                color: isTransparent
                  ? (location.pathname === l.to ? "#ffffff" : "rgba(255,255,255,0.8)")
                  : (location.pathname === l.to ? "#6b45f0" : "#333"),
                fontSize: "14px",
                fontWeight: location.pathname === l.to ? 600 : 500,
                padding: "8px 14px",
                borderRadius: "6px",
                transition: "all 0.2s ease",
                background: location.pathname === l.to
                  ? (isTransparent ? "rgba(107, 69, 240, 0.3)" : "rgba(107, 69, 240, 0.1)")
                  : "transparent",
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== l.to) {
                  e.currentTarget.style.color = isTransparent ? "#ffffff" : "#6b45f0";
                  e.currentTarget.style.background = isTransparent ? "rgba(107, 69, 240, 0.2)" : "rgba(107, 69, 240, 0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== l.to) {
                  e.currentTarget.style.color = isTransparent ? "rgba(255,255,255,0.8)" : "#333";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "10px 24px",
              background: isTransparent
                ? "linear-gradient(135deg, #6b45f0, #5535c9)"
                : "linear-gradient(135deg, #6b45f0, #5535c9)",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 16px rgba(107, 69, 240, 0.3)",
            }}>
              Book Counseling
            </button>
          </Link>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "10px 24px",
              background: isTransparent ? "rgba(37, 211, 102, 0.15)" : "transparent",
              color: isTransparent ? "#25D366" : "#25D366",
              border: isTransparent ? "1px solid rgba(37, 211, 102, 0.3)" : "1px solid #25D366",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}>
              WhatsApp
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          <span style={{
            width: "24px",
            height: "2px",
            background: isTransparent ? "#ffffff" : "#1a1a2e",
            borderRadius: "2px",
            transition: "all 0.3s ease",
          }} />
          <span style={{
            width: "24px",
            height: "2px",
            background: isTransparent ? "#ffffff" : "#1a1a2e",
            borderRadius: "2px",
            transition: "all 0.3s ease",
          }} />
          <span style={{
            width: "24px",
            height: "2px",
            background: isTransparent ? "#ffffff" : "#1a1a2e",
            borderRadius: "2px",
            transition: "all 0.3s ease",
          }} />
        </button>
      </div>
    </nav>
  );
}
