// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

// Examples:

// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// // function replaces letters with opposites
// 'Example: 0 number or punctuation changes'

const decrypt = (str) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const rev = 'zyxwvutsrqponmlkjihgfedcba';
	let arr = [...str];
	for (let i = 0; i < arr.length; i++) {
		if (!(arr[i] === ' ') && alphabet.includes(arr[i].toLowerCase())) {
			let alphaIndex = alphabet.indexOf(arr[i].toLowerCase());
			if (arr[i].match(/[A-Z]/)) {
				arr[i] = rev.charAt(alphaIndex);
			}
			if (arr[i].match(/[a-z]/)) {
				arr[i] = rev.charAt(alphaIndex).toUpperCase();
			}
		}
	}
	return arr.join('');
};
console.log(decrypt('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'));
