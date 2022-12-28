// A stealthy burglar is causing a big headache for people in a town. He is known to be swift in getting in the house unnoticed and steal all the diamonds from the locker. He holds a bag in one hand and picks the diamonds from other hand, while stealing.

// Kata
// Your objective - if choose to accept - is to calculate and return an integer representing the minimum number of repetitions required for the burglar to pick all the diamonds from the locker.

// Input
// locker - An array of strings representing a single locker. The length of the array will be between 1 - 10 (inclusive): 1 <= locker <= 10.

// ['*.*.*.*.*.',
//  '...*..**..',
//  '**.**...*.',
//  '**..**..**']

// Every item indicates a row and has a length of exact 10

// Notations:
// . = An empty space
// * = A Diamond!

function diamondBurglar(locker) {
	let res = 0;
	let arr = [];
	locker
		.join('.')
		.split('.')
		.map((elem) => (elem !== '' ? arr.push(elem) : 0));
	arr.forEach((elem) =>
		elem.length > 1 ? (res += Math.ceil(elem.length / 2)) : (res += 1)
	);
	return res;
}
