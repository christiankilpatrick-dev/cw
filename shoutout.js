// You are walking on the sidwalk, you notice your friend is also walking on the sidewalk. You need to give a shout to your friend in order to grab their attention.
// Write the function madShout that takes a string input sidewalk to calculate the shout string and return it.

// The shout phrase is "Oi F!" but depending on the distance between your friend, the word expands.

function madShout(sidewalk) {
  return (
    "Oi" +
    "i".repeat((sidewalk.indexOf("F") - sidewalk.indexOf("Y") - 1) / 2) +
    " F!"
  );
}
