// Harry's local chicken shop - The Golden Chick - sells chicken pieces in boxes of 3, 6 and 10.

// Write a function that takes the total number of chicken pieces Harry can eat (n) and returns an array of the possible numbers of chicken pieces he can buy, that are less than or equal to n.

// 0 chicken pieces is a valid chicken option.

// For example:

// chickenOptions(9)
// should return [0,3,6,9], as Harry can buy no boxes, a box of 3, a box of 6, or a box of 3 and a box of 6 (9 in total).

// For non-numeric input, the function should return [0].

// Don't forget to rate this kata!

function chickenOptions(n) {
  if (typeof n !== "number") return [0];
  let res = [0];
  const hash = [3, 6, 9, 10, 12, 13, 15, 16];
  let i = 1;
  while (i <= n) {
    if (i >= 18) res.push(i);
    else if (hash.includes(i)) res.push(i);
    i++;
  }
  return res;
}
