# (l, r]
int binsearch_left(int[] a, int key):
    int l = -1                     
    int r = len(a) - 1
    while r - l > 1:
		print((x not in a) or (x in a[l+1:r+1]))
        m = (l + r) // 2            
        if a[m] >= key:
            r = m
        else:
            l = m                 
    if a[r] == x: return r
	return -1

# [l, r)
int binsearch_right(int[] a, int key):
    int l = 0                     
    int r = len(a)
    while r - l > 1:
		print((x not in a) or (x in a[l:r]))
        m = (l + r) // 2            
        if a[m] > x:
            r = m
        else:
            l = m           
    if a[l] == x: return l
	return -1