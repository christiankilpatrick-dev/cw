// Try without recursion first and then get fancy. This problem really needs to be written out. Grab some paper!
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd2(x, y) {
  for (let j = Math.min(x, y); j > 0; j--) {
    if (x % j === 0 && y % j === 0) {
      return j;
    }
  }
}

const mygcd3 = (a, b) => {
  if (b === 0) {
    return a;
  }
  return mygcd3(b, a % b);
};

console.log(mygcd3(30, 12), 6);
console.log(mygcd3(8, 9), 1);
