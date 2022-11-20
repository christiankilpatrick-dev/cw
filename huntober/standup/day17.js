// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.

const removeDupes = (str) => {
	return str
		.split(' ')
		.filter((w, i, a) => w !== a[i - 1])
		.join(' ');
};

console.log(
	removeDupes(
		'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
	),
	'alpha beta gamma delta alpha beta gamma delta'
);
