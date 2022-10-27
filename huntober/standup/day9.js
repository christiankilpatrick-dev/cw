// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// string with upper and lower case letters, and special characters
// mutated string where chars that occur once -> '(' and chars that occur twice -> ')'
// split string to array, loop through array checking if indexOf(char) === lastIndexOf(char)
//
const fixString = (str) => {
	return str
		.split('')
		.map((x) =>
			str.indexOf(x.toLowerCase()) === str.lastIndexOf(x.toLowerCase())
				? '('
				: ')'
		)
		.join('');
};

console.log(fixString('din'), '(((');
console.log(fixString('recede'), '()()()');
console.log(fixString('Success'), ')())())');
console.log(fixString('(( @'), '))((');
