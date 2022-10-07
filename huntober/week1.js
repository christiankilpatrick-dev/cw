const encryptedMsg =
	'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs';

// Day 2 and Day 5 were side-projects, and their real purpose was to provide you with inputs for this final decoding. Day 2's key characters and Day 5's final count will be used as arguments for Day 3 and Day 6's functions, respectively.
// Day 2 keys --> Space
// Day 5 values --> 3           (['Teenage Mewtant Ninja Turtles','Rick & Meowty',"Mewster Rogers' Neighborhood"])

// Day 1
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
			case fixedStr[i] === '4':
				fixedStr[i] = 'h';
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
			case fixedStr[i] === '8':
				fixedStr[i] = 'B';
				break;
			case fixedStr[i] === '9':
				fixedStr[i] = 'q';
				break;
		}
	}
	return fixedStr.join('');
}

// Day 2 keys --> Space

// Day 3

const filterStr1 = (str) => {
	let keys = ['S', 'p', 'a', 'c', 'e'];
	let strArr = [...str];
	for (let i = 0; i < strArr.length; i++) {
		if (keys.includes(strArr[i])) {
			strArr[i] = ' ';
		}
	}
	return strArr.join('');
};

// Day4
const reverseStr = (str) => str.split('').reverse().join('');

// Day 5 values --> 3           (['Teenage Mewtant Ninja Turtles','Rick & Meowty',"Mewster Rogers' Neighborhood"])

// Day 6
const filterStr2 = (str, x) => {
	let arr = [...str];
	return arr.filter((item, i) => (i + 1) % x !== 0).join('');
};

// Day 7
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

let day1 = fixString(encryptedMsg);
let day3 = filterStr1(day1);
let day4 = reverseStr(day3);
let day6 = filterStr2(day4, 3);
console.log(decrypt(day6));
