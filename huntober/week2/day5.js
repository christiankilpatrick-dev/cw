// 10-12-22
//1. Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function.

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const shuffleArray = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			let iIndex = Math.floor(Math.random() * arr.length);
			let jIndex = Math.floor(Math.random() * arr.length);

			let element = arr[i][j];
			arr[i][j] = arr[iIndex][jIndex];
			arr[iIndex][jIndex] = element;
		}
	}
	return arr;
};

console.log(shuffleArray(myArray), [
	[8, 3, 5],
	[2, 4, 9],
	[6, 7, 1],
]);
