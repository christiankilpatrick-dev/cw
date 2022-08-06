// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints){
    return yourPoints > classPoints.reduce((tot, val) => tot+=val, 0)/classPoints.length;
}


console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false)
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false)
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)
console.log(betterThanAverage([2, 3], 5), true)