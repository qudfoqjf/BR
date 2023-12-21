//p.267
// 1. toFixed(소수점): 해당 소수점까지 출력(반올림해서)
const l =123.456789;
console.log(l.toFixed(2));  // 123.46
console.log(l.toFixed(3));  // 123.457

// 2. Number(숫자):유효성검사[자료형에따라 연산이 달라지기 때문에. +]
const m =Number('숫자로 변환할 수 없는 경우');      // Number('문자열');
console.log(m);                             // m:NaN
console.log(m===NaN);                       // false // NaN 비교X
console.log(Number.isNaN(m));               // true // isNaN() 함수 이용한 비교O
// 3. isFinite(연산): 유효성검사: 연산의 결과가 무한대이면
const n =10/0;
console.log(n);
const o =-10/0;
console.log(o)
Number.isFinite(n);

//p.269~271
//1. trim(): 문자열 양쪽 끝에 공백 없애기?? 의미있는 공백, 의미없는 공백은 필요없음[메모리차지]
console.log('       앞과            뒤에 공백도 들어가고    '.trim() );
//2. split(): 특정 문자열 기준으로 자름[배열로 반환]  정리안된 데이터를 정리해서 객체화하여 부가기능사용
const timeList="12:30\n15:20"
    console.log(timeList);
const timeArray =timeList.split("\n"); 
    console.log(timeArray);
const time=timeArray[0];
    console.log(time);
const hour=time.split(":");
    console.log(hour[0]);

//3. JSON
    //1. JS객체--> JSON문자열:JSON.Stringify()
    //2. JS문자열--> JS객체: JSON.parse()

//p.356 좀더 알아보기2 
//localStorage[JS가 꺼지고 사라져도 사라지지 않는 메모리]
    //-localStorage     : 브라우저에 저장
    //-sessionstorage   : 브라우저에 저장
//localStorage.setItem('키','값');

localStorage.setItem('이름','유재석');// '이름' 이라는 키로 '유재석'값을 저장
console.log(localStorage.getItem('이름'));  //'이름'이라는 키를넣어서 '유재석' 값을 호출
    //vs
// JS메모리 저장    [JS]가 꺼지면/사라지면 같이 사라짐. HTML새로고침 바뀌면 JS메모리 초기화
const _object= {이름:'유재석'};
console.log(_object.이름);

//예2)
localStorage.setItem('회원정보목록',[{이름:'유재석'},{이름:"강호동"}]);

localStorage.setItem
