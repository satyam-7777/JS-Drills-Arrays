const find = require("../find");
const elements = [1, 2, 3, 4, 5, 5];

function callbackFn(element, index, elements) {
  return element < 3;
}

const result = find(elements, callbackFn);
console.log(result);
