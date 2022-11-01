// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:
// "Example Input" ==> "iNPUT eXAMPLE"

const transformString = (str) => {
	let output = [];
	let reverse = str.split(' ').reverse();
	for (let i = 0; i < reverse.length; i++) {
		let word = reverse[i].split('');
		for (let j = 0; j < word.length; j++) {
			if (word[j] === word[j].toLowerCase()) {
				word[j] = word[j].toUpperCase();
			} else if (word[j] === word[j].toUpperCase()) {
				word[j] = word[j].toLowerCase();
			}
		}
		word = word.join('');
		output.push(word);
	}
	return output.join(' ');
};

console.log(transformString('Example Input'), 'iNPUT eXAMPLE');
