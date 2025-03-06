const fibonaciWithRecursion  = (num : number ) : number =>{
    if(num<2) return num
    return fibonaciWithRecursion(num-1) + fibonaciWithRecursion(num-2) 
}

console.log(fibonaciWithRecursion(3))
console.log(fibonaciWithRecursion(4))
console.log(fibonaciWithRecursion(6))
console.log(fibonaciWithRecursion(8))
// 0,1,1,2,3,5,8,13,21,34