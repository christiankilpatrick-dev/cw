// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

const cubeOdd = (arr) => {
	let odds = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			return undefined;
		} else if (arr[i] % 2) {
			odds.push(arr[i] ** 3);
		}
	}
	return odds.reduce((a, c) => (a += c));
};

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(['a', 12, 9, 'z', 42]), undefined);
