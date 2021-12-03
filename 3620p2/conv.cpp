#include "conv.hpp"

using namespace std;

int conv(double *f1, int len1, double *f2, int len2, double *y) {
  
  int lenc, i, j, f1_start, f2_start, f2_end;

  lenc = len1 + len2 - 1;

  for (i = 0; i < lenc; i++) {

    f2_start = max(0, i-len1+1);
    f2_end = min(i+1, len2);
    f1_start = min(i, len1-1);

    for (j = f2_start; j < f2_end; j++) {
      y[i] += f1[f1_start] * f2[j];
      f1_start--;
    }

  }

  return lenc;

}

void ptar(double *y, int leny, ofstream& p) {
  for (int i = 0; i < leny; i++) {
    p << y[i] << endl;
  }
  p << endl;
}

void rsty(double *y, int leny) {
  for (int i = 0; i < leny; i++) {
    y[i] = 0;
  }
}