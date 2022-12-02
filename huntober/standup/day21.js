// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

const revWord = (str) => {
	let letters = [];
	for (let i = str.length - 1; i >= 0; i--) {
		letters.push(str[i]);
	}
	return letters.join('');
};

console.log(revWord('alphabet'), 'tebahpla');
console.log(revWord('gymnastics'), 'scitsanmyg');
console.log(revWord('vehicle'), 'elcihev');
