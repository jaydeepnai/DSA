const moveZeroToEnd =(num : number[]) : number[]=>{
    const numberdArray: number[] = []
    const zeroArray:number[] = []
    num.forEach((n)=>{
        if(n!==0) numberdArray.push(n)
        else zeroArray.push(n)
    })
    return numberdArray.concat(zeroArray)
}

console.log(moveZeroToEnd([0,1,0,1,2,3,4,0,5]))
//[1, 1, 2, 3, 4, 5, 0, 0, 0] 