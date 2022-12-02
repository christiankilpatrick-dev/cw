// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		if (i % 2) {
			arr.push(secondValue);
		} else {
			arr.push(firstValue);
		}
	}
	return arr;
}

console.log(alternate(5, true, false), [true, false, true, false, true]);
console.log(alternate(10, 'blue', 'red'), [
	'blue',
	'red',
	'blue',
	'red',
	'blue',
	'red',
	'blue',
	'red',
	'blue',
	'red',
]);
console.log(alternate(0, 'one', 'two'), []);
