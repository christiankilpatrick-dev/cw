// You are given a sorted integer array arr. It contains several uniq integers(negative, positive, or zero).

// Your task is to find the largest d such that a + b + c = d, where a, b, c, and d are distinct elements of arr. If no such an element d found, return null.

// Still not understand the task? Look at the following example ;-)

// Example
// For arr = [2,3,5,7,12], the output should be 12.

// 12 = 2 + 3 + 7
// For arr = [2,16,64,256,1024], the output should be null.

// No such an element d found.

// For arr = [-100,-1,0,7,101], the output should be 0.

function findD(arr) {
  const n = arr.length;
  const res = [];
  for (let a = 0; a < n - 2; a++)
    for (let b = a + 1; b < n - 1; b++)
      for (let c = b + 1; c < n; c++) {
        const d = arr[a] + arr[b] + arr[c];
        const ind = arr.indexOf(d);
        if (ind != -1 && ind != a && ind != b && ind != c) res.push(d);
      }
  const max = Math.max(...res);
  return Number.isFinite(max) ? max : null;
}
