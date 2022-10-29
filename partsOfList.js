// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

// arr of words
// all possible arrs that can be made from those words being split into two groups each of at least one word
// [hey, how , are, you] --> [[hey, how are you], [hey how, are you], [hey how are, you]]
// create empty output array
// loop through words, push word, then push
function partlist(arr) {
	let output = [];
	for (let i = 1; i < arr.length; i++) {
		let section = [];
		section.push(arr.slice(0, i).join(' '));
		section.push(arr.slice(i).join(' '));
		output.push(section);
	}
	return output;
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']), [
	['I', "wish I hadn't come"],
	['I wish', "I hadn't come"],
	['I wish I', "hadn't come"],
	["I wish I hadn't", 'come'],
]);
console.log(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']), [
	['cdIw', 'tzIy xDu rThG'],
	['cdIw tzIy', 'xDu rThG'],
	['cdIw tzIy xDu', 'rThG'],
]);
console.log(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']), [
	['vJQ', 'anj mQDq sOZ'],
	['vJQ anj', 'mQDq sOZ'],
	['vJQ anj mQDq', 'sOZ'],
]);
