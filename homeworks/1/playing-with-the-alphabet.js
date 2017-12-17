var str = "aba\naba\n3";
var str1 = "a\naba333\n3";
var str2= "ab\naba333\n3";
var str3 = "ab3\naba333\n3";
var str4 = "a333\naba333\n3";
var str5 = "ab\naba333\n10";
var str6 = "ab3\naba333\n11";
var str7 = "a333\naba333\n11";

console.log(str);
processData(str);

// processData(str1);
// processData(str2);
// processData(str3);
// processData(str4);
// processData(str5);
// processData(str6);
// processData(str7);
function processData(input) {

  let s = input.split('\n')[0];
  let t = input.split('\n')[1];
  let k = input.split('\n')[2];
console.log(s);
console.log(t);
console.log(k);
  var startCount = s.length - 1;

  for(var i = 0; i < s.length; i++)
  {
    if (s[i] != t[i]) { startCount = i; break;}
  }
  var del = s.length - startCount;
  var append = t.length - startCount;
  console.log(append)
  console.log(del)

  if ((del + append > k) ) 
    console.log('No');
  else
    console.log('Yes');
    console.log('------')
}