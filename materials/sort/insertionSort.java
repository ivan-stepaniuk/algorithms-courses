public static void insertionSort(int[] a)
	{
		for(int i = 1; i < a.length; ++i)
		{
			// invariant: x[0...i-1] is sorted
			// goal: shift x[i] down to its proper place: x[0...i]
			
			int j = i;
			int t = a[j];

			while(j > 0 && a[j-1] > t)
			{
				a[j] = a[j-1];
				--j;
			}
			
			a[j] = t;
		}
	}