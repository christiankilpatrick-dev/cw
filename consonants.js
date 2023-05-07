// Retirement home viewing is on a knife edge - it really has been a bad day on Countdown…!! (https://en.wikipedia.org/wiki/Countdown_(game_show))

// Nick Hewer has lost his glasses and someone is playing tricks on Rachel Riley.

// Rachel finds her vowels (A, E, I, O and U), consonants and numbers have all been muddled up into different piles (2D arrays of both strings and numbers) and some joker has thrown in some lower case letters to make matters worse.

// As the show assistant, your challenge is to help Rachel sort her vowels into one pile (array), and her consonants into another pile (array).

// In doing so you will need to change any lower-case letters to upper-case (as they only use upper case letters on the show…) and you will need to remove any numbers as Rachel has enough already. You do not need to return the numbers in a separate array - just remove them.

// You should end up with two neat piles like below:

// EG: if there were the following cards in the pile (2D array): [["a","B","H"], [0,"d","s"], [1,"W","J"]]

// you would need to return: [["A"], ["B","H","D","S","W","J"]]

// Consisting of: Vowels: ["A"] Consonants: ["B","H","D","S","W","J"]

const sortLetters = (letters) => {
  const vowels = [],
    consonants = [];
  letters.map((x) => {
    x.map((y) => {
      if (typeof y === "string") {
        if (["A", "E", "I", "O", "U"].indexOf(y.toUpperCase()) >= 0) {
          vowels.push(y.toUpperCase());
        } else {
          consonants.push(y.toUpperCase());
        }
      }
    });
  });
  return [vowels, consonants];
};
