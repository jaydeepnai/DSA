const addSapceInCapital = (nums : string ) =>{
    let newStr : string = "";
    let arr : string[] = nums.split("")
    arr.forEach((i,index)=> {
        let isCapital = (i === i.toUpperCase())
        newStr += (isCapital &&  (arr[index - 1]  !== " ")? (" "+i) : i)
    })
    return newStr
}

console.log(addSapceInCapital("JaydeepNaiisGood siSi"))