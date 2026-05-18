import PageHero from "../components/PageHero";
import ProgramsStack from "../components/ProgramsStack";
import Showcase from "../components/Showcase";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { motion } from "framer-motion";

const careerCards = [
  { icon: "🤖", title: "AI Automation Specialist", desc: "Build and manage automation systems for businesses using AI tools and no-code platforms." },
  { icon: "🌐", title: "Web Developer", desc: "Create professional websites and ecommerce stores for clients or employers." },
  { icon: "📱", title: "Digital Marketing Specialist", desc: "Run ad campaigns, manage social media, and drive growth for businesses." },
  { icon: "💼", title: "Freelance Professional", desc: "Work independently offering AI, web, or marketing services to clients globally." },
  { icon: "🏢", title: "Business Consultant", desc: "Help businesses adopt AI automation and digital transformation strategies." },
];

const tools = [
  { img: "ChatGPT Dashboard", title: "ChatGPT & AI Tools", desc: "Advanced prompt engineering, workflow integration, and AI-powered productivity systems." },
  { img: "WordPress Dashboard", title: "WordPress & Elementor", desc: "Professional website building with the world's most popular CMS and page builder." },
  { img: "Meta Ads Dashboard", title: "Meta Ads Manager", desc: "Real ad campaign creation, management, optimization, and performance analysis." },
  { img: "Make Automation", title: "Make & Zapier", desc: "No-code automation platforms for building complex multi-step workflows." },
  { img: "Shopify Store", title: "Shopify", desc: "Ecommerce store development from setup to product management and optimization." },
  { img: "Analytics Dashboard", title: "Analytics & Dashboards", desc: "Data-driven decision making with analytics tools and custom reporting dashboards." },
];

const programFaq = [
  { q: "Which program is best for beginners?", a: "All programs are beginner-friendly. AI Automation and Digital Marketing are great starting points if you are new to technical skills. We start from zero in every program." },
  { q: "Can I switch programs after starting?", a: "Yes. If you find that a different path suits you better after starting, you can discuss switching with your mentor." },
  { q: "Are certifications provided?", a: "Yes. Students who complete their program and projects receive a certificate of completion from OrbitCrew AI Academy." },
  { q: "How many students per batch?", a: "We maintain small batches of 10 to 15 students maximum to ensure personalized mentorship and focused learning." },
];

export default function Programs() {
  return (
    <>
      <PageHero label="Our Programs" title="Practical Programs for Real Careers" desc="Every program is designed around real-world skills, practical projects, and career outcomes. No theory-heavy courses — only hands-on, job-ready training." />

      {/* Comparison */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Program Comparison</h2>
          <p className="section-subtitle mb-32">Find the right path based on your interests and career goals.</p>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>AI Automation</th>
                  <th>Web Development</th>
                  <th>Digital Marketing</th>
                  <th>Custom Path</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Duration</td>
                  <td>5 Months</td>
                  <td>6 Months</td>
                  <td>4 Months</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>Beginner Friendly</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Projects Included</td>
                  <td>AI workflows, dashboards, lead systems</td>
                  <td>Websites, stores, portfolios</td>
                  <td>Ad campaigns, funnels, growth systems</td>
                  <td>Custom per path</td>
                </tr>
                <tr>
                  <td>Tools Mastered</td>
                  <td>ChatGPT, Make, Zapier, GoHighLevel, Notion</td>
                  <td>WordPress, Elementor, Shopify</td>
                  <td>Meta Ads, Canva, Analytics</td>
                  <td>Multi-tool</td>
                </tr>
                <tr>
                  <td>Career Outcomes</td>
                  <td>Automation Specialist, CRM Expert</td>
                  <td>Web Developer, Shopify Specialist</td>
                  <td>Marketing Specialist, Media Buyer</td>
                  <td>Versatile roles</td>
                </tr>
                <tr>
                  <td>Portfolio Ready</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Modules */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <h2 className="section-title">Detailed Program Modules</h2>
          <p className="section-subtitle mb-32">Deep dive into what you learn in each program.</p>
          <ProgramsStack />
        </div>
      </section>

      {/* Tools */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Tools & Platforms</span>
            <h2 className="section-title">Industry Tools You Master</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Hands-on training with the same tools used by professionals and agencies worldwide.</p>
          </div>
          <div className="why-grid">
            {tools.map((t, i) => (
              <motion.div
                key={i}
                className="why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="why-card-image"><ImagePlaceholder label={t.img} /></div>
                <div className="why-card-body"><h3>{t.title}</h3><p>{t.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Showcase title="Projects Students Build" subtitle="Real projects that become part of your professional portfolio and give you practical experience." />

      {/* Career pathways */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">Your Future</span>
            <h2 className="section-title">Possible Career Directions</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Your learning path opens doors to multiple career opportunities in the digital economy.</p>
          </div>
          <div className="pain-grid">
            {careerCards.map((c, i) => (
              <motion.div
                key={i}
                className="pain-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Program Questions</h2>
          </div>
          <FAQ items={programFaq} />
        </div>
      </section>

      <FinalCTA title="Find the Right Program For You." subtitle="Talk to our mentors and discover which learning path aligns with your goals." />
    </>
  );
}
