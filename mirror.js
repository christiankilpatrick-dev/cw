// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...

function mirror(data) {
  const sort = data.slice().sort((a, b) => a - b);
  return [...sort, ...sort.reverse().slice(1)];
}
