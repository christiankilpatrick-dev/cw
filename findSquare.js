// Write a function that returns array of arrays of integers which represents a inner square.

// Notes:

// rect: 3 <= rows <= 10, 3 <= cols <= 10

// rect[0] <= center <= rect[rect.length - 1]

// 0 < side < 10 - always an odd number

function innerSquare(rect, center, side) {
  var x, y;
  for (var i = 0; i < rect.length; ++i)
    for (var j = 0; j < rect.length; ++j)
      if (rect[i][j] == center) {
        x = i;
        y = j;
        break;
      }
  var ans = [];
  for (
    var i = Math.max(0, x - (side - 1) / 2);
    i < Math.min(rect.length, x + (side + 1) / 2);
    ++i
  ) {
    var c = [];
    for (
      var j = Math.max(0, y - (side - 1) / 2);
      j < Math.min(rect[0].length, y + (side + 1) / 2);
      ++j
    )
      c.push(rect[i][j]);
    ans.push(c);
  }
  return ans;
}
