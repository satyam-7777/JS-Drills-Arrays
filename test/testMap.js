const map = require("../map");
const elements = [1, 2, 3, 4, 5, 5];

// square of elements
function callbackFn(element, index, elements) {
  return element * element;
}

const result = map(elements, callbackFn);
console.log(result);
