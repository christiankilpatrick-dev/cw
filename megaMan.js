// In the classic Mega Man games, you'd start the game with one weapon (called 'Buster'), and you'd have to defeat 8 robot bosses. Each time you defeated a robot boss, you'd acquire that boss's weapon to use in future fights against the other robot bosses.

// https://en.wikipedia.org/wiki/Mega_Man#Original_series [this link is purely optional]

// There was a cycle among bosses, where each robot boss was weak to one of the other robot's weapons, so you'd have an easier time if you beat the bosses in a specific order so as to exploit their weaknesses (Mega Man 3 was weird, and didn't quite have a cycle). For instance, in Mega Man 2, Bubble Man was weak to Metal Man's Metal Blade weapon, so it made sense to beat Metal Man and acquire the Metal Blade before facing Bubble Man. Kind of like rock, paper, scissors, but in robot form :)

// Your task in this kata is to find the 'easiest' boss order, given an array of boss objects

function getBossOrder(bosses) {
  var s = [bosses.find((b) => b.difficulty === 1)],
    h = bosses.reduce((h, b) => ((h[b.weakness] = b), h), {});
  while (s.length < 8) s.push(h[s[s.length - 1].weapon]);
  return s.map((b) => b.name);
}
