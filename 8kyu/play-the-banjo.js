// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"


function areYouPlayingBanjo(name) {
    let nameArr = name.split('')
    if (nameArr[0] === 'R' || nameArr[0] === 'r'){
      return `${name} plays banjo`
    }else {
      return `${name} does not play banjo`
    }
  }
  
  console.log(areYouPlayingBanjo('Randy'), 'Randy plays banjo')
  console.log(areYouPlayingBanjo('christian'), 'christian does not play banjo')