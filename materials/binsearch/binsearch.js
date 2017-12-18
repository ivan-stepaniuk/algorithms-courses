function binSearch(a, x) {
  let n = a.length;
  let bad = -1;
  let good = n;

  while (bad + 1 < good) {
    let m = (bad + good) / 2;
    if(a[m] >=x)
      good = m;
    else
      bad = m;
  }
  
  if(good < n && a[good] == x)
    return good;

  return -1;

}


// test
let a = [2, 3, 5, 5, 5, 6, 10];
console.log(binSearch(a, 6));