export const navAnims = {
  initial: { y: -2000 },
  animate: { y: 0 },
  transition: { type: 'spring', mass: 0.1, stiffness: 50, delay: 1.2 },
};

export const mainSecContainerAnims: any = {
  initial: { opacity: 0, y: 300, scale: 0 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: {
    type: 'spring',
    delay: 0.5,
    restDelta: 0.001,
    stiffness: 30,
  },
};

export const mainSecAnims: any = {
  animate: {
    background: [
      `linear-gradient(360deg, rgba(0, 0, 0, 0) 80%, rgba(200, 140, 95, 0.2))`,
      `linear-gradient(270deg, rgba(0, 0, 0, 0) 80%, rgba(200, 140, 95, 0.2))`,
      `linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(200, 140, 95, 0.2))`,
      `linear-gradient(90deg, rgba(0, 0, 0, 0) 80%, rgba(200, 140, 95, 0.2))`,
      `linear-gradient(0deg, rgba(0, 0, 0, 0) 80%, rgba(200, 140, 95, 0.2))`,
    ],
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.2,
      repeat: Infinity,
      duration: 20,
      repeatType: 'reverse',
    },
  },
};

export const mainSecChildAnims = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const contactsAnims = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: 'spring',
    restDelta: 0.001,
    stiffness: 30,
  },
};
