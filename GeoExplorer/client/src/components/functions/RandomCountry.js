const randomNumber = () => {
  const number = Math.floor(Math.random() * 250);
  return number;
};

export const returnRandomCountry = (all) => {
  return all[randomNumber()];
};
