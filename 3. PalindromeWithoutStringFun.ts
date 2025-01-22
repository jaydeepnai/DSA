const palindromeWithoutStringFun  = (num : number ) : boolean =>{
    let orgNum = num; 
    let calcNum = 0;  
    while(orgNum > calcNum){
        calcNum =  (calcNum * 10) + (orgNum % 10)
        orgNum = Math.floor(orgNum / 10)
    }
    return orgNum === calcNum || (orgNum === Math.floor(calcNum / 10))
}

console.log(palindromeWithoutStringFun(121))