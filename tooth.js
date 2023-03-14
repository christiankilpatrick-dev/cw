// Baby is getting his frst tooth. This means more sleepless nights, but with the fun of feeling round his gums and trying to guess which will be first out!

// Probably best have a sweepstake with your friends - because you have the best chance of knowing. You can feel the gums and see where the raised bits are - most raised, most likely tooth to come through first!

// Given an array of numbers (t) to represent baby's gums, you need to return the index of the lump that is most pronounced.

// The most pronounced lump is the one that has the biggest differential to its surrounding values. e.g.:

// [1, 2, 4] = 2

// index 0 has a differential of -1 to its right (it is lower so the figure is negative)

// index 1 has a differential of +1 to its left, and -2 to its right. Total is -1.

// index 2 has a differential of +2 to its left, and nothing to its right,
// If there is no distinct highest value (more than one occurence of the largest differential), return -1.

function firstTooth(t) {
  if (t.length < 2) return 0;
  let lst = [];
  for (let i = 0; i < t.length; i++) {
    let tot =
      i == 0
        ? t[i] - t[i + 1]
        : i == t.length - 1
        ? t[i] - t[i - 1]
        : 2 * t[i] - t[i - 1] - t[i + 1];
    lst.push(tot);
  }
  let maximum = Math.max(...lst);
  return lst.indexOf(maximum) == lst.lastIndexOf(maximum)
    ? lst.indexOf(maximum)
    : -1;
}
