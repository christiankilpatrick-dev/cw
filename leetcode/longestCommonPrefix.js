// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = (strs) => {
	let prefix = '';
	if (strs === null || strs.length === 0) return prefix;
	for (let i = 0; i < strs[0].length; i++) {
		let char = strs[0][i];

		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== char) return prefix;
		}

		prefix += char;
	}
	return prefix;
};
