// It's the fourth quater of the Super Bowl and your team is down by 4 points. You're 10 yards away from the endzone, if your team doesn't score a touchdown in the next four plays you lose. On a previous play, you were injured and rushed to the hospital. Your hospital room has no internet, tv, or radio and you don't know the results of the game. You look at your phone and see that on your way to the hospital a text message came in from one of your teamates. It contains an array of the last 4 plays in chronological order. In each play element of the array you will receive the yardage of the play and the type of the play. Have your function let you know if you won or not.

function didWeWin(plays) {
  var s = 0;
  for (var i = 0; i < 4; ++i) {
    if (plays[i].length > 1) {
      if (plays[i][1] == "turnover") return false;
      if (plays[i][1] == "sack") s -= plays[i][0];
      else s += plays[i][0];
    }
  }
  return s > 10;
}
