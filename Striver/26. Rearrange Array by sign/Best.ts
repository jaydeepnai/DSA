function rearrangeArray(nums: number[]): number[] {
    const ans: number[] = new Array(nums.length);

    let i = 0; // Even index (positive)
    let j = 1; // Odd index (negative)

    for (const num of nums) {
        if (num > 0) {
            ans[i] = num;
            i += 2;
        } else {
            ans[j] = num;
            j += 2;
        }
    }

    return ans;
}