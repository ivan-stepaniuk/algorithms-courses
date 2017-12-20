function selectionSort(arr) {
  let n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    let temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
}

// test
let arr = [6,3,46,2,5,33,4,6,7,89,1,3,1];
selectionSort(arr);
console.log(arr);