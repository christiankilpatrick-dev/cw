// In Spanish, the conjugated verb changes by adding suffixes and according to the person we're talking about. There's something similar in English when we talk about "She", "He"or "It" (3rd person singular):

// With the verb "run":

// He / She / It runS

// As you can see, the rule (at least with regular verbs) is to add the suffix "-s" in the 3rd person singular. In Spanish it works the same way but we need to remove the infinitive suffix and add a specific suffix to all the others persons (I, You, He/She/It, We, You, They).

function conjugate(verb) {
  const dic = {
    ar: ["o", "as", "a", "amos", "áis", "an"],
    er: ["o", "es", "e", "emos", "éis", "en"],
    ir: ["o", "es", "e", "imos", "ís", "en"],
  };

  return { [verb]: dic[verb.slice(-2)].map((e) => verb.slice(0, -2) + e) };
}
