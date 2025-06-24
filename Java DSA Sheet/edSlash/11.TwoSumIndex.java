// 167. Two Sum II - Input Array Is Sorted
// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Brute Force
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int end = numbers.length-1;
        int start = 0; 

        while(start<end){
            int total = numbers[start] + numbers[end];
            if(total == target) return new int[]{start+1,end+1};
            else{
                if(total > target){
                    end--;
                }else{
                    start++;
                }
            }
        }

        return new int[]{0,0};
    }
}

// 2 pointers
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int n = numbers.length;

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (numbers[i] + numbers[j] == target) {
                    // Return 1-based index
                    return new int[]{i + 1, j + 1};
                }
            }
        }

        return new int[]{-1, -1}; // If no solution found
    }
}






