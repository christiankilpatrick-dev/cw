// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

const numJewelsInStones = (jewels, stones) => {
	let count = 0;
	stones
		.split('')
		.forEach((x, i) => (jewels.includes(x) ? count++ : (count += 0)));
	return count;
};
console.log(numJewelsInStones('aA', 'aAAbbbb'), 3);
console.log(numJewelsInStones('z', 'ZZ'), 0);
