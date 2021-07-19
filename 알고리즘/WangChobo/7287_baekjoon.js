/*
문제 : 자신이 백준 온라인 저지(BOJ)에서 맞은 문제의 수와 아이디를 그대로 출력하는 프로그램을 작성하시오.
출력 : 첫 줄에 자신이 맞은 문제의 수, 둘째 줄에 아이디를 출력한다.
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log('17\n');
console.log('rhfovk');

// 처음에 웹 내에서 정보를 가져와서 출력하는 어려운 문제인 줄 알았는데 마이페이지에 있는 문제 갯수와 아이디만 적으면 되는 간단한 문제였다.