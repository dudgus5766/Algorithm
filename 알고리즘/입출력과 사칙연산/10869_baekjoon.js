/*
문제 : 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

입력 : 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력 : 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
*/

//답안
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
//node.js로 변환

const num1 = Number(input[0]);
const num2 = Number(input[1]);
//Number 타입으로 변환

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2)); //math,floor() : 소수점 이하를 버림한다.
console.log(num1 % num2);