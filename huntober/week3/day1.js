// Today's challenge is to simplify the example function below based on what we've discussed today. I also challenge you to look at some recent functions you've written and apply these same principles to those!

function myExampleFunction(arr) {
	if (arr != null) {
		if (arr.length !== 0) {
			if (arr[0].length !== 0) {
				if (arr.length > 10) {
					arr.push('maximum');
				} else if (arr.length === 10) {
					arr.push('maximum');
				} else {
					if (arr[0] === 'must be maximum') {
						arr.push('failure');
					} else if (arr[0] === 'flexible') {
						arr.push('success');
					}
				}
			}
		}
	}
	return arr;
}

const myFunction = (arr) => {
	if (arr === null || arr.lenght === 0 || arr[0].length === 0) return arr;
	if (arr.length >= 10) arr.push('maximum');
	if (arr[0] === 'must be maximum') arr.push('failure');
	if (arr[0] === 'flexible') arr.push('success');
	return arr;
};
