// Return a new array that contains exactly the same elements as the input array, but with elements a and b swapped.

// If the array has multiple copies of a, swap only the first one that appears in the array.
// If the array has multiple copies of b, swap only the last one that appears in the array.
// For example:

// ([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
// ([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]

const swapTwo = (arr, x, y) => {
  let xIndex = arr.indexOf(x);
  let yIndex = arr.lastIndexOf(y);
  return arr.map((num, i) => {
    if (i === xIndex) {
      return y;
    } else if (i === yIndex) {
      return x;
    } else {
      return num;
    }
  });
};

console.log(swapTwo([1, 2, 3, 4], 2, 4), [1, 4, 3, 2]);
console.log(swapTwo([1, 2, 3, 4, 1, 2, 3, 4], 2, 4), [1, 4, 3, 4, 1, 2, 3, 2]);
console.log(
  swapTwo([9, 3, 1, 2, 3, 4, 1, 3, 3, 4, 8, 3, 7, 1, 7], 1, 3),
  [9, 3, 3, 2, 3, 4, 1, 3, 3, 4, 8, 1, 7, 1, 7]
);
console.log(
  swapTwo([9, 3, 1, 2, 3, 4, 1, 3, 3, 4, 8, 3, 7, 1, 7], 3, 1),
  [9, 1, 1, 2, 3, 4, 1, 3, 3, 4, 8, 3, 7, 3, 7]
);
