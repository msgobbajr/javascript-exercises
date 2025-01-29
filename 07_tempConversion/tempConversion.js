const convertToCelsius = function(fTemp) {
  fTemp = (fTemp-32)*(5/9);
  if (fTemp%1 != 0) return Number(fTemp.toFixed(1));
  else return fTemp;
};

const convertToFahrenheit = function(cTemp) {
  cTemp = (cTemp*(9/5))+32;
  if (cTemp%1 != 0) return Number(cTemp.toFixed(1));
  else return cTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
