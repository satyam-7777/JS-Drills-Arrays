const flatten = require("../flatten");
const nestedArray = [1, [2], [[3]], [[[4]]]];

const result = flatten(nestedArray);
console.log(result);
