// Write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.
// Go ahead and mutate the given array. We're livin' on the wild side!

myGrid = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
];
// P - 1 target string, array or arrays containing the target string once
// R - a new array where the target string is moved up(down) one level with the same index, replacing previous spot w str it replaced
// E -
// P - grab position of target str, grab other str in its up/down position. replace position of target with other str, replace other str w target

const moveUp = (item, grid) => {
	for (let i = 0; i < grid.length; i++) {
		for (let k = 0; k < grid.length; k++) {
			if (grid[i][k] === item) {
				if (i === 0) {
					return grid;
				} else {
					let replacement = grid[i - 1][k];
					grid[i][k] = replacement;
					grid[i - 1][k] = item;
					return grid;
				}
			}
		}
	}
};

const moveDown = (item, grid) => {
	for (let i = 0; i < grid.length; i++) {
		for (let k = 0; k < grid.length; k++) {
			if (grid[i][k] === item) {
				if (i === grid.length - 1) {
					return grid;
				} else {
					let replacement = grid[i + 1][k];
					grid[i][k] = replacement;
					grid[i + 1][k] = item;
					return grid;
				}
			}
		}
	}
};

// call move up function with 'h' and myGrid
console.log(moveUp('h', myGrid), [
	['a', 'b', 'c'],
	['d', 'h', 'f'],
	['g', 'e', 'i'],
]);

// call move up function again, same arguments
console.log(moveUp('h', myGrid), [
	['a', 'h', 'c'],
	['d', 'b', 'f'],
	['g', 'e', 'i'],
]);

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
console.log(moveUp('h', myGrid), [
	['a', 'h', 'c'],
	['d', 'b', 'f'],
	['g', 'e', 'i'],
]);

// call move down function this time, with 'f' and myGrid as arguments
console.log(moveDown('f', myGrid), [
	['a', 'h', 'c'],
	['d', 'b', 'i'],
	['g', 'e', 'f'],
]);

// // call move down function again, same arguments
// // Note that 'f' is already as far down as it can go
console.log(moveDown('f', myGrid), [
	['a', 'h', 'c'],
	['d', 'b', 'i'],
	['g', 'e', 'f'],
]);
