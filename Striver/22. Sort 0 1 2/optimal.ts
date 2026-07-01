function sortColors(nums: number[]): void {
    // Three pointers:
    // low  -> next position where 0 should be placed
    // mid  -> current element being processed
    // high -> next position where 2 should be placed
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    // Process until mid crosses high
    while (mid <= high) {

        // Rule 1:
        // If current element is 0,
        // swap it with the element at 'low'
        // because everything before low is already sorted.
        // Move both pointers forward.
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }

        // Rule 2:
        // If current element is 1,
        // it's already in the correct middle region.
        // Just move to the next element.
        else if (nums[mid] === 1) {
            mid++;
        }

        // Rule 3:
        // If current element is 2,
        // swap it with the element at 'high'
        // because 2 belongs at the end.
        //
        // IMPORTANT:
        // Do NOT increment mid here!
        // The element swapped from the end hasn't been processed yet,
        // so we must check it in the next iteration.
        else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}

// Rules
// a[mid] = 0.   swap(a[low],a[mid]); low++ mid++
// a[mid] = 1.   mid++ 
// a[mid] = 2.   swap(a[high],a[mid]) high--