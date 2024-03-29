// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4

function setReducer(arr) {
  while(arr.length-1) {
    arr = arr.reduce((a,v,i)=>{
      if(v!=arr[i-1]) a.push(1)
      else a[a.length-1]++
      return a
    }, [])
  }
  return arr.pop()
}