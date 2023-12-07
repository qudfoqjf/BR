
// p. 109~110 증감연산자
    // - 복합대입연산자 간략하게 사용할려고.
let value1=10;
value1 = value1 + 1;        // 1. 변수를 호출하고 연산후 결과를 변수에 대입
    console.log(value1);    // 1증가
    //vs        1번과 2번 차이점 : 없다.       

value1 += 1;                // 2. 1번을 간략하게 하기 위해
    console.log(value1);    // 1증가
    //vs        2번과 3번 차이점 : 없다.      [증감연산자는 1씩 증가/감소만 가능]           

value1++;          // 3. 2번을 간략하게 하기 위해
    console.log(value1);    // 1증가
    //vs                   

++value1;          // 4. 2번을 간력하게 하기 위해
    console.log(value1);    // 1증가

    //p.110
let number1 = 10; number1++; console.log(number1); // 후위 = 11
let number2 = 10; ++number2; console.log(number2); // 전위 = 11
    // 차이점
let number3 = 10; console.log(number3++);            // 후위 =10    출력후 증가
    console.log(number3)                             //      =11
let number4 = 10; console.log(++number4);            // 전위 =11    출력전 증가

    // 차이점2
let result1 = number4++ + 10; console.log(result1);     // 21   대입 후 number4 증가O
    console.log(result1);                               // 21 result1 증가 X
    console.log(number4);                               // 12

    //p.113
let string1;
let string2=0;
let string3='';
let string4=' ';

/* let num1= (prompt("숫자1(오름차순):"));
let num2= (prompt("숫자2(오름차순):"));
let num3= (prompt("숫자3(오름차순):"));
let high = num1;
high = num1 > num2 ? num1:num2;
high = high >num3 ? high: num3;

let low = num1;
low = num1 > num2 ? num2 : num1;
low = low > num3 ? num3: low;

let middle = num1;
middle = max == num1? num2 : num1 
 */
let temp = num1 > num2 ? num2: num1;  //temp: 작은수 
num2 = num1 > num2 ? num1 : num2;     //num2: 큰수
num1 = temp > num2 ? temp : num2;     //num1:

temp = num1 > num3 ? num3 : num1;
num3 = num1 > num3 ? num1 : num3;
num1 = num1 > num3 ? temp : num1; 
//2. 둘째자리 비교
temp = num2 > num3 ? num3 : num2;
num3 = num2 > num3 ? num2 : num3;
num2 = num2 > num3 ? temp : num2;

temp = 7 > 5 ? 5 : 7;
num2 = 7 > 5 ? 7 : 5;
num1 = 7 > 5 ? temp: 5; 