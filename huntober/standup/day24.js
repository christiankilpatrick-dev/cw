// Given a string of characters, return the character that appears the most often.
// No String or Array Methods (well brute force it first, but then no methods)!

const max = (str) => {
	let cache = {};
	for (let i = 0; i < str.length; i++) {
		if (!cache[str[i]]) {
			cache[str[i]] = 1;
		} else {
			cache[str[i]]++;
		}
	}

	let value = Math.max(...Object.values(cache));

	for (let letter in cache) {
		if (cache[letter] === value) {
			return letter;
		}
	}
};

console.log(max('Hello World!'), 'l');
console.log(max('this is a test'), 't');
