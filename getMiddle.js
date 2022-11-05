// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = (str) => {
	let odd, even;
	str.length % 2 ? (odd = str) : (even = str);
	if (odd) {
		return odd[Math.ceil(odd.length / 2) - 1];
	}
	if (even) {
		return even
			.split('')
			.slice(even.length / 2 - 1, even.length / 2 + 1)
			.join('');
	}
};

console.log(getMiddle('test'), 'es');
console.log(getMiddle('testing'), 't');
console.log(getMiddle('middle'), 'dd');
console.log(getMiddle('A'), 'A');
