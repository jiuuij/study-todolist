문제14 : 3의 배수 인가요?
영희는 친구와 게임을 하고 있습니다. 
서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
입력으로 랜덤한 숫자 n이 주어집니다.
만약 그 수가 **3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력**해 주세요.

입출력
입력 : 3
출력 : 짝

입력 : 2
출력 : 2

>>나의 풀이
let num = prompt("숫자를 말하세요");
if (num % 3 == 0) {
    console.log('짝')
} else {
    console.log(num);
}

>>답안
const n = prompt(숫자를 입력하세요.);
if (n % 3 == 0 && n !=0) { // 나머지 연산 %는 n을 3으로 나누었을때 몫이 아닌 나머지 값을 반환합니다. 0은 3의 배수가 아니니까 n !=0 해주기!
    console.log("짝")
} else {
    console.log(n);
}