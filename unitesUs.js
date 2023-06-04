function thatUnitesUs(array1, array2, n) {
  let set = new Set([...array1, ...array2].sort());
  return Array.from(set).slice(0, n);
}
