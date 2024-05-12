// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
// Output : Found at index 8

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30
// Output : Not found

// Input : arr[] = {30, 40, 50, 10, 20}, key = 10   
// Output : Found at index 3

#include <iostream>
using namespace std;

int main()
{
    int arr[] ={30, 40, 50, 10, 20};
    int value = 10;  
    
    for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++) {
        if(arr[i] == value){
            std::cout << "found at " << i << "th Position" << std::endl;
        }

    }  
    return 0;
}