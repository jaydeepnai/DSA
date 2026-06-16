function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;
    
    for (let i = 0; i < n; i++) {
        const newIndex = (i + k) % n;
        nums.push(nums[newIndex]);
    }
    
    nums.splice(0, n);
}