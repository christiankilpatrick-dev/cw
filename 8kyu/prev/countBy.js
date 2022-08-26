//

function countBy(x, n) {
	let z = [];
	let acc = x;
	for (let i = 0; i < n; i++) {
		z.push(acc);
		acc += x;
	}
	return z;
}

const countByButBetter = (x, n) =>
	Array.from({ length: n }, (v, k) => (k + 1) * x);

console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(countBy(2, 5), [2, 4, 6, 8, 10]);
