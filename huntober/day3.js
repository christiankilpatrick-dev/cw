// Create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

// example key characters -> 'A','_','K','E','Y','!'

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// // implement key replacement function
// ' you could think this is hard to read before replacing the key characters'

const filterStr = (str) => {
	let keys = ['A', '_', 'K', 'E', 'Y', '!'];
	let strArr = [...str];
	for (let i = 0; i < strArr.length; i++) {
		if (keys.includes(strArr[i])) {
			strArr[i] = ' ';
		}
	}
	return strArr.join('');
};

console.log(
	filterStr(
		'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
	),
	' you could think this is hard to read before replacing the key characters'
);
