
var str = "3\n1 16\n3 4\n100 100";
// console.log(str);
processData(str);

function processData(input) {

  let t = Number.parseInt(input.split('\n')[0], 10);
  let result = [];

  for(var i = 1; i <= t; i++)
  {
  	let a =  Number.parseInt(input.split('\n')[i].split(' ')[0]);
  	let b =  Number.parseInt(input.split('\n')[i].split(' ')[1]);
    let r = Math.floor((Math.sqrt(b))) - Math.ceil((Math.sqrt(a)));
    
    if (r < 0) 
      r = 0;
    else
      r++;
  	result.push(r);
  }
  console.log(result.join('\n'));

}
