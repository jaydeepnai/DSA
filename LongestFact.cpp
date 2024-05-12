#include <boost/multiprecision/cpp_int.hpp>
#include <iostream>
using namespace boost::multiprecision;
using namespace std;

int main() {
    int a = 100;
    cpp_int fact = 1; // Use Boost's arbitrary-precision integer
    for (int i = a; i >= 1; i--) {
        fact *= i;
    }
    cout << fact << endl;
    return 0;
}
