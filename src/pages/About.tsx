import PageHero from "../components/PageHero";
import ImagePlaceholder from "../components/ImagePlaceholder";
import FinalCTA from "../components/FinalCTA";
import HorizontalScroll from "../components/HorizontalScroll";
import { motion } from "framer-motion";

const values = [
  { icon: "🎯", title: "Practical Learning Philosophy", desc: "We believe skills are built through practice, not theory. Every concept is learned by building real projects and solving real problems." },
  { icon: "👥", title: "Small Batch Approach", desc: "With only 10-15 students per batch, every student gets personalized attention, direct mentorship, and a focused learning environment." },
  { icon: "🏛️", title: "Premium Classroom Environment", desc: "Modern workstations, collaborative spaces, and a professional atmosphere designed for deep focus and effective learning." },
  { icon: "🧠", title: "Mentorship-Driven Learning", desc: "Learn from experienced mentors who guide you through practical challenges, share industry insights, and support your growth." },
  { icon: "🤖", title: "AI-Focused Future Skills", desc: "We focus on the skills that matter today and tomorrow — AI automation, digital marketing, web development, and modern business tools." },
  { icon: "🔨", title: "Real-World Projects", desc: "Every student builds a portfolio of real projects that demonstrate practical skills to employers and clients." },
];

const classroomImages = [
  "Premium Classroom", "Workstation Area", "Mentorship Session",
  "Student Collaboration", "Project Review", "Learning Session",
  "Classroom Overview",
];

const mentors = [
  { img: "Senior Mentor", name: "Senior Mentor", role: "AI Automation & Technology" },
  { img: "Web Development Mentor", name: "Technical Mentor", role: "Web Development & Design" },
  { img: "Marketing Mentor", name: "Marketing Mentor", role: "Digital Marketing & Strategy" },
];

export default function About() {
  return (
    <>
      <PageHero
        label="About Academy"
        title="OrbitCrew AI Academy — Building Future-Ready Skills"
        desc="A modern, practical AI academy focused on real skills, real projects, and real career outcomes. We are not a traditional coaching center — we are a career-building ecosystem."
      />

      {/* Vision */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Our Vision</span>
            <h2 className="section-title">Making Practical AI & Digital Education Accessible</h2>
            <p className="section-subtitle">
              OrbitCrew AI Academy was created to bridge the gap between traditional education and the real-world skills that today's careers demand. We focus on practical, hands-on learning that prepares students for the AI-driven digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark">
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="section-subtitle mb-32">Our approach is built on principles that put your growth first.</p>
          <div className="why-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="why-card value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="value-icon">{v.icon}</div>
                <div className="why-card-body">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Local Presence</span>
            <h2 className="section-title">Rooted in the Community</h2>
            <p className="section-subtitle">
              We are based in Haryana, serving students from Gohana, Rohtak, Sonipat, Panipat, Jind, and nearby towns and villages. We understand the local education landscape and the career aspirations of students in our region.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Experienced Mentors & Trainers</h2>
            <p className="section-subtitle">Our mentors bring real industry experience and a passion for teaching practical skills.</p>
          </div>
          <div className="why-grid mentors-grid">
            {mentors.map((m, i) => (
              <motion.div
                key={i}
                className="why-card mentor-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="why-card-image"><ImagePlaceholder label={m.img} /></div>
                <div className="why-card-body">
                  <h3>{m.name}</h3>
                  <p className="mentor-role">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Gallery */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Our Space</span>
            <h2 className="section-title">Premium Learning Environment</h2>
            <p className="section-subtitle">Designed for focused, collaborative, and practical learning.</p>
          </div>
          <HorizontalScroll trackClassName="env-track">
            {classroomImages.map((l, i) => (
              <div key={i} className="env-card">
                <ImagePlaceholder label={l} />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      <FinalCTA title="Experience the Difference" subtitle="Book a counseling session and see what makes OrbitCrew AI Academy different." />
    </>
  );
}
