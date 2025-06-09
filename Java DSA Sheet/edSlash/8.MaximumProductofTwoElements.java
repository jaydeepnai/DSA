class Solution {
    public int maxProduct(int[] nums) {
        // Let's keep track of our heaviest two fruits found so far.
        // We initialize them to 0, assuming numbers are positive or 0.
        int max1 = 0; // This will store our absolute heaviest number
        int max2 = 0; // This will store our second heaviest number
        
        // Go through each number (n) in the 'nums' array one by one
        for (int n : nums) {
            // If the current number 'n' is heavier than or equal to our heaviest so far...
            if (n >= max1) { 
                max2 = max1; // ...then our old heaviest (max1) becomes the new second heaviest (max2)
                max1 = n;    // ...and 'n' becomes our new heaviest (max1)
            } else if (n > max2) { // If 'n' isn't the heaviest, BUT it's heavier than our second heaviest...
                max2 = n;    // ...then 'n' becomes our new second heaviest (max2)
            }
        }
        // After checking all numbers, max1 and max2 hold the two heaviest numbers.
        return (max1 - 1) * (max2 - 1);
    }
}