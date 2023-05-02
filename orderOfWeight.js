// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.

function arrange(arr) {
  return arr
    .map((weight) => {
      if (weight.includes("T")) {
        return {
          weight,
          val: Number(weight.replace("T", "")) * 1000 * 1000,
        };
      } else if (weight.includes("KG")) {
        return {
          weight,
          val: Number(weight.replace("KG", "")) * 1000,
        };
      } else {
        return {
          weight,
          val: Number(weight.replace("G", "")),
        };
      }
    })
    .sort((a, b) => a.val - b.val)
    .map((e) => e.weight);
}
