function binserarch_left(a, x) {
  let l = -1;
  let r = a.length - 1;
  console.log(r);

  while (r - l > 1) {
    m = Math.floor((l + r) / 2);
    if (a[m] >= x) {
      r = m;
    } else {
      l = m;
    }
  }
  if (a[r] == x) {
    return r;
  }
  return -1;
}

function binserarch_right(a, x) {
  let l = 0;
  let r = a.length;
  while (r - l > 1) {
    m = Math.floor((l + r) / 2);
    if (a[m] > x) {
      r = m;
    } else {
      l = m;
    }
  }
  if (a[l] == x) {
    return l;
  }
  return -1;
}

// test
// let arr = [0,1,2,3,4,5,6,7,8,5,343,4,56,6,7,4,6,7,8,1];
// arr = arr.sort();
// console.log(arr);
// console.log(binserarch_left(arr, 7));
// console.log(binserarch_right(arr, 7));