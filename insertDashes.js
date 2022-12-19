// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

const insertDash = (num) => {
	return num
		.toString()
		.split('')
		.reduce((acc, c, i, arr) => {
			if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
				acc = acc + '-';

			return acc + c;
		}, '');
};

console.log(insertDash(454793), '4547-9-3');
console.log(insertDash(123456), '123456');
console.log(insertDash(1003567), '1003-567');
