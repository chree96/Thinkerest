const formatCounter = (worldCounter: number) => {
  let counter = worldCounter;
  return counter >= 1000 ? Math.trunc(counter / 1000) + 'k' : counter;
};

export default formatCounter;
