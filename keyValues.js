// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

function keysAndValues(data) {
	var arr = [];
	arr.push(Object.keys(data));
	arr.push(
		Object.keys(data).map(function (x) {
			return data[x];
		})
	);
	return arr;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }), [
	['a', 'b', 'c'],
	[1, 2, 3],
]);
