// Find the Minimum element in a Sorted and Rotated Array
// Last Updated : 17 Apr, 2024
// Given a sorted array arr[] (may be distinct or may contain duplicates) of size N that is rotated at some unknown point, the task is to find the minimum element in it. 

// Examples: 

// Input: arr[] = {5, 6, 1, 2, 3, 4}
// Output: 1
// Explanation: 1 is the minimum element present in the array.

// Input: arr[] = {1, 2, 3, 4}
// Output: 1

#include <bits/stdc++.h>

using namespace std;

int main() {
    int a[] = {5, 6, 2, 3, 4};
    
    int Min  = a[0];
    for (int i = 0; i < sizeof(a)/sizeof(a[0]); i++) {
        if(a[i]<Min){
            Min = a[i];
        }
    }
    std::cout << Min << std::endl;
    return 0;
}