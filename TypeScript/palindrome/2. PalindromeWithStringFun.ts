const palindrome  = (num : number ) : boolean =>{
    let revNumStr : number = Number(num.toString().split("").reverse().join(""));
    return revNumStr === num;
}

console.log(palindrome(121))