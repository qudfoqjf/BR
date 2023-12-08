/* if문 연습문제 */
    /* prompt 대신에 input으로 입력받기 */
    /* 풀이 결과를 console.log대신에 span에 출력 */

    // 1.HTML 마크업 정보를 35변수로 가져오는 함수,
        //document.querySelector('마크업 또는 #id명 또는 .class명')
    // 2. .value 속성 값 가져오기
        // document.querySelector('마크업 또는 #id명 또는 .class명').value
    // 3. innerHTML 속성
        // document.querySelector('마크업 또는 #id명 또는 .class명').innerHTML ='출력하고 싶은 말'


//문제1

//문제2

function 문제2함수(){
    //[입력]
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);

    //[처리]
    let result = 0;
    if(value1 > value2){result= value1+"가 큽니다";}
    else if(value1<value2){result= value2+"가 큽니다";}
    else{result="두수는 같다"}

    //[출력]
    document.querySelector('#result').innerHTML
        =`${result}`
}
//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){
    //[입력]
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    //[처리]
    let result = 0;
    if(value1>value2 && value1> value3 ){ result= value1+"가 큽니다";}
    else if(value2>value1 && value2> value3 ){ result= value2+"가 큽니다";}
    else{ result= value3+"가 큽니다";}

    //[출력]
    document.querySelector('#result').innerHTML
        =`${result}`
}
//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){
    //[입력]
    let value1 = Number(document.querySelector('#input1').value);
    //[처리]
    let result = 0;
    if(value1>=90){result="합격"}
    else{result="탈락"}
    //[출력]
    document.querySelector('#result').innerHTML=`${result}`
}
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5함수(){
    //[입력]
    let value1 = Number(document.querySelector('#input1').value);
    //[처리]
    let result = 0;
    if(value1>=90){result="A등급"}
    else if(value1>=80 && value1<90){result="B등급"}
    else if(value1>=70 && value1<80){result="C등급"}
    else{result="재시험"}
     //[출력]
     document.querySelector('#result').innerHTML=`${result}`
}

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/

function 문제6함수(){
    //입력
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    //처리
    let check = 0
    if(value1=="admin"){check++}
    if(value2==1234){check++}
    if(check==2){result="로그인성공"}
    else{result="로그인실패"}
    //[출력]
    document.querySelector('#result').innerHTML=`${result}`
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력
function 문제7오름차순(){
    //입력
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    //처리
    let temp = 0;
    if(value1>value2){let temp=value2; value2= value1;   value1=temp;}
    if(value1>value3){let temp=value3; value3= value1;   value1=temp;}
    if(value2>value3){let temp=value3; value3= value2;   value2=temp;}
    result=`${value1} ${value2} ${value3}`
    //[출력]
    document.querySelector('#result').innerHTML=`${result}`
}
function 문제7내림차순(){
    //입력
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    //처리
    let temp = 0;
    if(value1<value2){let temp=value2; value2= value1;   value1=temp;}
    if(value1<value3){let temp=value3; value3= value1;   value1=temp;}
    if(value2<value3){let temp=value3; value3= value2;   value2=temp;}
    result=`${value1} ${value2} ${value3}`
    //[출력]
    document.querySelector('#result').innerHTML=`${result}`

}


/* let  min = value1;
    min = value1<value2 ? value1:value2;
    min = min <value3 ? min:value3;
    let max = value2;
    max = value1<value2 ? value2:value1;
    max = value3<max ? max: value3;
    let mid = value3;
    if (mid>min && mid<max){mid=value3}
    else if(mid==max || mid == min){mid=value2}
    if (mid>min && mid<max){mid=value2}
    else if(mid==max || mid == min){mid=value1}
    else{mid=value1}; */