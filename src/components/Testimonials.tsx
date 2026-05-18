import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <div className="testimonials-track">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="testimonial-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="testimonial-quote">{item.quote}</div>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{item.initials}</div>
            <div>
              <div className="testimonial-name">{item.name}</div>
              <div className="testimonial-role">{item.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
