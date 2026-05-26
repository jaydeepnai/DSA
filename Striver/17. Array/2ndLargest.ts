function findSecondLargest(nums: number[]): number {
    let first = -Infinity, second = -Infinity;

    for (let num of nums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? -1 : second;
}