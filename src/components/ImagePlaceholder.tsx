const imageUrls = {
  "Classroom Environment": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  "AI & Tech Learning": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "Project Review Session": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  "Mentorship Session": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  "Internship Environment": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "Collaboration": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "Premium Classroom Overview": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
  "Modern Workstations": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  "Mentorship Moment": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  "Practical Session": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  "Project Discussion": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "Collaborative Learning": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "Students Working": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  "Workplace Environment": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "Interview Session": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  "Portfolio Review": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "Team Collaboration": "https://images.unsplash.com/photo-1553877522-43269c4e2f67?w=800&q=80",
  "Professional Workspace": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
  "Career Counseling": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  "Premium Classroom": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  "Workstation Area": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  "Student Collaboration": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "Learning Session": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  "Classroom Overview": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  "Senior Mentor": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  "Web Development Mentor": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  "Marketing Mentor": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  "ChatGPT Dashboard": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "WordPress Dashboard": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "Meta Ads Dashboard": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  "Make Automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "Shopify Store": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "Analytics Dashboard": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "Portfolio Website": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "LinkedIn Profile": "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
  "Resume Building": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
};

export default function ImagePlaceholder({ label, style, className = "" }) {
  const url = imageUrls[label as keyof typeof imageUrls];
  return (
    <div className={`img-placeholder ${className}`} style={style}>
      {url ? (
        <img
          src={url}
          alt={label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            const parent = (e.target as HTMLImageElement).parentElement;
            if (parent) {
              const fallback = document.createElement("div");
              fallback.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--gray-100);color:var(--gray-400);font-size:12px;text-align:center;padding:12px;";
              fallback.textContent = label;
              parent.appendChild(fallback);
            }
          }}
        />
      ) : (
        <span style={{ fontSize: 13, color: "#888" }}>{label}</span>
      )}
    </div>
  );
}