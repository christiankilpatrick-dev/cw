// Gordon Ramsay shouts and swears. There may be something wrong with him.
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
// Rules:
// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
	const vowels = 'EIOU'.split('');
	let words = a.split(' ');
	let output = [];
	for (let i = 0; i < words.length; i++) {
		let word = words[i].toUpperCase().split('');
		for (let j = 0; j < word.length; j++) {
			if (word[j] === 'A') {
				word[j] = '@';
			} else if (vowels.includes(word[j])) {
				word[j] = '*';
			}
		}
		output.push(word.join('') + '!!!!');
	}
	return output.join(' ');
}
