// 5ms - Beats : 69.98%
// https://leetcode.com/problems/palindrome-number/description/
class Solution {
    public boolean isPalindrome(int x) {

        if (x < 0)
            return false;
        else if (x >= 0 && x < 10)
            return true;
        else if (x % 10 == 0)
            return false;

        int n = x;
        int reverse = 0;

        while (n > 0) {
            int temp = n % 10;
            reverse = (reverse * 10) + temp;
            n = n / 10;
        }

        return reverse == x;
    }
}

