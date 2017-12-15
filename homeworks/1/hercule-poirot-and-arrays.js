
var str = "2\n5\n0 0 0 0 1\n5\n0 0 0 0 0";
// console.log(str);
processData(str);

function processData(input) {

  let t = Number.parseInt(input.split('\n')[0], 10);
  let result = [];

  for(var i = 1; i <= t*2; i+=2)
  {

  	let n =  Number.parseInt(input.split('\n')[i].split(' ')[0]);
    let a =  input.split('\n')[i+1].split(' ');
    // console.log(n);
    // console.log(A);
    let sum = 0;
    for(var j = 0; j < n; j++)
      sum += +a[j];

    let sumL = +a[0];
    let sumR = sum - sumL;
    let res = 'NO';

    for(var j = 1; j <= n; j++) {
      console.log(`${sumL}-${sumR}`);
      if(sumL == sumR - +a[j]) { 
        res = 'YES'; 
        break; 
      }
      else {
        sumL += +a[j];
        sumR -= +a[j];
      }

    }
    result.push(res);
    console.log('-----------');
   }
  console.log(result.join('\n'));

}
