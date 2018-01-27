function processData(input) {

  let n = Number.parseInt(input.split('\n')[0], 10);
  let k = [];
  let maxK = 1;
  let positionsOnses = [1, 2, 4];
  let result = [];
``


  for (var i = 1; i < n; i++) {
    let el = +input.split('\n')[i];
    // console.log(el)
    k.push(el);
    if (el > maxK) maxK = el;
  }
  
    let j = 3;
    while (positionsOnses[positionsOnses.length - 1] < maxK) {
      positionsOnses[j] = positionsOnses[j - 1] * 2 - positionsOnses[j - 2] + 1;
      j++;
    }
  

  // console.log(positionsOnses.indexOf(6));
  for (var i = 0; i < n; i++) {
    // console.log(k[i])
    if (positionsOnses.indexOf(k[i]) == -1)
      result.push(0);
    else
      result.push(1);
  }
  // console.log(positionsOnses);
  console.log(result);
  // console.log(j);
  // console.log(maxK);
}

processData("4\n3\n2e10\n7\n6");