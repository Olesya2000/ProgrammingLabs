class Kata
{
public:
    int countInversions(std::vector<int> array)
    {
      bool flag = true;
      int j = 0;
	int passnum = array.size() - 1;
	while (passnum > 0 && flag) {
		flag = false;
		for (int i = 0; i < passnum; ++i)
		{
			if (array[i] > array[i + 1]) {
				flag = true;
        j++;
				int temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				passnum = passnum--;
			}
		}
	}
        return j;
    }
};