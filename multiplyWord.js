// You are to write a function that takes a string as its first parameter. This string will be a string of words.
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example
// modifyMultiply ("This is a string",3,5)
// Should return
// "string-string-string-string-string"
// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

//P -> string of words, integer pointing to word index the str, integer for number of times to repeat word
//R -> A string, containing the word and loc (index) in str, repeated num times, with hyphen between each
//E -> midifyMultiply('hello world my name is christian', 3, 4) --> 'name-name-name-name'
//P -> split str on spaces
//  -> find word at index num
//  -> declare empty arr
//  -> for loop for num amount of times
//  -> if i=0, push word to arr
//  -> else push '-' + word to arr
//  -> return joined arr

function modifyMultiply(str, loc, num) {
	let word = str.split(' ')[loc];
	let arr = [];
	for (let i = 0; i < num; i++) {
		if (i === 0) {
			arr.push(word);
		} else {
			arr.push('-' + word);
		}
	}
	return arr.join('');
}

function modifyMultiplyButBetter(str, loc, num) {
	return (str.split(' ')[loc] + '-').repeat(num).slice(0, -1);
}
