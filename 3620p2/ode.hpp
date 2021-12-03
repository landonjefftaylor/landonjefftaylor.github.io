#ifndef ODE_HPP
#define ODE_HPP

void ode(void);
void mat_vect_mult(double m[][3], double *v, double *prod);
void mat_const_times(double t, double a[][3], double m[][3]);
void mat_add(double a[][3], double b[][3], double c[][3]);

#endif