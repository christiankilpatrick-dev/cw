// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// The input data has the following structure:
// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// OUTPUT:
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }

const whosOnline = (friends) => {
  let online = [];
  let offline = [];
  let away = [];
  let output = {};
  if (friends[0]) {
    for (let i = 0; i < friends.length; i++) {
      friends[i].status === "offline"
        ? offline.push(friends[i].username)
        : friends[i].lastActivity > 10
        ? away.push(friends[i].username)
        : online.push(friends[i].username);
    }
    if (online[0]) {
      output["online"] = online;
    }
    if (offline[0]) {
      output["offline"] = offline;
    }
    if (away[0]) {
      output["away"] = away;
    }

    return output;
  } else {
    return output;
  }
};

console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ]),
  {
    online: ["David"],
    offline: ["Lucy"],
    away: ["Bob"],
  }
);
