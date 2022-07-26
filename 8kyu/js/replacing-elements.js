// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
    let newArr = ['']
    for (let i=0;i<x.length;i++){
        if (x[i] > 5){
            newArr.push(0)
        }else if (x[i] < 5){
            newArr.push(1)
        }else {
            newArr.push(x[i])
        }
    }
    let newStr = newArr.join('')
    console.log(newStr);
}

fakeBin('4927811735')