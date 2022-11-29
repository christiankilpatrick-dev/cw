// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

const dup = (array) => {
	let words = [];
	for (let i = 0; i < array.length; i++) {
		let word = array[i].split('');
		for (let j = 0; j < word.length; j++) {
			if (word[j + 1] === word[j]) {
				word[j] = '';
			}
		}
		words.push(word.join(''));
	}
	return words;
};

const dup1 = (s) => {
	return s.map((w) => {
		return w
			.split('')
			.filter((c, i, arr) => {
				return c !== arr[i - 1];
			})
			.join('');
	});
};
console.log(dup1(['abracadabra', 'allottee', 'assessee']), [
	'abracadabra',
	'alote',
	'asese',
]);
console.log(dup1(['kelless', 'keenness']), ['keles', 'kenes']);
console.log(
	dup1(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']),
	['codewars', 'picaniny', 'hubububo']
);
console.log(dup1(['abracadabra', 'allottee', 'assessee']), [
	'abracadabra',
	'alote',
	'asese',
]);
console.log(dup1(['kelless', 'keenness']), ['keles', 'kenes']);
