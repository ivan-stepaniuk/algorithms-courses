// # Returns index of x in arr if present, else -1
function binSearch(arr, l, r, x) {
  
  // Check base case
  if (r >= l) {
    let mid = Math.floor(l + (r - l)/2);

    // If element is present at middle itself
    if (arr[mid] == x) {
      return mid;
    }
    // If element is smaller than mid, then it can only
    // be present in subarray
    else 
      if(arr[mid] > x) {
        return binSearch(arr, l, mid-1, x);
      }
    // Else the element can only be present in right subarray
    else 
      return binSearch(arr, mid+1, r, x);
  }
  else
    // Element is not present in the array
    return -1;
}


// test
let a = [2, 3, 5, 5, 5, 6, 10];
console.log(binSearch(a, 0, a.length, 10));