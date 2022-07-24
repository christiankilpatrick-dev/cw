// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
    let strArr = str.split('')
    let newStr = []
    for (i=0; i <= strArr.length; i++) {
        newStr.push(strArr[i])
        newStr.push(strArr[i])
    } 
    return newStr.join('')
}


console.log(doubleChar('String'))