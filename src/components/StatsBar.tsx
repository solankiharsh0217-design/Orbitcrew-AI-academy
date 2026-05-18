import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsBarProps {
  items: StatItem[];
}

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericTarget));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericTarget, hasAnimated]);

  return (
    <div ref={ref} className="stat-value">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsBar({ items }: StatsBarProps) {
  return (
    <div className="stats-bar">
      {items.map((item, i) => {
        const numericValue = item.value.replace(/[^0-9]/g, "");
        const suffix = item.value.replace(/[0-9]/g, "");
        return (
          <motion.div
            key={i}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <AnimatedCounter target={numericValue} suffix={suffix} />
            <div className="stat-label">{item.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
