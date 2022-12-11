// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

const divCon = (x) => {
	let str = x
		.filter((cv) => typeof cv === 'string')
		.reduce((a, c) => (a += Number(c)), 0);

	let nonStr = x
		.filter((cv) => typeof cv === 'number')
		.reduce((a, c) => (a += c), 0);
	return nonStr - str;
};

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
