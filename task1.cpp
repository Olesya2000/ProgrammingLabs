// homework3.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <vector>
#include <iostream>
using namespace std;
int nthSmallest(std::vector<std::vector<int>> arr, int n);
int main()
{ 
	int n;
	cin >> n;
	std::vector<std::vector<int>> input = { { 1, 5 }, { 2 }, { 4, 8, 9 } };
	int answer = nthSmallest(input, n);
    cout <<  answer;
	system("pause");
	return 0;
}

int nthSmallest(std::vector<std::vector<int>> arr, int n)
{
	std::vector<int> new1 = {};
	for (int i = 0; i < arr.size(); i++) {
		for (int j = 0; j < arr[i].size(); j++) {
			int item = arr[i][j];
			new1.push_back(item);
		}
	}
	bool flag = true;
	int passnum = new1.size() - 1;
	while (passnum > 0 && flag) {
		flag = false;
		for (int i = 0; i < passnum; ++i)
		{
			if (new1[i] > new1[i + 1]) {
				flag = true;
				int temp = new1[i];
				new1[i] = new1[i + 1];
				new1[i + 1] = temp;
				passnum = passnum--;
			}
		}
	}
	if (new1[n] != 0) { return new1[n-1]; }
	else {
		return 0;
	}
}

