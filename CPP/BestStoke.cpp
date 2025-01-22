// Best Time to Buy and Sell Stock
// Last Updated : 02 Jan, 2024
// Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.

// Note: Stock must be bought before being sold.

// Examples:

// Input: prices[] = {7, 1, 5, 3, 6, 4}
// Output: 5
// Explanation:
// The lowest price of the stock is on the 2nd day, i.e. price = 1. Starting from the 2nd day, the highest price of the stock is witnessed on the 5th day, i.e. price = 6. 
// Therefore, maximum possible profit = 6 – 1 = 5. 

// Input: prices[] = {7, 6, 4, 3, 1} 
// Output: 0
// Explanation: Since the array is in decreasing order, no possible way exists to solve the problem.


#include <iostream>
using namespace std;

int main()
{
    int a [] =  {10, 7, 5, 8, 11, 9};
    int x = 0;
    int size = sizeof(a)/sizeof(a[0]);
    int maxprofit =0;
    
    for (int i = 0; i < size; i++) {
        for (int j = i+1; j < size; j++) {
            if(a[j]-a[i]>maxprofit)
            {
                maxprofit = a[j]-a[i];
            }
        }
    }
    std::cout << maxprofit << std::endl;
    return 0;
}
