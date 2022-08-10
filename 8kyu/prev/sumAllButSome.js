// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array){
    if (array === null || !array.length){
        return 0
    }else{
        let max = Math.max(array)
        console.log(max);
        let min = Math.min(array)
        
        for (i = 0; i < array.length; i++){
            let total = 0
            if (array[i] === max  || array[i] === min){
                continue;
            }else{
                total += array[i]
            }
            return total;
        }
    }

}

// console.log(sumArray(null)                     , 0 );
// console.log(sumArray([ ])                      , 0 );
console.log(sumArray([ 3 ]), 0 );
console.log(sumArray([ 3, 5 ])                 , 0 );
// console.log(sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
// console.log(sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
// console.log(sumArray([ -6, -20, -1, -10, -12 ]), -28 );
// console.log(sumArray([ -6, 20, -1, 10, -12 ])  , 3 )