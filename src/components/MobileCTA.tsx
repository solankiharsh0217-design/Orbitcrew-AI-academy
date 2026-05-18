import { Link } from "react-router-dom";

export default function MobileCTA() {
  return (
    <div className="mobile-cta-bar">
      <div className="mobile-cta-inner">
        <Link to="/contact" className="btn btn-primary">Book Counseling</Link>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" className="btn btn-whatsapp">WhatsApp</a>
      </div>
    </div>
  );
}
