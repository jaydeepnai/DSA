class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] output = new int[n];
        // Step 1: Calculate left products
        output[0] = 1;
        for (int i = 1; i < n; i++) {
            output[i] = nums[i - 1] * output[i - 1];
        }
        // Step 2: Multiply with right products
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            output[i] = output[i] * right;
            right *= nums[i];
        }
        return output;
    }
}