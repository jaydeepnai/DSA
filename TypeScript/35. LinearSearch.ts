const linearSearch  = (arr : number[], target : number ) : number =>{
    let a : number = -1;
    arr.some((n, i)=>{
        if(target==n) {
            a = i
            return true
        }
        return false
    })
    return a
}

const linearSearchWithForloop  = (arr : number[], target : number ) : number =>{
    let a : number = -1;
    for(let i = 0; i< arr.length; i++){
        if(target==arr[i]) {
            a = i
            break
        }
    }
    return a
}

console.log(linearSearch([2,3,5,4,7,9,6],9))
console.log(linearSearchWithForloop([2,3,5,4,7,9,6],9))
