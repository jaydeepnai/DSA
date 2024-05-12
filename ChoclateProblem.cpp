#include <stdio.h>
#include <bits/stdc++.h>
int main()
{
    int arr[] = { 12, 4,  7,  9,  2,  23, 25, 41, 30,
                  40, 28, 42, 30, 44, 48, 43, 50 };
    int m = 7; 
    int n = sizeof(arr) / sizeof(arr[0]);
    int smallestDifference = arr[n-1];
    std::sort(arr,arr+n);
    for (int i = 0; i < n-1; i++) {
        std::cout << arr[i] << " ";
    }
    for (int i = 0; i + m-1 < n; i++) {
        int localDiff = arr[i+m-1] - arr[i];
        if(localDiff < smallestDifference){
            smallestDifference = localDiff; 
        }
    }
    std::cout << std::endl;
    std::cout << "smallest Difference is" << smallestDifference;
    return 0;
}
