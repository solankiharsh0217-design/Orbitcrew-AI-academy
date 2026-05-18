import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ProgramsStack from "../components/ProgramsStack";
import Showcase from "../components/Showcase";
import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import HorizontalScroll from "../components/HorizontalScroll";
import ScrollProgress from "../components/ScrollProgress";
import StatsBar from "../components/StatsBar";
import Testimonials from "../components/Testimonials";
import { faqData } from "../data/programs";
import DotGlobeHeroDemo from "../components/ui/hero-demo";
import { PremiumButton } from "../components/ui/PremiumButton";
import { Calendar, Award, Users, Laptop, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "90%", label: "Placement Rate" },
    { value: "4", label: "Core Programs" },
    { value: "50+", label: "Live Projects" },
    { value: "15", label: "Expert Mentors" },
  ];

  const testimonials = [
    {
      quote: "OrbitCrew changed my career trajectory completely. The hands-on AI projects gave me a portfolio that impressed every interviewer.",
      name: "Priya Sharma",
      role: "AI Automation Graduate",
      initials: "PS",
    },
    {
      quote: "The small batch size meant I got personal attention. My mentor helped me land my first freelance client within a month of completing the course.",
      name: "Rahul Verma",
      role: "Web Development Student",
      initials: "RV",
    },
    {
      quote: "I went from zero digital marketing knowledge to managing campaigns for real clients. The practical approach is what sets OrbitCrew apart.",
      name: "Anjali Singh",
      role: "Digital Marketing Graduate",
      initials: "AS",
    },
  ];

  return (
    <>
      <ScrollProgress />

      {/* HERO — 3D Globe */}
      <DotGlobeHeroDemo />

      {/* STATS BAR */}
      <StatsBar items={stats} />

      {/* PAIN POINTS */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">The Reality</span>
            <h2 className="section-title">Why Most Students Feel Stuck</h2>
            <p className="section-subtitle">Traditional education leaves most students unprepared for real-world careers. Here is what is missing.</p>
          </div>
          <div className="pain-grid">
            {[
              { icon: <Calendar size={20} />, badge: "85%", title: "Outdated Education", desc: "The syllabus has not kept up with industry demands for years. Students graduate with knowledge that is already obsolete." },
              { icon: <Laptop size={20} />, badge: "0", title: "No Practical Exposure", desc: "Theory-heavy learning without hands-on projects leaves students unemployable despite completing degrees." },
              { icon: <Award size={20} />, badge: "1", title: "No Portfolio", desc: "Employers want to see real work. Most students graduate without a single project to showcase their skills." },
              { icon: <Target size={20} />, badge: "?", title: "No Career Direction", desc: "Without mentorship or industry exposure, students struggle to understand which career path suits them best." },
              { icon: <Heart size={20} />, badge: "0", title: "No Real-World Skills", desc: "Degrees alone do not build the practical skills that modern AI and digital careers demand." },
            ].map((c, i) => (
              <motion.div
                key={i}
                className="pain-card stagger-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="icon">{c.icon}</div>
                <span className="badge badge-premium">{c.badge}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ORBITCREW */}
      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Why OrbitCrew</span>
            <h2 className="section-title">A Different Kind of Learning Experience</h2>
            <p className="section-subtitle">We combine selective mentorship, real projects, and career-focused training to build job-ready skills.</p>
          </div>
          <div className="why-grid">
            {[
              { img: "Classroom Environment", badge: "10–15 Students", title: "Small Selective Batches", desc: "Only 10–15 students per batch ensures personalized attention and a focused learning environment." },
              { img: "AI & Tech Learning", badge: "AI-Focused", title: "AI-Focused Practical Training", desc: "Learn AI automation, ChatGPT workflows, no-code tools, and modern digital skills that employers actually need." },
              { img: "Project Review Session", badge: "Portfolio-Ready", title: "Real Projects & Portfolio", desc: "Build real projects, not assignments. Every student graduates with a portfolio of work they can show employers." },
              { img: "Mentorship Session", badge: "1-on-1", title: "Real Mentorship", desc: "Learn from mentors with industry experience who guide you through practical challenges and career decisions." },
              { img: "Internship Environment", badge: "Internships", title: "Internship Opportunities", desc: "Get real workplace exposure through internship support that bridges the gap between learning and working." },
              { img: "Collaboration", badge: "Career Support", title: "Placement Assistance & Freelance Guidance", desc: "From resume building to interview prep and freelancing strategies—we support your career journey." },
            ].map((c, i) => (
              <motion.div
                key={i}
                className={`why-card stagger-item ${i === 0 ? "card-featured" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="card-header">
                  <span className={`badge ${i === 0 ? "badge-premium" : "badge-default"}`}>{c.badge}</span>
                  <h3>{c.title}</h3>
                </div>
                <div className="why-card-image"><ImagePlaceholder label={c.img} /></div>
                <div className="card-body">
                  <p>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS OVERVIEW */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">Choose Your Learning Path</h2>
            <p className="section-subtitle">Practical, project-based programs designed for real career outcomes. Expand each to explore.</p>
          </div>
          <ProgramsStack />
        </div>
      </section>

      {/* SHOWCASE */}
      <Showcase />

      {/* STUDENT JOURNEY */}
      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Your Journey</span>
            <h2 className="section-title">From Counseling to Career</h2>
            <p className="section-subtitle">A structured path that takes you from absolute beginner to job-ready professional.</p>
          </div>
          <Timeline />
          <div className="info-box">
            <p><strong>Important:</strong> A laptop is required. Regular attendance, project completion, and a positive learning attitude are essential. Basic computer knowledge is preferred.</p>
          </div>
        </div>
      </section>

      {/* PLACEMENTS */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Career Support</span>
            <h2 className="section-title">Placements & Internships</h2>
            <p className="section-subtitle">We take your career seriously and provide structured support to help you transition into the workforce.</p>
          </div>
          <div className="split-grid">
            <motion.div
              className="split-card stagger-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3>Internship Opportunities</h3>
              <ul>
                <li>Real workplace exposure through internships</li>
                <li>Practical learning in professional environments</li>
                <li>Project-based evaluation for internship readiness</li>
                <li>Real-world exposure before full-time roles</li>
              </ul>
            </motion.div>
            <motion.div
              className="split-card stagger-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3>Placement Support</h3>
              <ul>
                <li>LinkedIn profile optimization</li>
                <li>Resume building and review</li>
                <li>Interview preparation sessions</li>
                <li>Portfolio support and presentation</li>
                <li>Freelance guidance for independent careers</li>
                <li>Placement preparation workshops</li>
              </ul>
            </motion.div>
          </div>
          <div className="notice-box">
            <strong>Please Note:</strong> Students with strong attendance, project completion, and learning attitude may receive internship or placement support opportunities. Outcomes depend on individual effort, performance, and market conditions.
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-accent">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Student Stories</span>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">Real experiences from real students who transformed their careers with OrbitCrew.</p>
          </div>
          <Testimonials items={testimonials} />
        </div>
      </section>

      {/* ENVIRONMENT GALLERY */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Our Space</span>
            <h2 className="section-title">A Real Learning Environment</h2>
            <p className="section-subtitle">Premium classrooms, modern workstations, and a collaborative atmosphere designed for focused learning.</p>
          </div>
          <HorizontalScroll trackClassName="env-track">
            {["Premium Classroom Overview", "Modern Workstations", "Mentorship Moment", "Practical Session", "Project Discussion", "Collaborative Learning", "Students Working"].map((l, i) => (
              <div key={i} className="env-card">
                <ImagePlaceholder label={l} />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className="section-dark">
        <div className="container center-block">
          <span className="section-label">Admissions</span>
          <h2 className="section-title">Selective Admissions</h2>
          <p className="section-subtitle">We maintain small batch sizes to ensure quality mentorship and a focused learning environment for every student.</p>
          <ul>
            <li>Small batches only — 10 to 15 students max</li>
            <li>Laptop is compulsory for all programs</li>
            <li>Basic screening process to understand your goals</li>
            <li>Attendance commitment expected</li>
            <li>Practical learning environment</li>
          </ul>
          <Link to="/contact">
            <PremiumButton variant="premium" size="lg" icon={Calendar}>
              Book Free Counseling
            </PremiumButton>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FAQ items={faqData} />
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </>
  );
}
