function sortColors(nums: number[]): void {
    const map = new Map<number, number>();

    // Count frequencies
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let index = 0;

    // Rewrite the array
    for (let value = 0; value <= 2; value++) {
        let count = map.get(value) || 0;

        while (count > 0) {
            nums[index++] = value;
            count--;
        }
    }
}