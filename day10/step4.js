
/* 연산자 연습문제 */
/* 문제 1 */
let kor= Number(prompt("국어"));
let eng= Number(prompt("영어"));
let mat= Number(prompt("수학"));
console.log(`총점:${kor+eng+mat}`);
console.log(`평균:${(kor+eng+mat)/3}`);
/* 문제2 */
let rad= Number(prompt("반지름"));
console.log(`원의 넓이:${rad*rad*3.14}`)
/* 문제3 */
let num1= Number(prompt("첫번째 숫자"));
let num2= Number(prompt("두번쨰 숫자"));
console.log(`비율:${(num1/num2)*100}`);
/* 문제4 */
let num3= Number(prompt('홀짝:'));
console.log(`${(num3%2)? "홀수":"짝수"}`);
/* 문제5 */
let num4= Number(prompt('7의배수:'));
console.log(`${(num4%7)? "false":"true"}`);
/* 문제6 */
let num5= Number(prompt('총액:'));
let 십만원 = parseInt(num5/100000)
let 만원 = parseInt((num5-십만원*100000)/10000)
let 천원 = parseInt((num5-((십만원*100000)+(만원*10000)))/1000)
console.log(`십만원:${십만원}장 만원:${만원}장 천원:${천원}장`);
/* 문제7 */
let id= (prompt("id:"));
let pwd= (prompt('pwd:'));
console.log(`${(((id=="admin")?1:0) && (pwd=="1234")?1:0)? "true":"false"}`);
/* 문제8 */
let num6= Number(prompt('7의배수and홀수:'));
console.log(`${((num6&7)?0:1)&&((num6&2)?1:0)? "true":"false"}`);
/* 문제9 */
let num7= (prompt("숫자1:"));
let num8= (prompt("숫자2:"));
console.log(`${(num7>num8)? num7:num8}`);
/* 문제10 */
let num9= (prompt("숫자1:"));
let num10= (prompt("숫자2:"));
let num11= (prompt("숫자3:"));
let max= num9;
max= num9 > num10 ? num9 : num10;
max= max > num11 ? max : num11;
console.log(`${max}`);
/* 문제11 */
let num12= (prompt("숫자1(오름차순):"));
let num13= (prompt("숫자2(오름차순):"));
let num14= (prompt("숫자3(오름차순):"));

//1.첫째자리 비교
let temp = num12 > num13 ? num13: num12;
num13 = num12 > num13 ? num12 : num13;
num12 = num12 > num13 ? temp : num13;

temp = num12 > num14 ? num14 : num12;
num14 = num12 > num14 ? num12 : num14;
num12 = num12 > num14 ? temp : num12; 
//2. 둘째자리 비교
temp = num13 > num14 ? num14 : num13;
num14 = num13 > num14 ? num13 : num14;
num13 = num13 > num14 ? temp : num13;


/* 문제12 */
let player1 = (prompt("가위:0 바위:1 보:2"));
let player2 = (prompt("가위:0 바위:1 보:2"));
let p1win = ((player1==0) && (player2==2))||((player1==1) && (player2==0)) || (((player1==2) && (player2==1)));
let p2win = ((player1==0) && (player2==1))||((player1==1) && (player2==2)) || (((player1==2) && (player2==0)));
let draw = ((player1==0) && (player2==0))||((player1==1) && (player2==1)) || (((player1==2) && (player2==2)));
console.log(`${(p1win==1)?"p1승리":(p2win==1)?"p2승리":"무승부"}`);

let answer = player1==player2 ? 
                    '무승부' :  player1==(player2+1)%3 ? 
                                '플레이어1 승리' :  '플레이어2 승리';
console.log( answer )
/* 
    문제11: 

    문제12: 가위바위보의 숫자의 배치가 상대보다 숫자가 1크면 이기는 구조인데

*/