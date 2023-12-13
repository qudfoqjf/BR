/*  
    p.175  
        
        1. 
            for(let i = 0; i < 배열명.length ; i++){}
            for(let i = 0; i < 10; i++){}

        2. for(let i in 배열명){}

        3. for(let v of배열명){}

        4. while문
            while(조건문){실행문;}

            a. for처럼 사용 [빈도 적다].
                초기값
                while(조건문){실행문; 증감식}

            b. 무한루프
*/
const todos = ['우유 구매', '업무 메일 확인하기','필라테스 수업'];

//1. - i는 0부터 마지막인덱스까지 1씩 증가 하면서 console.log 반복 실행
for(let i = 0; i< todos.length; i++){ console.log(todos[i]);}
//2. - i는 todos배열내 요소 *인덱스를 하나씩 대입 받으면서 console.log 반복 실행
for(let i in todos){console.log(todos[i]);}
//3. - i는 todos배열내 요소*값을 하나씩 대입 받으면서 console.log 반복 실행
for(let i of todos){console.log(i);}
//4. - i는 0부터 마지막인덱스까지 console.log 출력후 증감이 반복실행
let i = 0;
while(i<todos.length){console.log(i); i++;}

//p. 181 무한루프
//let j = 0; while(true){alert(`${j}번째 반복입니다.`);j++;}
//for(let j =0; true;j++){`${j}번째 반복입니다`;}
//for(;;){alert(`${j}번째 반복입니다.`);}
//while(1){alert('무한반복');}

/* let p = 0;
while(confirm('계속 진행하시겠습니까?')){// 확인 :true 취소: false
    alert(`${p}번째 반복입니다.`);
    p++;
}// w end */

/* 

    함수
        -1. 남이 만든 함수: alert(), confirm(), push(), splice()
        -2. 내가 만든 함수: 회원등록(), 로그인()
    
    함 : 상자   , 수: 숫자
    상자 안에 들어있는 수 => 상자 안에 들어있는 코드 => {}안에 들어있는 코드
        재사용을 위해서 사용
        1. 매개변수/인자/인수
        2. 리턴/결과/반환

*/

//p. 184
/* for(let m=0; true; m++){    //무한루프
    alert(`${m}번째 반복임니다.`);
    // 조건에 따른 무한루프 종료 break;
    const isContinue = confirm('계속 할까요?');
    if(!isContinue){break;} //가장 가까운 for/while 탈출
}   // 무한루프 end
 */

/* for(;;){// 1번 for
        for(;;){//2번 for
        if(3>2){break;} //2번 for 탈출
        }
} */

// p.185
for(let m =0; m<5; m++){
    continue;   //반복 작업을 멈추고 반복문의 처음(증감식)으로 이동
    alert(m);   // vscode에서 지원하는 기능 => 의미없는 코드 투명색    
}  //for end

//p.185 1~10까지  짝수만 누적합계 구하기
let output= 0;
for(let m= 1; m<=10; m++){
    //만약에 m번째가 홀수면 
    if(m%2===1){continue;}  // 다시 반복문(증감식)으로.
    output+= m;
}// for end
console.log(output);

// p.191 확인문제
    /*  1.#for in 반복문 ()
    0
    1
    2
    3
        #for of 반복문
    사과
    배
    귤
    바나나 
     */
    // 2. const-> let
    
    // 3. 
       /*  for(let i=1; i<=100; i++){
            output *=i; output=output*i; 
        }  */