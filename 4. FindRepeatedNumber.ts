const FindFirstNonRepeatedCharecter  = (str : string ) =>{
    let strArray = str.split("");
    let charObj : { [index : string] : number } = {};

    strArray.map((s:string)=>{
        if(charObj[s]){
            charObj[s] = charObj[s]+1; 
        }else{
            charObj[s] = 1;
        }
    })

    Object.entries(charObj).forEach((c)=>{
        if(c[1] == Number(c[1])){
            return c[0] 
        }
        return "Empty";
    })
}

console.log(FindFirstNonRepeatedCharecter("jaydeepjai"))