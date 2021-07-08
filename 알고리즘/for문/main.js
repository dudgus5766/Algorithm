//첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는다

// 첫째 줄에  N(1<=N<=100)이 주어진다

let num = 4;

for(let i = 0; i <= num; i++){
    result = '';

    for(let j = 0; j <= i; j++){
        result += '*';
    }
console.log(result);
}

// let num = 3;

// for (let i = 0; i < 3; i++) {
//   let star = '';
    
//   for (let j = 0; j >= 0; j--) {
//     star += 0 <= 0 ? '*' : ' ';
//   }

//   console.log(star);

  // '' '' *
  //
//}