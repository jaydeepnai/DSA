const findRepestedNumber = (nums : number[] ) =>{
    let occurredNumber : { [key : number] : number } = {};

    nums.forEach((n:number)=>{
        occurredNumber[n] = getValue(occurredNumber[n]) + 1  
    })

    let on :number[]= []  

    Object.entries(occurredNumber).filter(n => n[1] !== 1 ).map(n =>{
        on.push(Number(n[0]))
    })

    return on
}

const getValue = ( num : number) =>{
return num == undefined ? 0 : num 
}

console.log(findRepestedNumber([1,1,1,2,3,3,3,4,6,5,5]))