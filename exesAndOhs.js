// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let exes = 0;
  let ohs = 0;
  for (let x = 0; x < str.length; x++) {
    if (str[x].toLowerCase() === 'x') {
      exes += 1;
    }
  }
  for (let o = 0; o < str.length; o++) {
    if (str[o].toLowerCase() === 'o') {
      ohs += 1;
    }
  }
  if (Number(exes) === Number(ohs)) {
    return true;
  } else {
    return false;
  }
}

console.log(XO('xo'), true);
console.log(XO('xxOo'), true);
console.log(XO('xxxm'), false);
console.log(XO('Oo'), false);
console.log(XO('ooom'), false);
