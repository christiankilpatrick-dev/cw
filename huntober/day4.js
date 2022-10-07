// So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:

// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

const reverseStr = (str) => str.split('').reverse().join('');

console.log(
	reverseStr(
		"   The white space at the beginning of this string doesn't match the whitespace at the end. "
	),
	" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
);
