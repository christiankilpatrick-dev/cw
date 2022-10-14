// The task: Given a list of cards (could be empty), return the number of remaining players on each team at the end of the game (as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for insufficient number of players, you are to stop the game immediately, and ignore any further possible cards.

function menStillStanding(cards) {
	let A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		B = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		countA = 0,
		countB = 0;

	for (let i = 0; i < cards.length; i++) {
		cards[i] = cards[i].match(/A|B|\d+|Y|R/g);
		let team = cards[i][0],
			number = cards[i][1],
			color = cards[i][2];

		if (team === 'A') {
			if (color === 'Y') A[number]++;
			else A[number] += 2;
		}
		if (team === 'B') {
			if (color === 'Y') B[number]++;
			else B[number] += 2;
		}

		countA = A.filter((el) => el > 1).length;
		countB = B.filter((el) => el > 1).length;

		if (11 - countA === 6 || 11 - countB === 6) {
			return [11 - countA, 11 - countB];
		}
	}
	return [11 - countA, 11 - countB];
}
console.log(menStillStanding([]), [11, 11]);
console.log(menStillStanding(['A4Y', 'A4Y']), [10, 11]);
console.log(menStillStanding(['A4Y', 'A4R']), [10, 11]);
console.log(menStillStanding(['A4Y', 'A5R', 'B5R', 'A4Y', 'B6Y']), [9, 10]);
console.log(menStillStanding(['A4R', 'A4R', 'A4R']), [10, 11]);
console.log(menStillStanding(['A4R', 'A6R', 'A8R', 'A10R', 'A11R']), [6, 11]);
