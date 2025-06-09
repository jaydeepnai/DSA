import java.util.*;
class Solution {
    public List<Integer> addToArrayForm(int[] A, int K) {
        int i = A.length; 
        // 'i' starts at the length of array A. We'll use '--i' 
        // to go backwards.
        // Example: for A = [1,2,0,0], A.length is 4. 'i' starts at 4.
        int cur = K;     
        // 'cur' holds the value of K, and will also act 
        // as our carry/remaining sum.
        // Example: cur starts at 34.
        List<Integer> result = new ArrayList(); 
        // This list will store our sum digits, initially empty.
        // Loop condition:
        // We continue as long as there are digits left in array A (i >= 0)
        // OR as long as 'cur' (K's remaining value + any carry) is greater 
        // than 0.
        while (--i >= 0 || cur > 0) {
            // Iteration 1: i becomes 3. Loop condition 
            // (3 >= 0 || 34 > 0) -> true.
            // Iteration 2: i becomes 2. Loop condition 
            // (2 >= 0 || 3 > 0) -> true.
            // Iteration 3: i becomes 1. Loop condition
            // (1 >= 0 || 0 > 0) -> true.
            // Iteration 4: i becomes 0. Loop condition
            // (0 >= 0 || 0 > 0) -> true.
            // Iteration 5: i becomes -1. Loop condition
            // (-1 >= 0 || 0 > 0) -> false.
            if (i >= 0) { 
                // Check if we are still within the bounds of array A
                cur = cur + A[i]; 
                // Add the current digit from A to 'cur'
                // Iter 1 (A[3]=0): cur = 34 + 0 = 34.
                // Iter 2 (A[2]=0): cur = 3 + 0 = 3.
                // Iter 3 (A[1]=2): cur = 0 + 2 = 2.
                // Iter 4 (A[0]=1): cur = 0 + 1 = 1.
            }
            result.add(cur % 10); 
            // Get the last digit of 'cur' and add it to our result list.
            // This is the current digit of the sum.
            // Iter 1: 34 % 10 = 4. result: [4]
            // Iter 2: 3 % 10 = 3. result: [4, 3]
            // Iter 3: 2 % 10 = 2. result: [4, 3, 2]
            // Iter 4: 1 % 10 = 1. result: [4, 3, 2, 1]
            cur = cur / 10;       
            // Divide 'cur' by 10 to get the carry (or remaining part of K) for the next step.
            // Iter 1: 34 / 10 = 3. cur: 3
            // Iter 2: 3 / 10 = 0. cur: 0
            // Iter 3: 2 / 10 = 0. cur: 0
            // Iter 4: 1 / 10 = 0. cur: 0
        }
        Collections.reverse(result); 
        // The digits were added to 'result' from right to left.
        // We reverse the list to get the correct order (e.g., [4,3,2,1] becomes [1,2,3,4]).
        return result; // Return the final sum as a list of integers.
    }
}