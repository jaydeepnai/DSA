function majorityElement(nums: number[]): number {
    const n = nums.length;

    // Check every element as a possible majority element
    for (let i = 0; i < n; i++) {

        // Count how many times nums[i] appears
        let count = 0;

        for (let j = 0; j < n; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }

        // Majority element appears more than n / 2 times
        if (count > Math.floor(n / 2)) {
            return nums[i];
        }
    }

    // This line is never reached because the problem guarantees
    // a majority element always exists.
    return -1;
}