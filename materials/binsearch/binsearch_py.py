def first_one(a):
    n = len(a)
    # 0                 n-1
    # ? ? ? ? ? ? ? ? ? ?
    # ...
    # 0 0 0 0 ? ? ? ? 1 1
    #       ^         ^
    #       bad       good
    bad = -1
    good = n
    # bad + 1 == good
    while bad + 1 < good:
        m = (bad + good) / 2
        # bad < m < good
        if a[m] == 1:
            good = m
        else:
            bad = m
    # 0 0 0 0 0 0 0 1 1 1
    #             ^ ^
    #             b good
    return good # n, if all zeroes

# N = 5
# for i in xrange(N + 1):
#     a = [0] * i + [1] * (N - i)
#     print i, a, first_one(a)

def binsearch(a, x):
    n = len(a)
    bad = -1
    good = n
    while bad + 1 < good:
        m = (bad + good) / 2
        # bad < m < good
        if a[m] >= x:
            good = m
        else:
            bad = m
    # now a[good] >= x
    return good < n and a[good] == x, good

a = [2, 3, 5, 5, 5, 6, 10]
a.sort()
print a
for i in xrange(1, 12):  # [1, 12) == [1, 11]
# for(int i = 1; i < 12; ++i) { ... }
    print i, binsearch(a, i)
