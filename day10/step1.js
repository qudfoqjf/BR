
console.log("자바스크립트실행2")

//p.90
console.log() ;      //크롬 f12(개발자도구>console) 출력하는 함수

console.log(5+3*2);
console.log((5+3)*2); // 사칙연산[연산자 우선순위]
console.log((5-3)*2); // -1

console.log(10%2);      //  10에서2를나눈 나머지값0
console.log(10%3);      //  10에서2를나눈 나머지값1
console.log(10%4);      //  10에서2를나눈 나머지값2

console.log(10/2);      //  10에서 2를 나눈 값 5
console.log(10/3);      //  10에서 3을 나눈 값 3.33333333

//목 구하기 [parseInt()] : 정수로 변환해주는 함수 = 소수점 버리기
console.log(parseInt(10/3));    // 3.3333333333333 > 3

// p90.~91 불 자료형
console.log(true);
console.log(false);

console.log(52 > 273);   //52가 273보다 크다.
console.log(52 < 273);   //52가 273보다 작다.
console.log(10===10);   console.log(10==10); //true, true
console.log(10==="10");    console.log(10=="10")    //false, true
console.log("가방">"하마");  //false
//     오름차순 0 1 2 3 4 - -,  a b c d e - -, ㄱ ㄴ ㄷ ㄹ ㅁ - -

console.log(52>=273); // 크거나 같다. false
console.log(52<=273); // 작거나 같다. true
console.log(10!=11);  // 10과 11은 다르다. true

console.log(!true);   // true => false
console.log(!false);  // false => true

console.log(true && true);      // true 그리고 true => true
console.log(true && false);     // true 그리고 false => false
console.log(false && true);     // false 그리고 true => false
console.log(false && false);    // false 그리고 false => false

console.log(true || true);      // true 또는 true => true
console.log(true || false);     // true 또는 false => true
console.log(false || true);     // false 또는 true => true
console.log(false || false);    // false 또는 false => false

// p.96~97 자료형 검사 (현재 자료가 숫자인가? 문자열인가? 불인가? 확인작업)
    // 이유: 유효성 검사[데이터를 확인? -- 자료형마다 다른 로직/기능 작업]

console.log(typeof("안녕하세요"));  //"안녕하세요"의 자료형 확인 string[문자열]
console.log(typeof(273));          //273의 자료형 확인 number[숫자]
console.log(typeof(true));         //true의 자료형 홧인 boolean[불]

console.log(typeof"안녕하세요");
console.log(typeof 50); console.log(typeof(50-30));
console.log(typeof false);   console.log(typeof(50<30));

//p.98 템플릿 문자열 (서로 다른 자료형들이 존재할 때는 + 연결연산자);
console.log('표현식 273 + 52의 값은' +(273+52)+ '입니다');
           // 문자열                    숫자    문자열
           // +연결연산자 이용하면 되지만 너무 많으면 복잡해진다.
console.log(`표현식273 + 52의 값은 ${273+52}입니다`)
            // 백틱(탭[tab]위에)
            // 1. ``으로 전체를 감싼다.
            // 2. 자료형 표현 표현할 위치에 ${데이터}
//p.99
console.log(1=="1"); // 데이터만 비교했을 때는 같다. [자료형 비교X]
console.log(false == 0) // false는 0과 같다. true는 1       [2진수 -> 0,1 false,true]
console.log("" == [])   // 빈문자열과 빈배열과 같은 값 의미
console.log(0==[]); // 0과 빈배열과 같은 값 의미


/* 
    p.100 마무리 확인문제
    1. 불, 숫자, 숫자 ,불
    2.#연습문제
    ////

*/

