const factorialWithRecursion  = (num : number ) : number =>{
    if(num===1) return num
    return factorialWithRecursion(num-1) * num
}

console.log(factorialWithRecursion(7))


//5 
// (5-1)*5
// (4-1)*4
// (3-1)*3
// (2-1)*2
// 1