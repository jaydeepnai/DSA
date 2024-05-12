#include <bits/stdc++.h>

using namespace std;

vector<int> duplicates(long long arr[], int n) {
    unordered_map<long long, int> freqMap;
    vector<int> result;

    for (int i = 0; i < n; i++) {
        freqMap[arr[i]]++;
    }

    for (auto& entry : freqMap) {
        if (entry.second > 1) {
            result.push_back(entry.first);
        }
    }

    if (result.empty()) {
        result.push_back(-1);
    }
    
    sort(result.begin(),result.end());
    return result;
}

int main() {
    long long a[] = {1, 6, 5, 2, 3, 3, 2};
    int n = sizeof(a) / sizeof(a[0]);
    
    vector<int> duplicates_found = duplicates(a, n);
    
    cout << "Duplicate elements: ";
    for (int element : duplicates_found) {
        cout << element << " ";
    }
    cout << endl;
    
    return 0;
}


In JS
// function findDuplicates(arr) {
//     let freqMap = {};
//     let result = [];

//     // Populate the frequency map
//     for (let i = 0; i < arr.length; i++) {
//         freqMap[arr[i]] = (freqMap[arr[i]] || 0) + 1;
//     }

//     // Collect elements with a frequency greater than 1
//     for (let key in freqMap) {
//         if (freqMap[key] > 1) {
//             result.push(parseInt(key));
//         }
//     }

//     // Handle case where no duplicates are found
//     if (result.length === 0) {
//         result.push(-1);
//     }

//     // Sort the result array
//     result.sort((a, b) => a - b);

//     return result;
// }

// // Example usage
// let arr = [1, 6, 5, 2, 3, 3, 2];
// let duplicatesFound = findDuplicates(arr);

// console.log("Duplicate elements:");
// console.log(duplicatesFound.join(" "));
