function removeDuplicates(nums: number[]): number {
    let k = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[k] !== nums[i]){
            nums[k+1] = nums[i]
            k++;
        }
    }

    return k+1;
}