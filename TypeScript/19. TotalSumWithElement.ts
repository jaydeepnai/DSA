function twoSum(nums: number[], target: number): number[] {
    let numMap: Record<number, number> = {}; 

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numMap[complement] !== undefined) {
            return [numMap[complement], i]; 
        }

        numMap[nums[i]] = i; 
    }

    return []; 
}

console.log(twoSum([2, 7, 11, 15], 9)); 
