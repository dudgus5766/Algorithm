/*
문제 : 두 양의 정수가 주어졌을 때, 두 수 사이에 있는 정수를 모두 출력하는 프로그램을 작성하시오.

입력 : 두 정수 A와 B가 주어진다.

출력 : 첫째 줄에 두 수 사이에 있는 수의 개수를 출력한다.

둘째 줄에는 두 수 사이에 있는 수를 오름차순으로 출력한다.
*/


// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(x => +x);

let inputs = '8 14';
let input = inputs.trim().split(' ').map(x => +x);

let A = input[0]; // 8
let B = input[1]; // 14
let arr = [];
// 빈 배열 생성

if(A < B){
    console.log(B - A -1);
    for(let i = A + 1; i < B; i++){
        arr.push(i);
        // 배열에 하나씩 입력
    }
}else if(B < A){
    console.log(A - B -1);
    for(let i = B + 1; i < A; i++){
        arr.push(i);
    }
}else{
    console.log(0);
}

console.log(arr.join(' '));
// 배열을 ,로 나눠서 숫자로 나타냄

// 풀지 못했던 문제 클리어!🥳
