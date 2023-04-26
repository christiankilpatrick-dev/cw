// It's casino time and you're playing on a slot machine with 15 fields, placed in 3 rows of 5, containing the following symbols: "9","10","J","Q","K","A".

// Example:

// ["Q","K","A","A","A"],
// ["10","A","Q","9","J"]
// ["A","A","A","J","K"]
// There are 5 winning lines:

// - empty fields can contain any symbol
// - "X" can be any field, but must not change value

// Line 1

// ["X","X","X","X","X"]
// ["","","","",""]
// ["","","","",""]

// Line 2

// ["","","","",""]
// ["X","X","X","X","X"]
// ["","","","",""]

// Line 3

// ["","","","",""]
// ["","","","",""]
// ["X","X","X","X","X"]

// Line 4

// ["X","","","","X"]
// ["","X","","X",""]
// ["","","X","",""]

// Line 5

// ["","","X","",""]
// ["","X","","X",""]
// ["X","","","","X"]

function calculateWin(lines) {
  lines = lines.map((line) => line.map((x) => (x != "10" ? x : "T")));
  const winningLineRs = [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [0, 1, 2, 1, 0],
      [2, 1, 0, 1, 2],
    ],
    pointsByLength = [0, 0, 0, 50, 150, 300];
  return winningLineRs
    .map(
      (rs) =>
        pointsByLength[
          rs
            .map((r, c) => lines[r][c])
            .join("")
            .match(/^(.)\1*/)[0].length
        ]
    )
    .reduce((a, b) => a + b);
}
