/*
문제 : 두 양의 정수가 주어졌을 때, 두 수 사이에 있는 정수를 모두 출력하는 프로그램을 작성하시오.

입력 : 두 정수 A와 B가 주어진다.

출력 : 첫째 줄에 두 수 사이에 있는 수의 개수를 출력한다.

둘째 줄에는 두 수 사이에 있는 수를 오름차순으로 출력한다.
*/


// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let inputs = '8 14';
let input = inputs.trim().split(' ');

let A = input[0]; // 8
let B = input[1]; // 14
console.log(A);
if (A > B) {
    let temp = A;
    A = B;
    B = temp;
}
console.log(B);

if (A === B || A + 1 === B) {
    console.log(0);
}

let result = "";
for (let i = 1; i < B - A; i++) {
    result = A + i;
    console.log(result);
}

// 너무 어렵다..조금 더 시간을 갖고 풀어보기로....ㅠㅠ
// A가 B보다 크면 어떻게 해야할까..
