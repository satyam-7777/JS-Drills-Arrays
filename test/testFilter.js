const filter = require("../filter");
const elements = [1, 2, 3, 4, 5, 5];
const itemLessThanThree = 3;

function callbackFn(element, index, elements) {
  return element < itemLessThanThree;
}

const result = filter(elements, callbackFn);
console.log(result);
