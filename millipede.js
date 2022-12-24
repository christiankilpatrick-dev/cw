// The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.

// Input
// Array of 3 to 7 words of random length. No capital letters.

// Example true
// Set: excavate, endure, desire, screen, theater, excess, night.
// Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

// Example false
// Set: trade, pole, view, grave, ladder, mushroom, president.
// Millipede: presidenT Trade.

const solution = (words, last = '') => {
	if (words.length === 0) return true;

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		if (
			word.startsWith(last) &&
			solution([...words.slice(0, i), ...words.slice(i + 1)], word.slice(-1))
		) {
			return true;
		}
	}

	return false;
};

console.log(
	solution([
		'excavate',
		'endure',
		'desire',
		'screen',
		'theater',
		'excess',
		'night',
	]),
	true
);
console.log(
	solution([
		'trade',
		'pole',
		'view',
		'grave',
		'ladder',
		'mushroom',
		'president',
	]),
	false
);

console.log(solution(['screen', 'desire', 'theater', 'excess', 'night']), true);
console.log(solution(['engine', 'endure', 'elite', 'excess']), true);
console.log(solution(['east', 'e', 'e', 't', 't', 'e', 'time']), true);
console.log(solution(['no', 'dog', 'on', 'good']), false);
