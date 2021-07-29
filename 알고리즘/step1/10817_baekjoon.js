/*
문제 : 세 정수 A, B, C가 주어진다. 이때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 

입력 : 첫째 줄에 세 정수 A, B, C가 공백으로 구분되어 주어진다. (1 ≤ A, B, C ≤ 100)

출력 : 두 번째로 큰 정수를 출력한다.
*/

// 답안

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(x => +x);
// let inputs = "40 20 10";
// let input = inputs.trim().split(" ").map(x => +x);

console.log(input.sort((a,b)=>a-b)[1]);
// sort 함수를 통해 오름차순으로 값을 바꾼 뒤 인덱스 1번 값을 출력.
