// Do NOT use forEach to complete this function.
// Iterates over a list of elements, yielding each in turn to the `cb` function.
// This only needs to work with arrays.
// You should also pass the index into `cb` as the second argument
// based off http://underscorejs.org/#each

function each(elements, callback) {
  for (let index = 0; index < elements.length; index++) {
    callback(elements[index], index, elements);
  }
}

module.exports = each;
