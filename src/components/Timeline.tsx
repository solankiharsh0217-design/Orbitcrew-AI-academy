import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Free Counseling", desc: "Understand your goals, explore programs, and get all your questions answered with no commitment.", icon: "1" },
  { title: "Basic Screening", desc: "A simple conversation to understand your background, interests, and learning readiness.", icon: "2" },
  { title: "Admission", desc: "Complete the admission process and join your batch with a clear learning roadmap.", icon: "3" },
  { title: "Training & Real Projects", desc: "Hands-on training with real projects. Build practical skills from day one.", icon: "4" },
  { title: "Portfolio Building", desc: "Create a professional portfolio showcasing your best projects and skills.", icon: "5" },
  { title: "Internship Support", desc: "Receive guidance and support to secure internships that provide real workplace exposure.", icon: "6" },
  { title: "Placement Assistance", desc: "Get help with resume building, interview preparation, and job placement strategies.", icon: "7" },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="timeline">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          className="timeline-item"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="timeline-dot">
            <span>{s.icon}</span>
          </div>
          <div className="timeline-content">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
