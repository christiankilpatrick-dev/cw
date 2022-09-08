// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = (num) => {
	let arr = num.toString().split('').reverse();
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		arr[i] == 0 ? result.push() : result.push(arr[i] + '0'.repeat(i));
	}
	return result.reverse().join(' + ');
};

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
