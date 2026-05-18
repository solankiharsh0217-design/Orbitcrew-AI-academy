import PageHero from "../components/PageHero";
import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

const journeyFaq = [
  { q: "How long does the counseling process take?", a: "Counseling sessions typically take 30-45 minutes. We discuss your goals, interests, and explain how our programs work." },
  { q: "What happens during screening?", a: "Screening is a simple conversation to understand your background, comfort with computers, and learning goals. It helps us recommend the right program." },
  { q: "What if I miss classes?", a: "Consistent attendance is important for practical learning. We expect commitment from our students to get the best outcomes." },
  { q: "Can I join mid-batch?", a: "In most cases, we prefer students to start at the beginning of a batch to ensure they get the complete learning experience." },
];

const sections = [
  {
    title: "Counseling Process",
    desc: "Your journey begins with a free, no-obligation counseling session. We listen to your goals, understand your background, and help you explore which program fits your aspirations. You can ask any questions about the academy, programs, or career outcomes.",
  },
  {
    title: "Screening Process",
    desc: "After counseling, we conduct a basic screening conversation. This helps us understand your current skill level, learning readiness, and career interests. It also helps us ensure you are placed in the right batch and program.",
  },
  {
    title: "Training Structure",
    desc: "Training is hands-on from day one. Each session combines practical demonstrations with real project work. You learn by building, not by memorizing. Our mentors guide you through each step with personalized attention.",
  },
  {
    title: "Projects Workflow",
    desc: "Every program includes structured project work. You start with guided projects and progress to independent builds. Each project is reviewed by mentors who provide feedback and suggestions for improvement.",
  },
  {
    title: "Portfolio Building",
    desc: "Your portfolio is your career passport. We help you select your best projects, present them professionally, and build an online presence that employers notice. Every student graduates with a portfolio they can proudly share.",
  },
  {
    title: "Internship Support",
    desc: "Students who demonstrate strong skills, consistent attendance, and project completion receive internship support. We help prepare you for internship applications and interviews.",
  },
  {
    title: "Placement Assistance",
    desc: "Our placement assistance includes resume building, LinkedIn optimization, interview preparation, and job search strategies. We prepare you to present yourself confidently to employers.",
  },
  {
    title: "Attendance Expectations",
    desc: "Regular attendance is essential for practical learning. We expect students to attend all sessions, complete assignments on time, and actively participate in projects and discussions.",
  },
];

export default function StudentJourney() {
  return (
    <>
      <PageHero
        label="Student Journey"
        title="Your Path from Beginner to Professional"
        desc="A structured, step-by-step process designed to take you from your first counseling session to a confident career in AI and digital skills."
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">The Complete Journey</h2>
          <p className="section-subtitle mb-32">Every step is designed to build your skills, confidence, and career readiness.</p>
          <Timeline />
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <h2 className="section-title">Understanding Each Step</h2>
          <p className="section-subtitle mb-32">Detailed breakdown of what to expect at every stage of your journey.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {sections.map((s, i) => (
              <div key={i} style={{ padding: "28px 32px", background: "var(--white)", borderRadius: "var(--radius-md)", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--primary)", color: "var(--white)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--gray-500)", lineHeight: 1.7, marginLeft: 40 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Journey Questions</h2>
          </div>
          <FAQ items={journeyFaq} />
        </div>
      </section>

      <FinalCTA title="Ready to Start Your Journey?" subtitle="Book a free counseling session and take the first step toward your future." />
    </>
  );
}
