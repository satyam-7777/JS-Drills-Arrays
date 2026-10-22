const reduce = require("../reduce");
const elements = [1, 2, 3, 4, 5, 5];

// add the elements
function callbackFn(accumulator, element, index) {
  return accumulator + element;
}

const result = reduce(elements, callbackFn, 0);
console.log(result);
