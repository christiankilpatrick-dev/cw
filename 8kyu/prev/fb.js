
// P - number
// R - console log from 1 to number, multiples of 3 log as 'fizz' multiples of 5 log as 'buzz' multiples of 3 and 5 log as 'fizzbuzz'
// E - fizzBuzz(3) --> 1, 2, fizz
// P - check if % = 0 for 3,5,(3&5)

const fizzBuzz = num => {
    const numArr = Array.from(Array(num).keys())
    console.log(numArr);
    numArr.forEach(el => {
        if (el%3 === 0 && el%5 === 0){
            console.log('fizzbuzz');
        }else if (el%3 === 0){
            console.log('fizz');
        }else if (el%5 === 0){
            console.log('buzz');
        }else{
            console.log(el);
        }
    });
}

// fizzBuzz(28)

function fB(num){
    for (i=1;i<=num;i++){
        if (i%3 === 0 && i%5 === 0){
            console.log('fizzbuzz');
        }else if (i%3 === 0){
            console.log('fizz');
        }else if (i%5 === 0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
}

fB(45)