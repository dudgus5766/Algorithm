/*
문제 : 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
입력 : 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
출력 : 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
*/

let n = Number(input);
result = '';

for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
    result += '*';
    }
    result += '\n'; // 이중 for문 안에서 '\n'을 통해 줄바꿈을 해준다.
}

console.log(result);