// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    let charArr = [];
    for (i=0; i<s1.length; i++){
        if (!charArr.includes(s1[i])){
            charArr.push(s1[i]);
        }
    }
    for (i=0; i<s2.length; i++){
        if (!charArr.includes(s2[i])){
            charArr.push(s2[i]);
        }
    }
    return charArr.sort().join('')
}