// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

//p - 1 string parameter
//r - 1 string, case sensitive, w words reversed
//e - ('Kingston, Jamaica' --> 'notsginK, aciamaJ')
//p - split words, reverse words, re-join words with space

function reverseString(str){
    let strArr = str.split(' ') 
    let revArr = []
    strArr.forEach(element => {
        revArr.push(element.split('').reverse().join(''))
    });
    return revArr.join(' ')
}

console.log(reverseString('Jama Ica'), 'amaJ acI');
