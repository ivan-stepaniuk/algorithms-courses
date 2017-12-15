
var str = "2\n5\n1 4 3 2 5\n5\n3 4 5 6 7 8 9 10 11 12 13 14 1 2";
// console.log(str);
processData(str);

function processData(input) {

    let t = Number.parseInt(input.split('\n')[0], 10);
    let result = [];

    for(var i = 1; i <= t*2; i+=2)
    {

        let n =  Number.parseInt(input.split('\n')[i].split(' ')[0]);
        let a =  input.split('\n')[i+1].split(' ');

        let sum = 0;
        let res = 0;
        
        for (var j = 0; j < a.length; j++) {
            let steps = Math.abs(a[j] - (j+1));
            if (steps > 2) { res = -1; break;}
            
            sum += steps;
        }
        if (res == -1) {
            result.push('Too chaotic');
        }
        else
        result.push(sum/2);
    }
    console.log(result.join('\n'));
}

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// 2 1 5 3 4
// 1 1 2 1 1 = 3


// 2 5 1 3 4
// 2 1 5 3 4
// 1 2 5 3 4

12345
231