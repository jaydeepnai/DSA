function isPalindrome(x: number): boolean {
    if(x == 0 || x >= 1 && x <= 9 ){
        return true
    }
    if (x % 10 == 0) {
        return false
    }
    let reverse : number = 0;
    let copy : number = x;
    while(copy > 0){
        reverse = (reverse * 10) + copy % 10;
        copy = Math.floor(copy / 10);
    }
    return reverse == x;
};

