///Remove every other element from an array

function removeEveryOther(arr){
  let newArr = []
  for (let i =0; i<arr.length; i++){
    newArr.push(arr[i])
    i++
  }
  return newArr
}


