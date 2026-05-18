import { Variants } from 'framer-motion';

export const animations = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: (custom: number = 0.1) => ({
      opacity: 1,
      transition: {
        staggerChildren: custom,
        delayChildren: 0.1,
      },
    }),
  } as Variants,

  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  } as Variants,

  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  } as Variants,

  accordionExpand: {
    closed: {
      opacity: 0,
      height: 0,
      overflow: 'hidden',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      overflow: 'visible',
      transition: {
        duration: 0.4,
        ease: 'easeInOut' as const,
      },
    },
  } as Variants,

  iconRotate: {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  } as Variants,

  buttonVariants: {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  } as Variants,

  cardVariants: {
    hover: {
      y: -4,
      transition: { duration: 0.3 },
    },
  } as Variants,

  badgePulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  } as Variants,
};

export const useScrollAnimation = () => {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };
};