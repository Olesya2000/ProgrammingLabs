// ConsoleApplication2.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>
#include <CMATH>
using namespace std;

int main()
{
	int n;
	cin >> n;
	int MAS[10000];
	MAS[0] = 1;
	if (n == 0)
		cout << "1" << endl;
	else {
		int k = 1;//попередный розгл ел
		int i = 1;//к-сть знайдених непростих чисел
		while (i <= n)
		{
			k++;
			bool flag = true;//просте число
			int j = 2;//дільник
			while ((j <= sqrt(k)) && (flag == true))
			{
				if ((k % j) == 0)
					flag = false;//число непросте
				j++;
			}
			if (flag == false)
			{
				int x = k;//копія k
				while ((x > 0) && (flag == false))
				{
					int ost = x % 10;//остання цифра
					if ((ost == 2) || (ost == 3) || (ost == 5) || (ost == 7))//ост ц проста
						flag = true;
					x = x / 10;
				}
			}
			if (flag == false)
			{
				MAS[i] = k;
				i++;
			}
		}
		cout << MAS[i-1] << endl;
	}
	system("pause");
    return 0;
}

