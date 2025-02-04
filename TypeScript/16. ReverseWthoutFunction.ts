const stringReverseWithoutReverseFinction = (str : string)=>{

    var revseredStr = '';

    for(let i = str.length - 1; i >= 0; i--){
        revseredStr += str[i];
    }

    return revseredStr

}

console.log(stringReverseWithoutReverseFinction("JAYDEEPN"))