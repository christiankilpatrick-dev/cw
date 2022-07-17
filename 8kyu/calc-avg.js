/////Instructions////
////Write a function which calculates the average of the numbers in a given list


///////Solution////////
function find_average(array) {
    if (!array[0]){
      return 0
    }else{
    const sum = array.reduce((acc, cur) => acc + cur);
    const average = sum/array.length
    return average;
    }
}