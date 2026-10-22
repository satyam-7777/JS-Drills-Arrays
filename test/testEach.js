const each = require("../each");
const elements = [1, 2, 3, 4, 5, 5];

function callbackFn(element, index, elements) {
  console.log(`${element} is at index ${index}`);
}

each(elements, callbackFn);
