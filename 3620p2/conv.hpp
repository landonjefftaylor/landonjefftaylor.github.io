#ifndef CONV_HPP
#define CONV_HPP

#include <iostream>
#include <fstream>

using namespace std;

void rsty(double *y, int leny);
int conv(double *f1, int len1, double *f2, int len2, double *y);
void ptar(double *y, int leny, ofstream& p);

#endif