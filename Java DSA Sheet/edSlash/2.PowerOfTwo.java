// Day 1/N #letsCrackGoogle   
// 2. Power of Two ( 0ms - Beats : 100.00% ) 
// #letsconnect #leetcode #dsa
// https://leetcode.com/problems/power-of-two/description/?source=submission-ac
class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n<=0) return false;
        else if(n == 1) return true;
        else if(n%2 != 0) return false;
        else{
            while(n%2==0){
                n=n/2;
            }
            return n==1;
        }
    }
}