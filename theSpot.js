// Given a two dimensional array, return the co-ordinates of x.
// If x is not inside the array, or if x appears multiple times, return [].
// The coordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

const xMarksTheSpot = (arr) => {
	let x;
	let y;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === 'x') {
				[x, y] = [i, j];
				count++;
			}
		}
	}
	return count !== 1 ? [] : [x, y];
};

console.log(xMarksTheSpot([]), []);
console.log(
	xMarksTheSpot([
		['o', 'o'],
		['o', 'o'],
	]),
	[]
);
console.log(
	xMarksTheSpot([
		['x', 'o'],
		['o', 'x'],
	]),
	[]
);
console.log(
	xMarksTheSpot([
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
	]),
	[4, 6]
);
