const nonReapetingNumber  = (num : number[] ) : number | undefined =>{
    let numberObject: {[key : number] : number}= {}; 
    
    num.forEach((n)=>{
        if(!numberObject[n]){
            numberObject[n] = 1
        }else{
            numberObject[n] = numberObject[n]+1 
        }
    })

    const obj = Object.entries(numberObject).find((value,index)=>{
        return value[1] == 1
    })

    return obj && Number(obj[0])
}

console.log(nonReapetingNumber([1,2,1,2,4,3,5,3]))