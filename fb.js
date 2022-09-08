
// P - number
// R - console log from 1 to number, multiples of 3 log as 'fizz' multiples of 5 log as 'buzz' multiples of 3 and 5 log as 'fizzbuzz'
// E - fizzBuzz(3) --> 1, 2, fizz
// P - check if % = 0 for 3,5,(3&5)

function fizzBuzz () {
    for (let i = 1; i <= 100; i++){
        if (i%3 === 0 && i%5 === 0){
           console.log('fizzbuzz');
        }else if (i%3 === 0){
            console.log('fizz');
        }else if (i%5 === 0){
           console.log('buzz');
        }else {
            console.log(i);
        }
    }
}
