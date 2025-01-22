#include<bits/stdc++.h>
using namespace std;

int main() {
   
    vector<vector<int>> mat = {{1, 0, 2, 1}, 
                               {3, 4, 5, 2}, 
                               {0, 3, 0, 5}};
    int r = mat.size();    // Number of rows
    int c = mat[0].size(); // Number of columns
    vector<vector<int>> TempMat(r, vector<int>(c, 0)); // Initialize with 0s
    
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if(mat[i][j] == 1){
                for (int internalI = 0; internalI < r; internalI++) {
                    TempMat[internalI][j] = 1;
                }
                for (int internalJ = 0; internalJ < c; internalJ++) {
                    TempMat[internalJ][j] = 1;
                }
            }
            else{
             TempMat[i][j] =mat[i][j];    
            }
        }
    }
    
    for (int i = 0; i < TempMat.size(); i++) {
    for (int j = 0; j < TempMat[0].size(); j++) {
      cout << TempMat[i][j] << " ";
    }
    cout << "\n";
  }
    return 0;
}
