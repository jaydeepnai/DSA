function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = 0;

    for (const num of nums) {
        // If current sum is negative, start a new subarray
        if (currentSum < 0) {
            currentSum = 0;
        }

        currentSum += num;

        // Update the maximum sum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}