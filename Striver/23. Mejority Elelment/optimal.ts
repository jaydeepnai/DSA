function majorityElement(nums: number[]): number {
    const map = new Map<number, number>();
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);

        // If frequency becomes greater than n/2,
        // this is the majority element.
        if (map.get(num)! > majorityCount) {
            return num;
        }
    }

    return -1;
}