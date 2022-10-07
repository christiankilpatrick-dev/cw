// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.
// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.
// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:

// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
// // implement fix function ->
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

function fixString(str) {
	let fixedStr = str.split('');
	for (let i = 0; i < fixedStr.length; i++) {
		switch (true) {
			case fixedStr[i] === '0':
				fixedStr[i] = 'O';
				break;
			case fixedStr[i] === '1':
				fixedStr[i] = 'I';
				break;
			case fixedStr[i] === '2':
				fixedStr[i] = 'Z';
				break;
			case fixedStr[i] === '3':
				fixedStr[i] = 'E';
				break;
			case fixedStr[i] === 'h':
				fixedStr[i] = '4';
				break;
			case fixedStr[i] === '5':
				fixedStr[i] = 'S';
				break;
			case fixedStr[i] === '6':
				fixedStr[i] = 'G';
				break;
			case fixedStr[i] === '7':
				fixedStr[i] = 'L';
				break;
			case fixedStr[i] === 'B':
				fixedStr[i] = '8';
				break;
			case fixedStr[i] === 'q':
				fixedStr[i] = '9';
				break;
		}
	}
	return fixedStr.join('');
}

console.log(
	fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."),
	"PRO-TIP #498: IT'S NICE TO SAY HELLO."
);
