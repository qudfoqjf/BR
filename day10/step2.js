 //p.102: 상수와 변수

 // 1. 상수만들기
    // 1. const     키워드 작성         상수인지 변수인지 식별                  남 vs 야
    // 2. 상수명    이름[식별자]         상수가 여러 개 있으므로 그중에서 구별    남자중에서도 구별
    // 3. =         대입연산자[값을 변수에 넣는 역할]           오른쪽 값을 왼쪽에 대입
    // 4. 자료      저장할 값


 const pi = 3.141592;

 //2. 상수 호출하는 방법 [상수 이름 작성]
 console.log(pi);   //상수 출력
 //console.log(김병래);    // 김병래 is not defined

 //3. 상수의 값을 변경하는 방법 [호출해서 다시 대입] !!! 키워드 x
 //pi = 3.97; // step2.js:17 Uncaught TypeError: Assignment to constant variable.
 
 const r =10;

 //4. 상수의 연산
 console.log (2* pi * r); //곱하기가 먼저인지 상수값 호출이 먼저인지?
 //pi상수 안에 있는 값을 꺼내기 우선 = 상수 호출

 //5. 동일한 상수명 사용
 //const pi = 3.97; // Uncaught SyntaxError: Identifier 'pi' has already been declared 
 
 //6. 상수의 값 대입을 안했을때 [상수 만들때[처음에] 값을 넣는 과정 = 초기화, 초기화 없으면 오류발생]
 //const pi2; //Uncaught SyntaxError: Missing initializer in const declaration

 //p.105 변수 만들기

 //1. 변수 만들기 [4단계]
    //1. let
    //2. 변수명
    //3.=
    //4.값
let pi3 = 3.141592;
//2. 변수 호출
console.log(pi3);
console.log("pi3:" +pi3); // 연결 연산자: "문자열" + 변수의 값(숫자) => 문자열
console.log(`pi3:${pi3}`); // 템플릿 문자열 `문~~~~자~~~~${변수/상수/자료}~~~~~열`

//3. 변수의 값 변경 [값 변경시에도 변수 호출후 다시 대입]
pi3= 3.15; console.log(pi3);

//4. 변수의 연산
let r3 = 10;
console.log(2*pi3 *r3);

//var 와 let 키워드 차이
let value1= 10;
//let value2 = 10;  //불가능, 초기화 1번 [동일한 변수면으로 선언시 선언불가.]

var value2= 10;
var value2= 10; //가능 [동일한 변수명으로 선언시 동일한 이름이 있을 경우 덮어쓴다.]

//p.108 복합 대입 연산자
let value =10;
value += 10;
        // vs
value = value +10;  // 문장 
    // = 기준으로 오른쪽 연산
        //value + 10 중에서 변수 호출 호출
    // 1. 10
    // 2. 10 + 10   //호출 후 연산
    // 3. 20        // 연산 결과
    // 4. =         //연산 후 대입
    // 5. value=20 // 변수 수정 

console.log(value);

// ***** JS에서 HTML(문자열 자료형) 을 작성할 때.
let list=''; // 'list'변수에 빈문자열을 넣은 상태로 선언

list += '<ul>';
list += '   <li>Hello</li>';
list += '   <li>JavaScript</li>';
list += '</ul>';
document.write(list);

//예제1: 2개의 숫자를 입력받아 더한 값을 html에 <h3>안에 출력
        //입력받은 예) 3, 5
        //HTML 출력 예) 예제1 결과:8
        let first= Number(prompt());
        let second= Number(prompt());
        document.write(`<h3>${first + second}</h3>`);


//예제2: 2개의 숫자르 입력받아 더 큰수를 html에 <h3>안에 출력
        let fir= Number(prompt());
        let sec= Number(prompt());
        document.write(`<h3>${(fir>sec)?fir:sec}</h3>`);
        

        //단항연산자[피연산자 1개], 이항연산자[피연산자 2개], 삼항연산자[피연산자 3개]
        //삼항연산자 : 조건 ? 참 : 거짓
        //  