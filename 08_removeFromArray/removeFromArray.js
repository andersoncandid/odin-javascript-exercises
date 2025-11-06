const removeFromArray = function (arr, ...rest) {
  return arr.filter((item, index, array) => !rest.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
