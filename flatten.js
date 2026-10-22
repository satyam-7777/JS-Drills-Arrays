// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

function flatten(elements) {
  let result = [];

  for (let index = 0; index < elements.length; index++) {
    if (Array.isArray(elements[index])) {
      result = result.concat(flatten(elements[index]));
    } else {
      result.push(elements[index]);
    }
  }

  return result;
}

module.exports = flatten;
