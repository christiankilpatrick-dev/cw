// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

// You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

// Note: 0! is always equal to 1. Negative values should return null;

function factorial(n) {
	let arr = [];
	if (n === 0) {
		return 1;
	} else if (n < 0 || !n) {
		return null;
	} else {
		for (i = n; i > 0; i--) {
			arr.push(i);
		}
		return arr.reduce((acc, cv) => (acc *= cv));
	}
}

console.log(factorial(9));
console.log(factorial(2), 2, 'Your math may be incorrect');
console.log(factorial(5), 120, 'Your math may be incorrect');
console.log(factorial(-1), null, "Don't forget to check for negatives!");
