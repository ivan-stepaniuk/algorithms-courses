
function processData(input) {
  let s = input.split('\n')[0];
  let t = input.split('\n')[1];
  let k = input.split('\n')[2];
  let startCount = s.length;
  if((s.length + t.length) <= k)
    return 'Yes';

  for(var i = 0; i < s.length; i++)
  {
    if (s[i] != t[i]) { startCount = i; break;}
  }
  let del = s.length - startCount;
  let append = t.length - startCount;

  if ((del + append <= k) && (append + del - k) % 2 == 0 ) 
    return ('Yes');
  else
    return ('No');
}



function comparing(a,b) {
  if (a===b) return true;
  return false;
}


console.log(comparing(processData('hackerhappy\nhackerrank\n9'),'Yes'));
console.log(comparing(processData('aba\naba\n7'),'Yes'));
console.log(comparing(processData('happynewyear\nhappyeaster\n13'),'Yes'));
console.log(comparing(processData('abcd\nabdc\n3'),'No'));
console.log(comparing(processData('a333\naba333\n3'),'No'));
console.log(comparing(processData('ab\naba333\n10'),'Yes'));
console.log(comparing(processData('ab3\naba333\n11'),'Yes'));
// //
console.log(comparing(processData('aba33\naba333\n3'),'Yes'));
console.log(comparing(processData('aba\naba\n3'), 'No'));
//
console.log(comparing(processData('hackerhappy\nhackerrank\n9'),'Yes'));