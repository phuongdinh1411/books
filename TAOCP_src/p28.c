#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int main()
{
	int m, n;
	int a1, b1, a, b, c, d;
	int q, r, t;

	m = 1769;
	n = 551;
/* E1: */
	a1 = b = 1;
	a = b1 = 0;
	c = m;
	d = n;

E2:
	q = c / d;
	r = c % d;
/*  E3: */
	if(r == 0){
		printf("%d * %d %c %d * %d = %d\n", a, m, (b>0) ? '+' : '-',  abs(b), n, d);
		return 0;
	}
/* E4: */
	/* Keep: 
	 *      a'm + b'n = c, am + bn = d 
	 * hold all the time
	 * */
	c = d;
	d = r;
	t = a1;
	a1 = a;
	a = t - q * a;
	t = b1;
	b1 = b;
	b = t - q * b;
	goto E2;	
}

