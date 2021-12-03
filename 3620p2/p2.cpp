#include "p2.hpp"
#include "conv.hpp"

using namespace std;

#define LEN1 6
#define LEN2 7
#define LEN3 4
#define LEN4 5
#define MAXY 100

int problem2(void) {
  cout << "Solving Problem 2" << endl;

  ofstream p2("p2.txt", ios::out);
  if (!p2.is_open()) {
    cout << "FILE OPEN FAILURE" << endl;
    return 1;
  }

  p2 << "CONVOLUTIONS FOR PROBLEM 2\n========================================\n" << endl;

  double y[MAXY] = {};
  int leny = 0;

  double f1[] = { 0,  1,  2,  3,  2,  1};
  double f2[] = {-2, -2, -2, -2, -2, -2, -2};
  double f3[] = { 1, -1,  1, -1};
  double f4[] = { 0,  0,  0, -3, -3};

  cout << "f1[] = { 0,  1,  2,  3,  2,  1};" << endl;
  cout << "f2[] = {-2, -2, -2, -2, -2, -2, -2};" << endl;
  cout << "f3[] = { 1, -1,  1, -1};" << endl;
  cout << "f4[] = { 0,  0,  0, -3, -3};" << endl;

  p2 << "f1[] = { 0,  1,  2,  3,  2,  1};" << endl;
  p2 << "f2[] = {-2, -2, -2, -2, -2, -2, -2};" << endl;
  p2 << "f3[] = { 1, -1,  1, -1};" << endl;
  p2 << "f4[] = { 0,  0,  0, -3, -3};" << endl;

  cout << endl;
  p2 << endl;

  // 2a
  rsty(y, leny);
  cout << "2a. Convolving f1*f1" << endl;
  p2 << "2a. Convolving f1*f1" << endl;
  leny = conv(f1, LEN1, f1, LEN1, y);
  ptar(y, leny, p2);
  cout << endl;
  p2 << endl;
  
  // 2b
  rsty(y, leny);
  cout << "2b. Convolving f1*f2" << endl;
  p2 << "2b. Convolving f1*f2" << endl;
  leny = conv(f1, LEN1, f2, LEN2, y);
  ptar(y, leny, p2);
  cout << endl;
  p2 << endl;

  // 2c
  rsty(y, leny);
  cout << "2c. Convolving f1*f3" << endl;
  p2 << "2c. Convolving f1*f3" << endl;
  leny = conv(f1, LEN1, f3, LEN3, y);
  ptar(y, leny, p2);
  cout << endl;
  p2 << endl;

  // 2d
  rsty(y, leny);
  cout << "2d. Convolving f2*f3" << endl;
  p2 << "2d. Convolving f2*f3" << endl;
  leny = conv(f2, LEN2, f3, LEN3, y);
  ptar(y, leny, p2);
  cout << endl;
  p2 << endl;

  // 2e
  rsty(y, leny);
  cout << "2e. Convolving f1*f4" << endl;
  p2 << "2e. Convolving f1*f4" << endl;
  leny = conv(f1, LEN1, f4, LEN4, y);
  ptar(y, leny, p2);
  cout << endl;
  p2 << endl;

  cout << "Problem 2 Complete\n" << endl;
  return 0;
}
