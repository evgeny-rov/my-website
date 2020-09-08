const getRGBAColor = () => {
  const genNumber = () => Math.floor(Math.random() * 254);

  return `rgba(${genNumber()}, ${genNumber()}, ${genNumber()}, 0.2)`;
};

const gradColor = getRGBAColor();

export const sectionAnims: any = {
  animate: {
    background: [
      `linear-gradient(0deg, rgba(0, 0, 0, 0.03) 80%, rgba(200, 140, 95, 0.3))`,
      `linear-gradient(90deg, rgba(0, 0, 0, 0.03) 80%, rgba(200, 140, 95, 0.3))`,
      `linear-gradient(180deg, rgba(0, 0, 0, 0.03) 80%, rgba(200, 140, 95, 0.3))`,
      `linear-gradient(270deg, rgba(0, 0, 0, 0.03) 80%, rgba(200, 140, 95, 0.3))`,
      `linear-gradient(360deg, rgba(0, 0, 0, 0.03) 80%, rgba(200, 140, 95, 0.3))`,
    ],
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.2,
      repeat: Infinity,
      duration: 20,
      repeatType: 'reverse'
    },
  },
};

export const containerAnims: any = {
  initial: { opacity: 0, y: 300, scale: 0 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: {
    type: 'spring',
    delay: 0.5,
    restDelta: 0.001,
    stiffness: 30,
  },
};

//rgba(243, 92, 148, 0.2)
//rgba(241, 200, 243, 0.2)
//rgba(64, 108, 236, 0.2)
//91, 208, 208, 0.5
//linear-gradient(200deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1) 20% 80%, rgba(200, 140, 95, 0.3))
//linear-gradient(22deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1) 10% 90%, rgba(0, 0, 0, 0));

/*

const linkAnims: any = {
  animate: {
    textShadow: [
      '-1px -1px 0 rgba(245, 77, 83, 0.5), 1px 1px 0 rgba(58, 245, 241, 0.5)',
      '5px 5px 0 rgba(245, 77, 83, 0.5), -5px -5px 0 rgba(58, 245, 241, 0.5)',
      '-5px 5px 0 rgba(245, 77, 83, 0.5), 5px -5px 0 rgba(58, 245, 241, 0.5)',
      '1px 1px 0 rgba(245, 77, 83, 0.5), -1px -1px 0 rgba(58, 245, 241, 0.5)',
    ],
  },
  transition: { duration: 10, repeat: Infinity, repeatType: 'reverse', repeatDelay: 5 },
}
*/

const animsContainer: any = {
  hidden: { background: 'linear-gradient(20deg, rgba(200, 140, 95, 0.3), rgba(0, 0, 0, 0.1) 20% 80%, rgba(0, 0, 0, 0))'},
  show: {
    background: 'linear-gradient(200deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1) 20% 80%, rgba(200, 140, 95, 0.3))',
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.2,
      repeat: Infinity,
      duration: 10,
    },
  },
};



