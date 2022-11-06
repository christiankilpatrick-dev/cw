// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

const switcher = (x) => {
	let abc = ' ?!abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('');
	let output = [];
	x.forEach((cv) => output.push(abc.charAt(Number(cv) - 1)));
	return output.join('');
};

console.log(
	switcher(['24', '12', '23', '22', '4', '26', '9', '8']),
	'codewars'
);
console.log(
	switcher([
		'25',
		'7',
		'8',
		'4',
		'14',
		'23',
		'8',
		'25',
		'23',
		'29',
		'16',
		'16',
		'4',
	]),
	'btswmdsbd kkw'
);
console.log(switcher(['4', '24']), 'wc');
