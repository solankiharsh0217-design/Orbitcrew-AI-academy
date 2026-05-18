import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-stack">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
          <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {item.q}
            <span className="icon">+</span>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
