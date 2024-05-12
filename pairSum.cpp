// Check if pair with given Sum exists in Array (Two Sum)
// Input: arr[] = {0, -1, 2, -3, 1}, x= -2
// Output: Yes
// Explanation: If we calculate the sum of the output,1 + (-3) = -2
// Input: arr[] = {1, -2, 1, 0, 5}, x = 0
// Output: No
#include <iostream>
using namespace std;


int main()
{
    int a [] = { 0, -1, 2, -5, 1};
    int x = -2;
    int size = sizeof(a)/sizeof(a[0]);
    
    for (int i = 0; i < size; i++) {
        for (int j = i+1; j < size; j++) {
            if(a[i]+a[j]==x)
            {
                cout<<"We got it";
            }
        }
    }
    
    return 0;
}
