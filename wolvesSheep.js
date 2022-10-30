// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]     (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

function warnTheSheep(queue) {
	if (queue[queue.length - 1] === 'wolf') {
		return 'Pls go away and stop eating my sheep';
	} else {
		return `Oi! Sheep number ${
			queue.length - (queue.indexOf('wolf') + 1)
		} You are about to be eaten by a wolf`;
	}
}

console.log(
	warnTheSheep([
		'sheep',
		'sheep',
		'sheep',
		'sheep',
		'sheep',
		'wolf',
		'sheep',
		'sheep',
	]),
	'Oi! Sheep number 2! You are about to be eaten by a wolf!'
);
console.log(
	warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
	'Oi! Sheep number 5! You are about to be eaten by a wolf!'
);
console.log(
	warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
	'Oi! Sheep number 6! You are about to be eaten by a wolf!'
);
console.log(
	warnTheSheep(['sheep', 'wolf', 'sheep']),
	'Oi! Sheep number 1! You are about to be eaten by a wolf!'
);
console.log(warnTheSheep(['wolf']), 'Pls go away and stop eating my sheep');
