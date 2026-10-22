// Do NOT use .includes, to complete this function.
// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.

function find(elements, callback) {
  for (let index = 0; index < elements.length; index++) {
    const isMatch = callback(elements[index], index, elements);

    if (isMatch) {
      return elements[index];
    }
  }
  return;
}

module.exports = find;
