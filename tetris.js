// Calculate the final score of the game using original Nintendo scoring system
// Input
// Array with cleaned lines.
// Example: [4, 2, 2, 3, 3, 4, 2]
// Input will always be valid: array of random length (from 0 to 5000) with numbers from 0 to 4.
// Ouput
// Calculated final score.
// def get_score(arr) -> int: return 0

const score = [0, 40, 100, 300, 1200];

function getScore(arr) {
  let level = 1;
  let line = 0;
  let result = 0;
  arr.forEach((item) => {
    result += score[item] * level;
    line += item;
    if (line >= 10 * level) level++;
  });
  return result;
}
