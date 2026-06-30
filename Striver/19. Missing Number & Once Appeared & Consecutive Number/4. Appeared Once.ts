function singleNumber(nums: number[]): number {
    const map = new Map<number, number>();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }

    return -1;
}