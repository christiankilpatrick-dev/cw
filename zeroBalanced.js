// An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.

const ìsZeroBalanced = (array) =>
  array.length > 0 &&
  array.every((n) => array.includes(-n)) &&
  array.reduce((sum, n) => sum + n) === 0;
