function rearrangeArray(nums: number[]): number[] {
    const positive: number[] = [];
    const negative: number[] = [];

    // Store positives and negatives separately
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positive.push(nums[i]);
        } else {
            negative.push(nums[i]);
        }
    }

    const ans: number[] = [];

    // Place them alternately
    for (let i = 0; i < positive.length; i++) {
        ans.push(positive[i]);
        ans.push(negative[i]);
    }

    return ans;
}