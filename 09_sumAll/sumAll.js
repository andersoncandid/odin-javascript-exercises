const sumAll = function (a, b) {
  let arr = [];

  // Check if inputs are posite integer numbers
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  // In case of larger number first
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
