// write a function that takes in a given array of strings and move any entries containing the letter 'a' to the front, and then move any entries that have over 3 characters to the back. Please preserve the order of things while you do this!

// Example:
const myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'];
// move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

const reArrange = (arr) => {
	let containsA = [];
	let moreThanThree = [];
	let middle = [];
	arr.forEach((item) => item.includes('a') && containsA.push(item));
	arr.forEach(
		(item) =>
			item.length > 3 && !containsA.includes(item) && moreThanThree.push(item)
	);
	arr.forEach(
		(item) =>
			!containsA.includes(item) &&
			!moreThanThree.includes(item) &&
			middle.push(item)
	);
	return containsA.concat(middle, moreThanThree);
};

console.log(reArrange(myArr), [
	'hola',
	'hallo',
	'hi',
	'hej',
	'hello',
	'howdy',
	'heyyy',
]);
