// Chocolate Distribution Problem
// Last Updated : 26 Dec, 2023
// Given an array of N integers where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

// Each student gets one packet.
// The difference between the number of chocolates in the packet with maximum chocolates and the packet with minimum chocolates given to the students is minimum.
// Examples:

// Input : arr[] = {7, 3, 2, 4, 9, 12, 56} , m = 3 
// Output: Minimum Difference is 2 
// Explanation:
// We have seven packets of chocolates and we need to pick three packets for 3 students 
// If we pick 2, 3 and 4, we get the minimum difference between maximum and minimum packet sizes.

// Input : arr[] = {3, 4, 1, 9, 56, 7, 9, 12} , m = 5 
// Output: Minimum Difference is 6 

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
