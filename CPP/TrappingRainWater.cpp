// Trapping Rain Water
// Last Updated : 20 Feb, 2023
// Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Examples:  

// Input: arr[] = {2, 0, 2}
// Output: 2
// Explanation: The structure is like below.
// We can trap 2 units of water in the middle gap.
#include <iostream>
using namespace std;

int main()
{
    int a [] {3,1,2,4,0,1,3,2};
    int n = sizeof(a) / sizeof(a[0]);
    int* left = new int[n];
    int* right = new int[n];
    int boxes = 0;
    left[0] = a[0];
    for (int i = 1; i < n; i++) {
        left[i] = max(left[i-1],a[i]);
    }
    right[n-1] = a[n-1];
      for (int i = n - 2; i >= 0; i--) { 
        right[i] = max(right[i+1],a[i]);
    }
    for (int i = 0; i < sizeof(a)/sizeof(a[0]); i++) {
        boxes = boxes + (min(left[i],right[i]) - a[i]);
    }
    std::cout << boxes << std::endl;
    return 0;
}