// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers){
    let low = numbers.indexOf(Math.min(...numbers))
    console.log(low);
    if (low > -1){
        numbers.splice(low, 1)
        return numbers
    } else {
        return numbers
    }
}


console.log(removeSmallest([1,2,3,4,5]), [2,3,4,5])
console.log(removeSmallest([7, 5, 9, 3, 1, 8, 1]), [7, 5, 9, 3, 8, 1])

// p - an array of nums of an empty arr
// r - the array with the first instance of the lowest number in the array removed. if array is empty return empty array
// e - [1,2,3,4,5] --> [2,3,4,5]
//   - [7, 5, 9, 3, 1, 8, 1] --> [7, 5, 9, 3, 8, 1]
// p- find lowest number.  -find first instance of lowest num. -if array is empty, return array. -else return array with first instance of lowest num removed.