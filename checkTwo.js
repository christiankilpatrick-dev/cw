// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

function checkThreeAndTwo(array) {
  let a = array.filter((x) => x === "a").length;
  let b = array.filter((x) => x === "b").length;
  let c = array.filter((x) => x === "c").length;
  let stats = [a, b, c];
  if (stats.includes(2) && stats.includes(3)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true); // 3x "a" and 2x "b"
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]), false); // 1x "a", 2x "b" and 2x "c"
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false); // 5x "a"
