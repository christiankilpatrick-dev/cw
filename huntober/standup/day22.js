// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const letters = (str) => {
	let output = {};
	for (let i = 0; i < str.length; i++) {
		if (output[str[i]]) {
			output[str[i]] += 1;
		} else {
			output[str[i]] = 1;
		}
	}
	return output;
};

console.log(letters(''), {});
console.log(letters('aba'), { a: 2, b: 1 });
console.log(letters('letters'), { l: 1, e: 2, t: 2, r: 1, s: 1 });
