// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    let arr = str.split('')
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (!(arr[i].toLowerCase() === 'a' || arr[i].toLowerCase() === 'e' || arr[i].toLowerCase() === 'i' || arr[i].toLowerCase() === 'o' || arr[i].toLowerCase() === 'u')) {
            newArr.push(arr[i])
        }
    }
    return newArr.join('')
}
