const titlecasing = (str : string) : string=>{
    return str[0].toUpperCase() + str.substr(1,str.length -1);
} 

console.log(titlecasing("jaydeep nai"))