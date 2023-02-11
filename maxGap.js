// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
// Notes
//Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives and negatives also zeros_
// Repetition of numbers in the array/list could occur.
// The Maximum Gap is computed Regardless the sign.

// maxGap ({13,10,5,2,9}) ==> return (4)
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
// maxGap ({-54,37,0,64,640,0,-15}) //return (576)

function maxGap(numbers) {
  let num = numbers.sort((a, b) => a - b);
  let sum = num[1] - num[0];
  for (i = 0; i < num.length; i++) {
    if (num[i + 1] - num[i] > sum) {
      sum = num[i + 1] - num[i];
    }
  }
  return sum;
}
