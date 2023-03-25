// As a parent, nappy changing is a never ending part of your daily routine. How the mighty have fallen!

// A friend: "Fancy popping to the pub like the old days?" You: "Nah, I'll stay in and wipe poo off a baby thanks, I've moved on."

// It's important to establish that a small is indeed coming from the baby before you begin the process of changing, because time is now percious and you don't want any false alarms.

// The trouble is that your partner is also smelly...

// You will be given a 2-dimensional array (p) that looks similar to below. Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.

function pooRoulette(p) {
  let arr = p.reduce((acc, val) => acc.concat(val), []);
  let b = arr.indexOf("B");
  if (
    (arr[b + 1] == "~" && arr[b + 2] == "~" && arr[b + 3] == "~") ||
    (arr[b - 1] == "~" && arr[b - 2] == "~" && arr[b - 3] == "~")
  ) {
    return "You disgust me!";
  } else if (arr[b - 7] == "~" && arr[b - 14] == "~" && arr[b - 21] == "~") {
    return "Get the wipes!";
  }
  return "Calm before the storm";
}
