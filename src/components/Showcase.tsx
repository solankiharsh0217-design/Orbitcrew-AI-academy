import ImagePlaceholder from "./ImagePlaceholder";
import HorizontalScroll from "./HorizontalScroll";

const items = [
  { label: "AI Dashboard", url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80", desc: "Real-time workflow monitoring system" },
  { label: "Automation Workflow", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", desc: "Multi-step business automation systems" },
  { label: "Website Project", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", desc: "Professional WordPress & custom sites" },
  { label: "Ecommerce Store", url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", desc: "Shopify stores with product systems" },
  { label: "Landing Page", url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80", desc: "High-converting marketing pages" },
  { label: "Portfolio", url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80", desc: "Professional portfolio websites" },
  { label: "LinkedIn Profile", url: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&q=80", desc: "Optimized professional profiles" },
  { label: "Ad Campaign", url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80", desc: "Real Meta Ads campaign analytics" },
];

export default function Showcase({ title = "What Our Students Build", subtitle = "Every student builds real-world projects that become part of their professional portfolio." }) {
  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div className="text-center mb-32">
          <span className="section-label">Student Work</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>{subtitle}</p>
        </div>
        <HorizontalScroll trackClassName="showcase-track">
          {items.map((item, i) => (
            <div key={i} className="showcase-item">
              <div className="showcase-item-image">
                <img src={item.url} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="showcase-item-body">
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
