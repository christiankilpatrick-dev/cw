/**
 * These example boards represent the row and column of live cells, where an empty array
 * represents an empty row. Feel free to keep this data structure or change it to something
 * that works better for you.
 */
// Implement the Game of Life here to transform the inputBoard into the outputBoard!

// RULES
// lives --> alive w/ 2-3 live neighbors
//       --> dead w/ exactly 3 live neighbors    (reproduction)
// dies  --> alive w/ less than 2 live neighbors (underpopulation)
//       --> alive w/ more than 3 live neighbors (overpopulation)

//Parameters -->  1 object, with a list of properties that hold arrays of integers
//Returns    -->  1 object, with a list of properties that hold an array of integers
//           -->  integers in the arrays represent live cells, dead cells are not represented (not pushed to array)
//Examples   --> getNextGeneration(BLOCK_BOARD) ---> {0: [], 1: [1, 2], 2: [1, 2], 3: [], }
//           --> getNextGeneration(BLINKER_BOARD) ---> {0: [], 1: [2], 2: [2], 3: [2], 4: [],}

const BLOCK_BOARD = {
	0: [],
	1: [1, 2],
	2: [1, 2],
	3: [],
};

const BLINKER_BOARD = {
	0: [],
	1: [2],
	2: [2],
	3: [2],
	4: [],
};

function getNextGeneration(inputBoard) {
	console.log(inputBoard);
	let input = Object.entries(inputBoard);
	let grid = [];
	for (let i = 0; i < input.length; i++) {
		// makes an arr of 0's if row is empty, pushes to grid arr
		if (!input[i][1][0]) {
			let emptyRowArr = [];
			for (let j = 0; j < input.length; j++) {
				emptyRowArr.push(0);
			}
			grid.push(emptyRowArr);
		} else {
			//using values of each inputboard row as the indices for each live cell (1), every other index gets (0),
			let rowArr = [];
			for (let k = 0; k < input.length; k++) {
				if (!input[i][1].includes(k)) {
					rowArr.push(0);
				} else {
					rowArr.push(1);
				}
			}
			grid.push(rowArr);
		}
	}

	// create new, empty grid to map to, and ultimately return
	let newGrid = new Array(input.length);
	for (let i = 0; i < newGrid.length; i++) {
		newGrid[i] = new Array(input.length);
	}

	//compute each cell's next gen value based on live neighbors
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			//evaluate the state of current cell
			let state = grid[i][j];

			//count live neighbors
			let liveNeighbors = count(grid, i, j);

			//if dead with 3 neighbors --> 1
			//if alive with less than 2 or more than 3 neighbors --> 0
			//all other cases --> maintain state value
			if (state === 0 && liveNeighbors === 3) {
				newGrid[i][j] = 1;
			} else if (state === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
				newGrid[i][j] = 0;
			} else {
				newGrid[i][j] = state;
			}
		}
	}

	//count live neighbors
	function count(grid, x, y) {
		let sum = 0;
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				//accounts for edge cases by using the value of the cell on the opposite side of the arr (wrap-around)
				let col = (x + i + input.length) % input.length;
				let row = (y + j + input.length) % input.length;
				sum += grid[col][row];
			}
		}
		//removing the value of the cell being evaluated and returning total
		sum -= grid[x][y];
		return sum;
	}

	//Convert newGrid to original object format
	let outputBoard = inputBoard;
	for (let i = 0; i < Object.keys(outputBoard).length; i++) {
		let aliveArr = [];
		for (let j = 0; j < newGrid[i].length; j++) {
			if (newGrid[i][j] > 0) {
				aliveArr.push(j);
			}
		}
		outputBoard[i] = aliveArr;
	}

	return outputBoard;
}

console.log(getNextGeneration(BLINKER_BOARD));
console.log(getNextGeneration(BLOCK_BOARD));
