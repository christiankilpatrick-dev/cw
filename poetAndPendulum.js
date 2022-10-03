// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

// !alt
// Notes
// Array/list size is at least 3 .

// In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)

// Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).

// P - array of integers
// R - pedulum sorted array of integers
// E - pendulum ([11, -16, -18, 13, -11, -12, 3, 18]) ==> [13, 3, -12, -18, -16, -11, 11, 18]
// P - sort array low-high, add first value to new array, push next, unshift next, push next

function pendulum(values) {
	let pendulumArr = [];
	let sortedArr = values.sort((a, b) => a - b);
	console.log(sortedArr);
	for (let i = 0; i < sortedArr.length; i++) {
		if (i === 0 || i === 1) {
			pendulumArr.push(sortedArr[i]);
		} else if (i % 2 === 0) {
			pendulumArr.unshift(sortedArr[i]);
		} else {
			pendulumArr.push(sortedArr[i]);
		}
	}
	return pendulumArr;
}

console.log(pendulum([-2, -11, -6, -11, -4, -3, -5]));
