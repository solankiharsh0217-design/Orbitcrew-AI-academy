import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
}

export const AnimatedSection = ({
  children,
  delay = 0,
  stagger = 0.1,
  direction = 'up',
  className,
  once = true,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const controls = useAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'down':
        return { y: -40, opacity: 0 };
      case 'left':
        return { x: -40, opacity: 0 };
      case 'right':
        return { x: 40, opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay / 1000,
      },
    },
  };

  const itemVariant = {
    hidden: getInitialPosition(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={cn('w-full', className)}
    >
      {childrenArray.map((child, idx) => (
        <motion.div key={idx} variants={itemVariant}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};