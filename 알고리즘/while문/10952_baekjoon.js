/*
문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
입력 : 입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
출력 : 각 테스트 케이스마다 A+B를 출력한다.
*/

//답안
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
/*
'\n'으로 split하는 경우, 결과 값은 ['1 1','2 3'...'0 0','']이 된다.
!!마지막 ''과 '0 0'을 지우기 위해 (input.length -2)를 하는 것! 
*/

for (let i = 0; i < input.length -2; i++){
/*
만약 input이 총 6개라면 input.length-2의 값은 4가 된다.
그렇기 때문에 마지막 {input[5] = '0 0'} 이 for문에서 막히게 된다.
*/

    let sum = input[i].split(' ');
    console.log(Number(sum[0]) + Number(sum[1]));
}