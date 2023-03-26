// Your distributeEvenly function will take an array as an argument and needs to return a new array with the values distributed evenly.

// Example:

// Argument: ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four']

// Result: ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']

// The underlying order will stay the same as in the original array. So in the case of our argument above, one comes before two so it stays this way in the returned array.

// The aim is to have the longest possible chain of evenly distributed values (from the left to right), this means that an argument with many of the same elements might have many which are repeated at the end.

// Example:

// Argument: ['one', 'one', 'one', 'one', 'one', 'two', 'three']

// Result: [ 'one', 'two', 'three', 'one', 'one', 'one', 'one' ]

const distributeEvenly = (array) => {
  const primer = new Set(array);
  let result = [];
  while (array.length > 0) {
    for (let i of primer) {
      if (array.find((a) => a === i)) {
        array.splice(array.indexOf(i), 1);
        result.push(i);
      }
    }
  }
  return result;
};
