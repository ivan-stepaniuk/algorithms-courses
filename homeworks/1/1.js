
// var str = "2\n5\n1 4 3 2 5\n5\n3 4 5 6 7 8 9 10 11 12 13 14 1 2";
// // console.log(str);
// processData(str);

function processData(input) {
  
      let t = Number.parseInt(input.split('\n')[0], 10);
      let result = [];
  
      for(var i = 1; i <= t*2; i+=2)
      {
  
          let n =  Number.parseInt(input.split('\n')[i].split(' ')[0]);
  
          let a =  input.split('\n')[i+1].split(' ');
          let aCounts = [];
          let k = 0;
  
          for(var j = 0; j < n; j++){
             aCounts[j] = 0;
             a[j] = Number.parseInt(a[j]);
          }
          // console.log(a);
        for (var q = n-1; q > 0; q--) {
          for (var j = n-1; j > 0; j--) {
            if( a[j] < a[j-1]){
              aCounts[j-1]++;
  
              let tmp = a[j];
              a[j] = [j-1];
              a[j-1] = tmp;
              
              tmp = aCounts[j];
              aCounts[j] = aCounts[j-1];
              aCounts[j-1] = tmp;
  
              k++;
              if (aCounts[j] > 2){ 
                // console.log('Too chaotic')
                return ('Too chaotic')
              }
            }
            // console.log(aCounts);
            // console.log(a);
            // console.log(k);
            // console.log('---');
          }
      }
      result.push(k);
    }
      // console.log(result.join('\n'));
      return (result.join(' '));
  }
  
  function comparing(a,b) {
    if (a===b) return true;
    return false;
  }
  
  
  console.log(comparing(processData('1\n5\n2 1 5 3 4'),'3'));
  console.log(comparing(processData('1\n5\n2 5 1 3 4'),'Too chaotic'));
  console.log(comparing(processData('1\n10\n1 2 5 6 4 7 9 8 3 10'),'9'));
  console.log(comparing(processData('1\n7\n1 2 4 6 5 7 3'),'5'));
  console.log(comparing(processData('1\n14\n3 4 5 6 7 8 9 10 11 12 13 14 1 2'),'24'));
  console.log(comparing(processData('1\n5\n1, 4, 3, 2, 5'),'3'));