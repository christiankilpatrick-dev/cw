// It is your first time at the Edinburgh Fringe Festival, and you are looking to see somes shows! The problem is that there are so many shows that choosing which ones to see can be stressful.
// Instead, you have decided to make a function to help you to see as many consecutive shows as possible each evening, thus eliminating the pesky problem of making actual decisions.
// As input, you will receive an array of objects representing different shows in the following format:

// {
//   name: "Little Death Club",
//   time: 8,
//   length: 1,
//   price: 15,
// }

function chooseShows(showList) {
  if (!showList.length) return [["No shows to see!"], 0];
  let res = [[], 0],
    timeStart = 5;
  showList.sort((a, b) => a.time - b.time || a.price - b.price);
  showList.forEach((show) => {
    if (show.time >= timeStart) {
      timeStart = 0.5 + show.length + show.time;
      res[0].push(show.name);
      res[1] += show.price;
    }
  });
  return res;
}
