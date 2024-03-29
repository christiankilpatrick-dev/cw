// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

const fizzBuzz = (x) => {
	for (let i = 1; i <= x; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('Fizz Buzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
};

fizzBuzz(33);
