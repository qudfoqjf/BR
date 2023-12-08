
 // p.131 if조건문
    // 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    // 가장 일반적인 조건문 : IF
    /* 
        형태

        1.
            if(T/F){참/T 일때 실행코드;}

        2.
            if(T/F){참/T 일때 실행코드;}        삼항연산자: 조건? 참:거짓
            else{거짓/F일때 실행코드;}

        3.  참 또는 거짓
            if(T/F){        
                if(T/F){}
                else{}
            }else{
                if(T/F){}
                else{}
            }
        4. 다수 조건 일때 결과1개    ******************8*** 다수 조건일때, 결과 여러개 *****************
            if(조건1){}                                         if(조건1){}
            else if(조건2){}                                    if(조건1){}
            else if(조건3){}                                    if(조건1){}
            else if(조건4){}                                    if(조건1){}
            else{}                                              if(조건1){}
    */

//1. if(조건) : 조건의 결과가 참이면 {}안으로 들어가고 아니면 {}에 못들어감
if(273<100){ // 273이 100보다 미만이면
        console.log('273<100=>true'); // 실행X [조건이 false이므로]
}   //if end
console.log('1종료'); // 실행 [조건문과 상관이 없음 {}밖이기 때문]  

//2.
const date = new Date(); //new Date(); 현재시간을 알려주는 코드[클래스]
    console.log(date);
const hour = date.getHours();   // 현재시간.getHours(): 현재시간에서 시분초 중에 시를 반환한 함수.
    console.log(hour);
    // 1. 만약에 현재 시가 12보다 작으면 오전
if(hour<12){console.log('오전입니다.')}
    // 2. 만약에 현재 시가 12보다 크면 오후
if(hour>=12){console.log("오후입니다.")}

//3. p.134

if(hour<12){console.log("오전입니다.");}
else{console.log("오후입니다");}

//4. p.135
if(hour<11){console.log("아침 먹을 시간입니다");}    // 11시 미만
else{//[반대] 11시 이상
    // 중첩
    if(hour< 15){// 11시 이상이면서 15시 미만
        console.log('점심 먹을 시간입니다.')
    }else{// 11시 이상이면서 15시 이상
    console.log('저녁 먹을 시간입니다')
    }// 두번째 if 끝
}   //첫번째 if 끝

//5. p.137
if(hour<11){console.log("아침 먹을 시간입니다");}
else if(hour< 15){console.log('점심 먹을 시간입니다');}
else{console.log('저녁 먹을 시간입니다.');}
    // VS
if(hour<11){console.log("아침 먹을 시간입니다");}
if(hour<15){console.log('점심 먹을 시간입니다');}
else{console.log('저녁 먹을 시간입니다.');}

//p.138

/* 확인문제
    1. 3
    2. Number, Number, a>b, a==b
    3. &&
    4. if (a>0){console.log("입력한 숫자는 양수입니다.");}
        else if (a==0){console.log("입력한 숫자는 0입니다.");}
        else {console.log("입력한 숫자는 음수입니다.")}
    
    5. if (a%2==0){
        console.log("입력한 숫자는 짝수입니다. ");}
        else{console.log("입력한 숫자는 홀수입니다.");}

    6. if (a>=3 %% a<=5){console.log("봄입니다.");}
        else if (a >= 6 %% a<=8){console.log("여름입니다.");}
        else if (a >= 9%% a<=11){console.log("가을입니다.");}
        else if (a<=2 || a==12){console.log("겨울입니다.");}

        

*/