/* 
    p.142   switch 조건문
        -break: switch이거나 반복문(for/while)에서 {} 나가기/ 탈출
        -논리(범위논리X)판단X/ 경우의 수가 값으로 정해져 있는 경우
        1. 형태
            switch (자료){
                case 조건A: 실행코드; break;
                case 조건B: 실행코드; break;
                case 조건C: 실행코드; break;
                default: break;
            }

    p.145   삼항연산자
            -간단한(조건 1개 또는 2개) 조건에 따른 결과 실행
            조건부 랜더링[화면표현](JS많이씀)
            1. 형태
                불 표현식?참일때 결화: 거짓일때 결과

*/
// 1. 홀수/짝수 구분
const input =Number(prompt("숫자를 입력하세요")); // 자료를 입력받아 숫자 자료형으로 변환후 상수에 저장
//1-1 if
if(input%2==0){console.log("if짝수입니다.");}
else if(input%2==1){console.log("if홀수입니다.");}
else{console.log('if숫자가 아닙니다.');}

//1-2 switch
switch(input%2){
    case 0 : console.log('case짝수입니다.'); break
    case 1 : console.log('case홀수입니다.'); break
    default: console.log('case숫자가 아닙니다.');break
}

//2.
const date = new Date();    //new Date(); 현재날짜/시간을 알려주는코드(객체)
const hour = date/getHours()// .getHours( )현재날짜/시간에서 '시'만 추출 함수

//2-1
if(hour< 11) {console.log("아침 먹을 시간입니다");}
else if(hour< 15) {console.log("점심 먹을 시간입니다");}
else{console.log("저녁 먹을 시간입니다");}

//2-2
switch(true){
    case hour < 11:console.log("아침 먹을 시간입니다");break;
    case hour < 15:console.log("점심 먹을 시간입니다");break;
    default: console.log("저녁 먹을 시간입니다.");break;
}

// 3. 
const input2 = prompt("숫자를 입력해주세요");
const number = Number(input2);

//3-2 if
if(number>=0){console.log('0이상의 숫자입니다.');}
else{console.log('0보다 작은 숫자입니다');}

//3-2 삼항연산자
const result= number>=0 ? '0이상의 숫자입니다.': '0보다 작은 숫자입니다.';
console.log(result);

//p.148. 홀수 짝수 구하기
    //-홀짝 계산식: 수%2 = 0또는1
    //-문자인경우 : Number(문자열[문자열.length-1]) & 2

//p.150.
const score = Number(prompt('학점을 입력해주세요','학점'))
if(score===4.5){
    alert('신')
}else if(4.2 <= score && score< 4.5){
    alert('교수님의 사랑')
}else if(3.5 <= score && score< 4.2){
    alert('현 체제의 수호자')
}else if(2.8 <= score && score< 3.5){
    alert('일반인')
}else if(2.3 <= score && score< 2.8){
    alert('일탈을 꿈꾸는 소시민')
}else if(1.75 <= score && score< 2.3){
    alert('오락 문화의 선구자')
}else if(1.0 <= score && score< 1.75){
    alert('불가축천민')
}else if(0.5 <= score && score< 1.0){
    alert('자벌레')
}else if(0 <= score && score< 0.5){
    alert('플랑크톤')
}
else{alert('시대를 앞서가는 혁명의 씨앗')}
//효율적인 방법
if(score===4.5){alert('신')}
else if(4.2 <= score){alert('교수님의 사랑')}
else if(3.5 <= score){alert('현 체제의 수호자')}
else if(2.8 <= score){alert('일반인')}
else if(2.3 <= score){alert('일탈을 꿈꾸는 소시민')}
else if(1.75 <= score){alert('오락 문화의 선구자')}
else if(1.0 <= score){alert('불가축천민')}
else if(0.5 <= score){alert('자벌레')}
else if(0 < score){alert('플랑크톤')}
else{alert('시대를 앞서가는 혁명의 씨앗')}

// p.153
    //문자열. split('기준문자'): 특정기준 : 문자열내 특정문자 기준으로 문자열 분리 함수/ 반환: 배열
    // '유재석,강호동,신동엽'.split(','): 3조각으로 쪼갠다 유재석 강호동 신동엽
        //여러 조각/자료를 모아두는 곳 == 배열 [ 여러자료를 저장하는 곳]
const rawInput = prompt('태어난 해를 입력해주세요');
const year = Number(rawInput);

const tti = '원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양'.split(',');
        /* 
            "문자열/자료".split('분리할기준문자');
            -분리할기준문자는 사라지고 자료를 분리.
            -분리전 자료 수 1개 : '원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양'
            -분리후 자료 수 12개: 원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양
                -변수는 1개 밖에 저장을 못함 여러 개를 저장하려면 ->배열 사용
        */

console.log(tti[0]); //원숭이
console.log(tti[8]); //용
//console.log(tti[태어난연도%12]);
console.log(`${year}년에 태어났다면 ${tti[year%12]}띠입니다. `);


//p.154 확인문제
//1.100>200은 false이므로 confirm이 실행되고 확인: true, 취소: false 가 alert출력
//2.집에서
/* 
    switch
*/
//3.집에서
//4. switch default(생략가능) break(생략가능) else(if)
//5.
/* 짧은 조건문  || 논리합 일때 좌변이 참이면 우변은 실행X  좌변이 거짓이면 우변 실행 O 
               && 논리곱 일때 좌변이 거짓이면 우변은 실행X 좌변이 참이면 우변 실행 O
*/

