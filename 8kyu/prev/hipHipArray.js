// This time no story, no theory.The examples below show you how to write function accum:

//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s){
    let output = [];
    for (let i=0; i<s.length; i++){
        let letter = s[i].toLowerCase()
        output.push(letter.toUpperCase())
        if (i > 0){
            for (let k = 0; k < i; k++){
                output.push(letter)
            }
        }
        output.push('-');
    }
    output.pop()
    let newString = output.join('')
    return newString
}

console.log(accum("abcd"), "A-Bb-Ccc-Dddd")
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
console.log(accum("cwAt"), "C-Ww-Aaa-Tttt")