/*
문제 : n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
입력 : 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
출력 : 1부터 n까지 합을 출력한다.
*/

let n = Number(input);
result=0;
for(i=0; i<=n; i++){
    result += i;
}
//i가 n보다 작거나 같을 때 result값에 i를 계속 더하게 된다.
console.log(result);
