import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";
import { PremiumButton } from "./ui/PremiumButton";

export default function FinalCTA({ title = "Start Building Skills for the Future.", subtitle = "Build practical skills, real projects, portfolios, and career opportunities through mentorship-driven learning." }) {
  return (
    <section className="final-cta">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link to="/contact">
            <PremiumButton variant="primary" size="lg" icon={Calendar}>
              Book Free Counseling
            </PremiumButton>
          </Link>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener">
            <PremiumButton variant="ghost" size="lg" icon={MessageCircle}>
              WhatsApp Us
            </PremiumButton>
          </a>
        </div>
      </div>
    </section>
  );
}
