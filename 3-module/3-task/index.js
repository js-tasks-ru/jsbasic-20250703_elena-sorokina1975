function camelize(str) {
  let liters = [];
  liters = str.split("-");
  let upperStr = liters[0];
  for (let i = 1; i < liters.length; i += 1) {
      upperStr = liters[i];
      upperStr = upperStr[0].toUpperCase() + upperStr.slice(1);
      liters[i] = upperStr;
  } 
  return liters.join("");
}
