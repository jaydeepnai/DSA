

// The "Maximum Product Subarray" problem is focused on finding a contiguous subarray within a given array whose elements have the largest product. This task can be complex due to the presence of negative numbers, which can turn into positives when paired with another negative, and zeros, which reset the product to zero. Let's look at more examples to illustrate various scenarios:

// Example 1:
// Input: arr[] = {2, 3, -2, 4}
// Output: 6


#include <bits/stdc++.h>

using namespace std;

int main() {
    int a[] {-2, 0, -1, -3};
    
    int Largest  = 1;
    for (int i = 0; i < sizeof(a)/sizeof(a[0]); i++) {
        int tempMul = 1;
        for (int j = i; j <  sizeof(a)/sizeof(a[0]); j++) {
                tempMul = tempMul *  a[j];
                if(tempMul > Largest){
                    Largest = tempMul;
                }
            }
        }
    std::cout << Largest << std::endl;
    return 0;
    }