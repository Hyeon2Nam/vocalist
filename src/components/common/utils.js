export const getRandom = (min, max) => {
  Math.floor(Math.random() * (max - min) + min);
};

export default getRandom;
