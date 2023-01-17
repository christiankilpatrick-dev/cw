// This kata will return a string that represents the difference of two perfect squares as the sum of consecutive odd numbers.

// Specifications:

// • The first input minus the second input reveals the exact number of consecutive odd numbers required for the solution - you can check this in the examples below.

// • The first input will always be larger than the second.

// • All inputs will be valid so no need for error checking.

// • Outputs will always be positive.

// • Inputs will range between 0 and 200, (inclusive).

// • In the returned string there are spaces before and after the plus sign, the minus sign and the equals sign but nowhere else.

function squaresToOdd(sqr1, sqr2){
    //Code
     let c = sqr1 - sqr2;
     let diff = sqr1*sqr1 - sqr2*sqr2;
     let avg = diff / c;
     
     let o = avg - (c-1);
     
     let res = `${sqr1}^2 - ${sqr2}^2 = ${o}`;
     for(let i=1;i<c;i++){
       o+=2;
       res+=` + ${o}`;
     }
     res+=` = ${diff}`;
     return res;
  }