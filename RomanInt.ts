function romanToInt(str: string): number {
    type romanType = {
        [key in 'I' | 'V' | 'X' |'L' |'C' |'D' |'M'] : number
    }
    const roman : romanType= {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }

    let sum : number = 0;

    for(let i : number = str.length; i > 0; i--){
        let amt = roman[str[i] as keyof romanType];
        if(i == str.length) sum += amt;
        else if (roman[str[i] as keyof romanType] < roman[str[i]+1 as keyof romanType] ) sum -= amt;
        else if (roman[str[i] as keyof romanType] < roman[str[i]+1 as keyof romanType] ) sum += amt;
    } 
    return sum
};


console.log(romanToInt("LVIII"))