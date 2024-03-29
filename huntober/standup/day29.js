// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// Example:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

const fib = (num) => {
	if (num <= 1 || num === 1) {
		return num;
	} else {
		return fib(num - 1) + fib(num - 2);
	}
};

// no recursion

const fibbi = (n) => {
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}

	return arr[n];
};

console.log(fibbi(2), 1);
console.log(fibbi(3), 2);
console.log(fibbi(4), 3);
