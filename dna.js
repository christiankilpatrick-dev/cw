function sumArray(array) {
  if (array === null || !array.length) {
    return 0;
  } else {
    let max = Math.max(array);
    console.log(max);
    let min = Math.min(array);

    for (i = 0; i < array.length; i++) {
      let total = 0;
      if (array[i] === max || array[i] === min) {
        continue;
      } else {
        total += array[i];
      }
      return total;
    }
  }
}
