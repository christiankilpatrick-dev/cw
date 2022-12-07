// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

const numJewelsInStones = (jewels, stones) => {
	let count = 0;
	stones
		.split('')
		.forEach((x) => (jewels.includes(x) ? count++ : (count += 0)));
	return count;
};

const findJewels = (jewels, stones) => {
	let stuff = {};
	for (let i = 0; i < jewels.length; i++) {
		stuff[jewels[i]] = true;
	}
	let count = 0;
	for (let i = 0; i < stones.length; i++) {
		stuff[stones[i]] ? count++ : (count += 0);
	}

	return count;
};

console.log(findJewels('aA', 'aAAbbbb'), 3);
console.log(findJewels('z', 'ZZ'), 0);
