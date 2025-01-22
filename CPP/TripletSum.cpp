// Input: arr[] = {0, -1, 2, -3, 1}
// Output: (0 -1 1), (2 -3 1)
// Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

// Input: arr[] = {1, -2, 1, 0, 5}
// Output: 1 -2  1
// Explanation: The triplets with zero sum is 1 + -2 + 1 = 0   


#include <iostream>
using namespace std;

int main()
{
    int arr[] ={1, -2, 1, 0, 5};
    
    for (int i = 0; i < sizeof(arr)/sizeof(arr[0]) - 2 ; i++) {
          for (int j = i+1; j < sizeof(arr)/sizeof(arr[0]) - 1 ; j++) {
            for (int K = j+1; K < sizeof(arr)/sizeof(arr[0]) ; K++) {
                if(arr[i] + arr[j] + arr[K] == 0){
                    cout << arr[i] << " " << arr[j] << " " << arr[K] << endl;
                }
            }
        }
    }
    return 0;
}