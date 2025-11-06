const reverseString = function (str) {
  let strSize = str.length;
  let newStr = "";

  for (let i = 1; i <= strSize; i++) {
    let char = str.charAt(strSize - i);
    newStr += char;
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
