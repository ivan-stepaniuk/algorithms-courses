function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {

    let j = i;
    let t = a[j];

    while (j > 0 && a[j - 1] > t) {
      a[j] = a[j - 1];
      j--;
    }
    a[j] = t;
  }
}

// test
// let arr = [1,4,24,3,2,1,6,7,164,4,0,0,0,13];
// insertionSort(arr);
// console.log(arr);