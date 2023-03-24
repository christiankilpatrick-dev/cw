// Note: this is an easy Kata, but requires a bit of knowledge about the game Overwatch. Feel free to skip the background section if you are familiar with the game!

// Background
// Overwatch is a team-based online First Person Shooter. Teams are made up of 6 unique heroes. No team can have 2 of the same hero. e.g. You can't play Tracer if I'm already Tracer.

const HEROES = [TANK, DAMAGE, SUPPORT].reduce(
  (map, names, i) => (names.forEach((name) => (map[name] = i)), map),
  {}
);

const teamComp = (heroes) => {
  if (heroes.length !== 6 || new Set(heroes).size !== heroes.length)
    throw new Error("GG");

  return heroes.reduce((comp, name) => (comp[HEROES[name]]++, comp), [0, 0, 0]);
};
