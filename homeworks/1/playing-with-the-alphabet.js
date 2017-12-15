// hackerhappy
// hackerrank
// 9
// -------
// YES

// aba
// aba
// 7
// ------
// YES







var str = "aba333\naba333\n6";
console.log(str);
processData(str);

function processData(input) {

  let s = input.split('\n')[0];
  let t = input.split('\n')[1];
  let k = input.split('\n')[2];

  var startCount = s.length -1;

  for(var i = 0; i < s.length; i++)
  {
    if (s[i] != t[i]) { startCount = i; break;}
  }
  var del = s.length - startCount;
  var append = t.length - startCount;
  console.log(append)
  console.log(del)

  if ((del + append > k) || ( (s.length > k ) &&((k-del-append) % 2 != 0)) ) 
    console.log('No');
  else
    console.log('Yes');
}