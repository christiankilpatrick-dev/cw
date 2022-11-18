// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word) => {
	return word
		.split('')
		.filter((x) => x === x.toUpperCase())
		.map((x) => word.indexOf(x));
};

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
