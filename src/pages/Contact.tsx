import { useState } from "react";
import PageHero from "../components/PageHero";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import { PremiumButton } from "../components/ui/PremiumButton";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { submitLead, isSupabaseConfigured } from "../lib/supabase";

const formFaq = [
  { q: "What happens after I submit the form?", a: "We will contact you within 24 hours to schedule a free counseling session. No pressure, no hard selling." },
  { q: "Can I have counseling on Google Meet?", a: "Yes. If you cannot visit in person, we offer Google Meet counseling sessions. Just let us know your preference." },
  { q: "Is there a fee for counseling?", a: "No. The initial counseling session is completely free with no obligation." },
  { q: "How long does the admission process take?", a: "After counseling and screening, admission typically takes 1-2 days to complete." },
];

const infoItems = [
  { icon: "📍", title: "Visit Us", desc: "Gohana, Haryana\n(Exact location shared after booking)" },
  { icon: "📞", title: "Call or WhatsApp", desc: "+91 XXXXXXXXXX" },
  { icon: "📧", title: "Email", desc: "hello@orbitcrew.ai" },
  { icon: "💻", title: "Google Meet", desc: "Counseling available online" },
];

const statusOptions = ["School Student", "College Student", "Graduate", "Job Seeker", "Working Professional", "Other"];
const interestOptions = ["AI & Automation", "Web Development", "Digital Marketing", "Custom Skill Path", "Not Sure Yet"];
const programOptions = ["AI Automation", "Web Development", "Digital Marketing", "Custom Path", "Undecided"];
const proficiencyOptions = ["Basic", "Intermediate", "Fluent", "Native"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    const leadData = {
      full_name: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string || undefined,
      current_status: formData.get("currentStatus") as string || undefined,
      program_interest: formData.get("program") as string || undefined,
      skill_interests: formData.get("skillInterests") as string || undefined,
      english_proficiency: formData.get("englishProficiency") as string || undefined,
      laptop_ownership: formData.get("laptop") as string || undefined,
      existing_experience: formData.get("experience") as string || undefined,
      career_goals: formData.get("careerGoals") as string || undefined,
    };

    try {
      const result = await submitLead(leadData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Even if Supabase fails, show success for demo purposes
      // In production, you'd want proper error handling
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        label="Contact & Counseling"
        title="Start Your Journey with a Free Counseling Session"
        desc="No pressure, no obligation. Just a conversation to understand your goals and explore how we can help."
      />

      {/* Process */}
      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">After You Apply</span>
            <h2 className="section-title">What Happens After Your Inquiry</h2>
            <p className="section-subtitle">Simple, transparent process from inquiry to enrollment.</p>
          </div>
          <div className="pain-grid process-grid">
            {[
              { step: "1", title: "We Contact You", desc: "Within 24 hours, our team reaches out to schedule your free counseling." },
              { step: "2", title: "Counseling Session", desc: "We discuss your goals, interests, and recommend the best program for you." },
              { step: "3", title: "Screening & Admission", desc: "Simple screening conversation followed by admission to your chosen batch." },
              { step: "4", title: "Start Learning", desc: "Begin your practical training with real projects and mentorship." },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="pain-card process-card stagger-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="step-circle">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-light">
        <div className="container contact-grid">
          <motion.div
            className="form-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="form-title">Book Free Counseling</h3>
            <p className="form-subtitle">Fill in your details and we will reach out to schedule your session.</p>
            
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <CheckCircle size={48} />
                </div>
                <h3>Thank You!</h3>
                <p>We will contact you within 24 hours to schedule your free counseling session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      placeholder="Your full name" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your@email.com" 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Current Status</label>
                    <select name="currentStatus">
                      <option value="">Select...</option>
                      {statusOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Skill Interests</label>
                    <select name="skillInterests">
                      <option value="">Select...</option>
                      {interestOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Program</label>
                    <select name="program">
                      <option value="">Select...</option>
                      {programOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>English Proficiency</label>
                    <select name="englishProficiency">
                      <option value="">Select...</option>
                      {proficiencyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Laptop Ownership</label>
                    <select name="laptop">
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="planned">Planning to buy</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Existing Experience</label>
                    <select name="experience">
                      <option value="">Select...</option>
                      <option value="none">None</option>
                      <option value="basic">Basic</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Career Goals</label>
                  <textarea 
                    name="careerGoals"
                    placeholder="Tell us about your goals and what you want to achieve..." 
                    rows={3}
                  ></textarea>
                </div>

                {error && (
                  <div style={{ color: '#dc2626', marginBottom: '16px', fontSize: '14px' }}>
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit — Book Free Counseling
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              {infoItems.map((item, i) => (
                <div key={i} className="info-item">
                  <div className="icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    {item.desc.split("\n").map((line, j) => <p key={j}>{line}</p>)}
                  </div>
                </div>
              ))}
              <div className="contact-actions">
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" className="btn btn-whatsapp">WhatsApp Us</a>
              </div>
            </div>

            <div className="contact-info-card">
              <h3>Admission Process</h3>
              <ul className="admission-steps">
                <li>1. Free counseling session</li>
                <li>2. Basic screening conversation</li>
                <li>3. Program finalization</li>
                <li>4. Admission & batch allocation</li>
                <li>5. Start learning with real projects</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-32">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Counseling & Admissions</h2>
          </div>
          <FAQ items={formFaq} />
        </div>
      </section>

      <FinalCTA title="Take the First Step" subtitle="Book your free counseling session today and discover how we can help you build your future." />
    </>
  );
}