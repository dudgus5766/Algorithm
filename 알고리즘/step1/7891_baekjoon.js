/*
문제 : Given two integers, calculate and output their sum.

입력 : The input contains several test cases. The first line contains and integer t (t ≤ 100) denoting the number of test cases. Then t tests follow, each of them consisiting of two space separated integers x and y (−109 ≤ x, y ≤ 109).

출력 : For each test case output output the sum of the corresponding integers.
*/

// 답안

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let inputs = '4\n-100 100\n2 3\n0 110101\n-1000000 1\n'
// let input = inputs.trim().split('\n');

let result = "";
for(let i = 1; i < input.length; i++){
    let num = input[i].split(' ').map(Number);
    result = num[0] + num[1];
    // console.log(num);
    console.log(result);
}
