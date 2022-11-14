// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

const gimme = (arr) => {
	let og = arr.slice(0);
	let sorted = arr.sort((a, b) => a - b);
	return og.indexOf(sorted[1]);
};

console.log(gimme([2, 3, 1]), 0);

console.log(gimme([5, 10, 14]), 1);
