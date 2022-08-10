// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples(input -> output)
// 6, "I" -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr(n, s){
    let arr = [];
    for (i=0; i<n; i++){
        arr.push(s)
    }
    return arr.join('')
}

console.log(repeatStr(6, 'I'), 'IIIIII');
console.log(repeatStr(5, 'Hello'), 'HelloHelloHelloHelloHello')