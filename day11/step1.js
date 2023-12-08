//. p 116 자료형 변환

//1. 문자열 입력
const input = prompt('message', "_default");
// 코드 실행순서 
// 1. prompt('message', "_default");        : [실행]클라이언트에게 입력받는 알람함수.
// 2. prompt() 결과/반환/ 리턴된 값          : [실행 결과]
// 3. const input= 리턴의 갑                 :[실행 결과 저장]
alert(input);

//2. 불 입력    [confirm()] : 확인/ 취소 를 반환하는 알람함수
const input2 = confirm('수락하시겠습니까?');
alert(input2);

//3. 숫자 자료형우로 변환하기 [Number(): 문자열 자료형을 숫자 자료형으로 변환함수]
console.log(Number("273"));
console.log(Number("a"));   //NaN => not a number // 숫자로 표현할 수 없어
console.log(Number(true));  // true=1, false= 0

//4. 숫자 연산을 사용해 자료형 변환하기 [*단 숫자+"문자열": 연결연산자 조심]
console.log("52" - 3);       //49        결과의 자료형이 숫자로 변환
console.log(true - 1);        //0
console.log(true + 1);        //2

//5.문자열 자료형으로 변환하는 [String(): 문자열로 변환 함수.]
console.log(String(52.273)); // 52.273-> "52.273"
console.log(true);           // true -> "true"

console.log(52.273 + "");      // 52.273 -> "52.273" [연결 연산자 이용]
console.log(true + "");        // true -> "true"

//6. 불 자료형으로 변환하기 [Boolean(): 불 자료형으로 변환 함수]
console.log(Boolean(0));    //false
console.log(Boolean(NaN));  //false
console.log(Boolean(""));   //false
console.log(Boolean(null)); //false
let 변수;
console.log(Boolean(null));  //false



//7. 논리 부정 연산자를 사용해 자료형 변환하기
console.log(!273);          // 0-> false, 1-> true, 273->true, !273 -> false
console.log(!!273);         //
console.log(!!0);           // 0:false-> true -> false

const inch = prompt("inch단위의 숫자를 입력해주세요.");
const cm = inch * 2.54;

alert(`${inch}inch는${cm}cm입니다.`);

// 앞으로의 방향
function 변환기능코드가지고있는상자() {
    const 인치 = document.querySelector('input');
    console.log(인치);
    console.log(인치.value);

    document.querySelector('h3').innerHTML = `${인치.value * 2.54}cm`
};
//function 함수명 (매개변수){구현할 기능코드}
//  변수 = let, 상수=const, 함수=function 선언 약속/규칙/문법

// p.126 
// 3.
const Cm = prompt("cm 단위의 숫자를 입력해주세요")
const Inch = cm * 0.393791;
console.log(`${Cm}cm는 ${Inch}inch 입니다.`)

// 4. 

const radius = prompt("원의 반지름을 입력해주세요.")
const 넓이 = radius ^ 2 * 3.14;
const 둘레 = radius * 2 * 3.14;
console.log(`원의 반지름: ${radius} 원의 넓이: ${넓이} 원의 둘레: ${둘레}`)

//5번문제
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러 * 1207;

console.log(`달러 : ${달러} -> 원화 : ${원화}`)




/* 
-각 생활에서 사용되는 기계/ 프로그램들 예시 만들기 [예시6번]
    -키오스크, 엘리베이터, 자율주행 자동차
    1. 저장/변수        5개: 
    2. 기능/함수        5개:
    3. 경우의수/논리    5개:

    4. 시각화? 그림
*/