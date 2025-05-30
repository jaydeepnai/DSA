// Runtime 10ms - Beats 10.67%
class Solution {
    public int fib(int n) {
        if(n==0) return 0;
        else if (n==1) return 1;
        else {
            return fib(n-1)+fib(n-2);
        }
    }
}




// Runtime 0ms - Beats 100.00%
// Memory 40.90MB - Beats 11.71%
class Solution {
    public int fib(int n) {
        if(n==0) return 0;
        else if (n==1) return 1;
        else {
            int first = 0, sec = 1; 
            for(int i =0; i<n; i++){
                int temp = first+sec;
                first = sec;
                sec = temp;
            }
            return first;
        }
    }
}



// 0ms Beats 100.00%
// Memory 40.12MB Beats 90.59%
class Solution {
    public int fib(int n) {
        if (n <= 1)
            return n;
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }

}