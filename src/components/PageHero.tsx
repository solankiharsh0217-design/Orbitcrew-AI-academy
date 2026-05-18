interface PageHeroProps {
  label: string;
  title: string;
  desc: string;
}

export default function PageHero({ label, title, desc }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}
