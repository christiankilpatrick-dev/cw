// Haskell has some useful functions for dealing with lists:

// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

const head = (arr) => {
	return arr[0];
};

const tail = (arr) => {
	return arr.slice(1);
};

const init = (arr) => {
	return arr.slice(0, arr.length - 1);
};

const last = (arr) => {
	return arr[arr.length - 1];
};

console.log(head([5, 1]), 5);
console.log(tail([1]), []);
console.log(init([1, 5, 7, 9]), [1, 5, 7]);
console.log(last([7, 2]), 2);
