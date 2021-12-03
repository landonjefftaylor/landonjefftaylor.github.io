#include "p3.hpp"
#include "conv.hpp"
#include "ode.hpp"
#include <iostream>
#include <iomanip>

// #include <cmath> // sin()
// #define PI 3.1415926535

using namespace std;

int problem3(void) {
  cout << "Solving Problem 3" << endl;

  // ofstream p3("p3.txt", ios::out);
  // if (!p3.is_open()) {
  //   cout << "FILE OPEN FAILURE" << endl;
  //   return 1;
  // }

  // p3 << "SOLUTIONS FOR PROBLEM 3\n========================================\n" << endl;

  // 3A done on paper and in Matlab
  // 3B done in matlab

  // 3C completed below
  double T = 0.001f;
  double h[10001];
  double f[10001];

  // get h[k]
  cout << fixed;
  cout << setprecision(6);

  ifstream hsamp("samples/3a_samples.txt");
  for (int i = 0; i <= 10001; i++) {
    hsamp >> h[i] >> h[i];
  }
  hsamp.close();

  // get f[k]
  ifstream fsamp("samples/3b_samples.txt");
  for (int i = 0; i <= 10001; i++) {
    fsamp >> f[i] >> f[i];
  }
  fsamp.close();
  
  // convolve f*h to get zero-state solution
  int lenfch;
  double fch[100000]; // f convolved with h

  ofstream zst("samples/zero_state.txt", ios::out);
  cout << "Convolving f*h" << endl;
  lenfch = conv(f, 10001, h, 10001, fch);
  ptar(fch, lenfch, zst);
  zst << endl;

  zst.close();

  // 3D completed below
  cout << "Solving ode" << endl;
  ode();

  // 3E

  cout << "Solving total solution" << endl;
  
  ofstream tsol("samples/total_solution.txt", ios::out);
  ifstream zsti("samples/zero_state.txt");
  ifstream zini("samples/zero_input.txt");

  double temp1;
  double temp2;
  double kt = 0;

  for (int i = 0; i <= 10001; i++) {
    zsti >> temp1 >> temp1;
    zini >> temp2 >> temp2;
    tsol << kt << '\t' << temp1 + temp2 << endl;
    kt += 0.001;
  }

tsol.close();
zsti.close();
zini.close();






  // the below code was made in matlab instead
  // p3 << "3b. Sampled values for inputs are found in p3b.txt" << endl;
  // ofstream p3b("p3b.txt", ios::out);
  // if (!p3b.is_open()) {
  //   cout << "FILE OPEN FAILURE" << endl;
  //   return 1;
  // }

  // for (double t = 0.0f; t <= 10.001f; t += 0.001f) {
  //   p3b << t << '\t' << sin(4 * PI * t) << endl;
  // }

  // p3b << endl;
  // p3b.close();

  // 3C



  cout << "Problem 3 Complete\n" << endl;
  return 0;
}
