/*
문제 : 영어에서는 어떤 글자가 다른 글자보다 많이 쓰인다. 예를 들어, 긴 글에서 약 12.31% 글자는 e이다.
어떤 글이 주어졌을 때, 가장 많이 나온 글자를 출력하는 프로그램을 작성하시오.

입력 : 첫째 줄부터 글의 문장이 주어진다. 글은 최대 5000글자로 구성되어 있고, 공백, 알파벳 소문자, 엔터로만 이루어져 있다. 그리고 적어도 하나의 알파벳이 있다.

출력 : 첫째 줄에 가장 많이 나온 문자를 출력한다. 여러 개일 경우에는 알파벳 순으로 앞서는 것부터 모두 공백없이 출력한다.
*/

//답안
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let inputs = 'baekjoon \n online \n judge';
let firstSentence = inputs.replace(/(\s*)/g,'').split("");

//replace를 통해 모든 공백을 없애주고 split으로 배열으로 만듦.

console.log(firstSentence);

let countNumber = {};
let num = 0;
let result = [];

for (let i of firstSentence){
    if (!countNumber[i]){
        countNumber[i] = 1;
    }
    else {
        countNumber[i]++
    }
}

//만약 firstSentence 배열에서 겹치지 않는 문자는 = 1 을 겹치는 문자는 ++을 통해 개수를 셈.


console.log(countNumber);

for (let j in countNumber){
    if (countNumber[j] > num){
        num = countNumber[j];
    }
}

//0으로 할당된 num보다 크다면 (당연히 처음은 다 크겠지만) for문 안에서 돌다보면 가장 큰 수가 num에 할당됨. 

console.log(num);

for (let k in countNumber){
    if(countNumber[k] === num){
       result = result.concat(k);
    }
}

//result 라는 빈 배열에 num과 같은 수를 가진 알파벳을 concat으로 넣음.

console.log(result.sort().join(''));
//sort() 함수를 통해 알파벳을 순서대로 정렬하고 join()으로 문자열을 만듦.