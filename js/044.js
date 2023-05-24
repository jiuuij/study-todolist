# 문제44 : 각 자리수의 합

**사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

**예를들어**
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.
입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24

>>나의 풀이
//하나씩 하라면 split을 써야겠다라고 생각했다..! 그러다가 아래의 블로그를 보고,, toString이 낫다는것을 알았다..!
//https://developer-sj.tistory.com/18
// const num = '18234'.split("");
// const sum = '';
// for(let i=0, i>=i.length, i++){
//     num+= sum(i);
// }
// console.log(sum)


>>답안
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
  sum += (n % 10);
  n = Math.floor(n/10);
}

console.log(sum);