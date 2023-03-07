// Your Task
// Please help Farmer Arepo by inspecting each tablet to discern whether or not it shows a Sator Square!
// tablet (square) dimensions range from 2x2 to 33x33 inclusive
// characters range from ascii ordinals 33 to 126 inclusive
// tablets may contain characters that look similar yet are different
// you are not permitted to mutate the input
// Input
// tablet  //  a 2D char list (2 <= n <= 33)
// Output
// true or false

const isSatorSquare = (tablet) =>
  tablet.every((row, y) =>
    row.every(
      (v, x) =>
        tablet[x][y] == v &&
        tablet[row.length - x - 1][tablet.length - y - 1] == v
    )
  );
