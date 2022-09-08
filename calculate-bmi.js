function bmi(weight, height) {
	let index = weight / height ** 2;
	if (index <= 18.5) {
		return 'Youre Underweight';
	} else if (index <= 25.0) {
		return 'Youre Normal';
	} else if (index <= 30.0) {
		return "You're Overweight";
	} else {
		return "You're Obese";
	}
}
