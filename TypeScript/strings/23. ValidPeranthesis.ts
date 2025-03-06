const isValid =(str : string) : boolean=>{
    const stack: string[] =[]; 
    const valid : Record<string,string>  = {")":"(","]":"[","}":"{"}; 
    for(let s of str){
        if(s in valid){
            if(stack.length == 0 || stack.pop()!== valid[s]){
                return false
            }
        }else{
            stack.push(s)
        }
    }
    return stack.length === 0
}

console.log(isValid(""))
console.log(isValid("()[]{}"));
console.log(isValid("(]"));    
console.log(isValid("{[]}"));  
console.log(isValid("([)]"));  
console.log(isValid("{[()]}"));