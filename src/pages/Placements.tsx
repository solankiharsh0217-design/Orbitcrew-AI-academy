import PageHero from "../components/PageHero";
import ImagePlaceholder from "../components/ImagePlaceholder";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import HorizontalScroll from "../components/HorizontalScroll";
import { motion } from "framer-motion";

const placementFaq = [
  { q: "Do you guarantee job placements?", a: "We do not guarantee jobs. We provide placement support including resume building, interview preparation, and job search strategies. Outcomes depend on individual effort and market conditions." },
  { q: "How does internship support work?", a: "Students who demonstrate strong attendance, complete their projects, and show a positive learning attitude are eligible for internship support and guidance." },
  { q: "What kind of companies do students work with?", a: "Students have opportunities with startups, digital agencies, local businesses, and remote work platforms. The specific opportunities depend on skills and market demand." },
  { q: "Can I work freelance after training?", a: "Yes. Many of our graduates choose freelancing careers. We provide guidance on finding clients, pricing services, and building a freelance business." },
  { q: "Is there support after program completion?", a: "Yes. We provide post-completion support including portfolio updates, interview preparation, and career guidance for a period after graduation." },
];

const workplaceImages = [
  "Workplace Environment", "Interview Session", "Portfolio Review",
  "Team Collaboration", "Professional Workspace", "Career Counseling",
];

export default function Placements() {
  return (
    <>
      <PageHero
        label="Placements & Internships"
        title="Building Career Opportunities"
        desc="We are committed to helping students transition from learning to earning through structured career support, internship guidance, and placement preparation."
      />

      <section className="section-light">
        <div className="container">
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
                <li>Guidance on internship applications and interviews</li>
              </ul>
            </motion.div>
            <motion.div
              className="split-card stagger-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3>Placement Support System</h3>
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
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Portfolio & Presence</span>
            <h2 className="section-title">Building Your Professional Identity</h2>
            <p className="section-subtitle">Your portfolio and online presence are your career assets. We help you build both.</p>
          </div>
          <div className="why-grid">
            {[
              { img: "Portfolio Website", title: "Portfolio Development", desc: "Showcase your projects with a professional portfolio that highlights your skills and achievements." },
              { img: "LinkedIn Profile", title: "LinkedIn Optimization", desc: "Build a compelling LinkedIn profile that attracts recruiters and demonstrates your expertise." },
              { img: "Resume Building", title: "Resume & Interview Prep", desc: "Create professional resumes and practice interview skills with personalized feedback sessions." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="why-card stagger-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="why-card-image"><ImagePlaceholder label={item.img} /></div>
                <div className="why-card-body"><h3>{item.title}</h3><p>{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Who Qualifies</span>
            <h2 className="section-title">Student Expectations</h2>
            <p className="section-subtitle">To benefit most from our placement support, students should demonstrate commitment and dedication.</p>
          </div>
          <div className="pain-grid expectations-grid">
            {[
              { title: "Strong Attendance", desc: "Regular attendance in all training sessions and project reviews is essential for building skills and confidence." },
              { title: "Project Completion", desc: "Completing all assigned projects demonstrates your ability to apply what you have learned effectively." },
              { title: "Positive Attitude", desc: "A willingness to learn, accept feedback, and improve continuously is highly valued by mentors and employers." },
              { title: "Active Participation", desc: "Engaging in discussions, asking questions, and collaborating with peers enhances your learning experience." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pain-card stagger-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="icon">✓</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="notice-box">
            <strong>Please Note:</strong> Students with strong attendance, project completion, and learning attitude may receive internship or placement support opportunities. Outcomes depend on individual effort, performance, and market conditions.
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Workplace</span>
            <h2 className="section-title">Professional Environment</h2>
            <p className="section-subtitle">Real workplaces where our students build their careers.</p>
          </div>
          <HorizontalScroll trackClassName="env-track">
            {workplaceImages.map((l, i) => (
              <div key={i} className="env-card">
                <ImagePlaceholder label={l} />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Career Support Questions</h2>
          </div>
          <FAQ items={placementFaq} />
        </div>
      </section>

      <FinalCTA title="Start Your Career Journey" subtitle="Book a free counseling session and learn how we can support your career goals." />
    </>
  );
}
