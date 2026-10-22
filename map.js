// Do NOT use .map, to complete this function.
// How map works: Map calls a provided callback function once for each element in an array, in order, in order, and constructs a new array from the res .
// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
// Return the new array

function map(elements, callback) {
  let mappedArray = [];
  for (let index = 0; index < elements.length; index++) {
    const mappedElement = callback(elements[index], index, elements);
    mappedArray.push(mappedElement);
  }

  return mappedArray;
}

module.exports = map;
