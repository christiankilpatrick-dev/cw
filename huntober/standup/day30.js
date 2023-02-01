// Try without recursion first and then get fancy. This problem really needs to be written out. Grab some paper!
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

const mygcd = (n1, n2) => {
  let min = Math.min(n1, n2);
  let divisors = [];
  for (let i = 1; i < min; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      divisors.push(i);
    }
  }
  return Math.max(...divisors) < 1 ? 1 : Math.max(...divisors);
};

function mygcd2(x, y) {
  for (let j = Math.max(x, y); j > 0; j--) {
    if (x % j === 0 && y % j === 0) {
      return j;
    }
  }
}
console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
