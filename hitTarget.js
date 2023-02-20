// given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
// There will be only 1 arrow '>' and 1 target 'x'
// An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"

const solution = (mtrx) => {
  const arr =
    mtrx.filter((el) => el.includes(">") && el.includes("x"))[0] || [];
  return arr.indexOf(">") < arr.indexOf("x");
};
