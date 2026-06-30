function missingNumber(nums: number[]): number {
    const set = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }

    return -1;
}