// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

const isPalindrome = (x) => {
	let rev = Number(x.toString().split('').reverse().join(''));
	return x === rev ? true : false;
};
