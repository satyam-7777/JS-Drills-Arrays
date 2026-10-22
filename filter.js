// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test

function filter(elements, callback) {
  let filteredArray = [];
  for (let index = 0; index < elements.length; index++) {
    const isMatch = callback(elements[index], index, elements);

    if (isMatch) {
      filteredArray.push(elements[index]);
    }
  }
  return filteredArray;
}

module.exports = filter;
