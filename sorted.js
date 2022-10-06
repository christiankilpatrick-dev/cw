// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

const isSortedAndHow = (a) => {
	const s = a.join``;
	return s === a.sort((x, y) => x - y).join``
		? 'yes, ascending'
		: s === a.sort((x, y) => y - x).join``
		? 'yes, descending'
		: 'no';
};
