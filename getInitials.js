// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
	return name
		.split(' ')
		.map((i) => i[0].toUpperCase())
		.join('.');
}

console.log(abbrevName('Sam Harris'), 'S.H');
console.log(abbrevName('Patrick Feenan'), 'P.F');
console.log(abbrevName('Evan Cole'), 'E.C');
console.log(abbrevName('P Favuzzi'), 'P.F');
console.log(abbrevName('David Mendieta'), 'D.M');
