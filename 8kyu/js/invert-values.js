// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.



function invert(array) {
    let newArray = []
    for (i=0;i<array.length;i++){
        newArray.push(Number(array[i]) * -1)
    }
    console.log(newArray) 
}


invert([1,2,-3,4,-5])