

// The "Maximum Product Subarray" problem is focused on finding a contiguous subarray within a given array whose elements have the largest product. This task can be complex due to the presence of negative numbers, which can turn into positives when paired with another negative, and zeros, which reset the product to zero. Let's look at more examples to illustrate various scenarios:

// Example 1:
// Input: arr[] = {2, 3, -2, 4}
// Output: 6

#include <bits/stdc++.h>

using namespace std;

int main() {
    int a[] = {10, 3, 5, 6, 2};
    int b[] = {180, 600, 360, 300, 900};
    
    for (int i = 0; i < sizeof(a)/sizeof(a[0]); i++) {
        int mul  = 1;
        
        for (int j = 0; j <  sizeof(a)/sizeof(a[0]); j++) {
             if (i == j ){
                 mul = mul * 1;
             }
             else
             {
                mul = mul * a[j];
             }
        }
        
         for (int z = 0; z < sizeof(b)/sizeof(b[0]); z++) {
             if (mul == b[z]){
                 cout << "we found " << mul << " except : "<<a[i]<<endl;
             }
         }
        
        cout << "totol here : " << mul <<endl;
    }
    cout << endl;
    
    return 0;
}
