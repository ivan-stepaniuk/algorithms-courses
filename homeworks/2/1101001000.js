function processData(input) {

  let n = Number.parseInt(input.split('\n')[0], 10);
  let k = [];
  let maxK = 1;
  let positionsOnses = [1, 2, 4];



  for (var i = 1; i < n; i++) {
    let el = input.split('\n')[i];
    k.push(el);
    if (el > maxK) maxK = el;
  }

  for (var i = 3; i < maxK; i++) {
    positionsOnses[i] = positionsOnses[i - 1] * 2 - positionsOnses[i - 2] + 1;
  }

  console.log(positionsOnses.indexOf(6));
  for (var i = 0; i < n; i++) {
    console.log(k[i])
    // if (positionsOnses.indexOf(k[i]) == -1) 
    // console.log(0);
    // else
    //   console.log(1);
  }
}

processData("4\n3\n14\n7\n6");