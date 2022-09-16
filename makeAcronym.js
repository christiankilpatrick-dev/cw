// DESCRIPTION:
// Write function which takes a string and make an acronym of it.

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

function toAcronym(inp) {
	let word = inp.split(' ');
	let abbrev = [];
	for (let i = 0; i < word.length; i++) {
		abbrev.push(word[i][0].toUpperCase());
	}
	return abbrev.join('');
}
