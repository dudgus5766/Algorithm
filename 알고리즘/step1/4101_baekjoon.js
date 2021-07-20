/*
문제 : 두 양의 정수가 주어졌을 때, 첫 번째 수가 두 번째 수보다 큰지 구하는 프로그램을 작성하시오.

입력 : 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 두 정수가 주어진다. 두 수는 백만보다 작거나 같은 양의 정수이다. 입력의 마지막 줄에는 0이 두 개 주어진다.

출력 : 각 테스트 케이스마다, 첫 번째 수가 두 번째 수보다 크면 Yes를, 아니면 No를 한 줄에 하나씩 출력한다.
*/

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let sum = Number(input);

// if(sum[0] < sum[1]){
//     console.log('No')    
// }else if(sum[0] > sum[1]){
//     console.log('Yes');
// }else{
//     console.log('');
// };

// input을 split으로 재배열시키는 것을 하지 않아 오류가 일어났다. 그리고 while문으로 반복을 시켜야 한다.


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i=0;

while(true){
    let num1 = Number(input[i].split(' ')[0]);
    let num2 = Number(input[i].split(' ')[1]);
    // 여기서 배열의 0번, 1번 인덱스를 가져온다.
    i++;
    if(num1 === 0 && num2 === 0){
        break;
        // [0, 0]이 나올 경우 break로 멈추게 된다.
    } else if(num1 > num2){
       console.log('Yes');
    } else{
       console.log('No');
    }
}