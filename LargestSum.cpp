#include <bits/stdc++.h>

using namespace std;

int main() {
    int a[] = {9, -3, 5, -2, 6, -8, 7, -1};
    
    int Largest  = 0;
    for (int i = 0; i < sizeof(a)/sizeof(a[0]); i++) {
        int tempSum = 0;
        for (int j = i; j <  sizeof(a)/sizeof(a[0]); j++) {
                tempSum += a[j];
                if(tempSum > Largest){
                    Largest = tempSum;
                }
            }
        }
    std::cout << Largest << std::endl;
    return 0;
    }