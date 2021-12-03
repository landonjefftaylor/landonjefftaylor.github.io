#include <iostream>
#include <fstream>
#include "ode.hpp"

using namespace std;

// multiply matrix m * vector v
void mat_vect_mult(double m[][3], double *v, double *prod) {
  double sum;
  int i, j;
  for (i = 0; i < 3; i++) {
    sum = 0;
    for (j = 0; j < 3; j++) {
      sum += m[i][j] * v[j];
    }
    prod[i] = sum;
  }
}

// m = a * t
void mat_const_times(double t, double a[][3], double m[][3]) {
  int i, j;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      m[i][j] = t * a[i][j];
    }
  }
}

// add 2 matrices, a + b = c
void mat_add(double a[][3], double b[][3], double c[][3]) {
  int i, j;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      c[i][j] = a[i][j] + b[i][j];
    }
  }
}

void print_mat(double a[][3]) {
  cout << "[";
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      cout << a[i][j] << ",";
    }
    cout << endl;
  }
  cout << "]" << endl;
}

//////////////////////////////////////////////////////////

void ode(void) {
  
  ofstream outfile("samples/zero_input.txt");
  
  double I[3][3] = {
    {1.0f, 0.0f, 0.0f},
    {0.0f, 1.0f, 0.0f},
    {0.0f, 0.0f, 1.0f}
  };

  // double A[3][3] = {
  //   { 0.0f,    1.0f,   0.0f},
  //   { 0.0f,    0.0f,   1.0f},
  //   {-3.0f, -38.25f, -72.5f}
  // };

  // trying like Wolfram says to
  double A[3][3] = {
    { 0.0f,    1.0f,   0.0f},
    { 0.0f,    0.0f,   1.0f},
    {-72.5f, -38.25f, -3.0f}
  };

  double x[3] = {-2.0f, 3.0f, -1.7f }; // initial conditions
  
  double deltat = 0.001f; // set delta t to get 10001 steps
  double N = 10.0f;

  double Adeltat[3][3]; //stores Adt
  double ipAdeltat[3][3]; //stores I+Adt

  for (double t = 0.0f; t < N; t += deltat) {
    mat_const_times(deltat, A, Adeltat);
    mat_add(I, Adeltat, ipAdeltat);
    mat_vect_mult(ipAdeltat, x, x);
    outfile << t << "\t" << x[0] << endl;
  }

  outfile.close();
  cout << "Finished ODE" << endl;
}