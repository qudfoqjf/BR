document.addEventListener('DOMContentLoaded',function(){

    //1.
    let timer=0;
    let timerId=0;

    //2. 각 요소를 객체로 호출
    const h1=document.querySelector('h1');
    const checkbox=document.querySelector('input');

    //3. 체크박스의 이벤트[change]등록
    checkbox.addEventListener('change',function(event){
        //4. checked 속성 확인
        console.log(checkbox.checked);
        console.log(event.currentTarget.checked);
        //5. 만약에 체크가 되어있으면
        if(event.currentTarget.checked){//체크된 상태
            //6. 1초마다 익명함수를 실행
            timerId=setInterval(function(){
                timer++;
                h1.textContent=`${timer}초`
            },1000)
        }else{//체크해제상태
            clearInterval(timerId)
        }
    })     //e end


    //[p.348]
    const output=document.querySelector('#output')
    const radius=document.querySelectorAll('[name=pet]');
   

    //2. 모든 라디오버튼 하나씩 을 호출
    for(let i =0;i<radius.length;i++){

        //3.이벤트[change] 등록
        radius[i].addEventListener('change',function(event){

            const current=event.currentTarget;  //이벤트를 발행시킨 요소
            if(current.checked){
                output.textContent=`좋아하는 애왕동물은 ${current.value} 이군요`;
            }
            const checkvalue=document.querySelector('input[name=pet]:checked').value;
            output.textContent=`좋아하는 애왕동물은 ${checkvalue} 이군요`
        })
    }


    
})      //e end

/* 
    1.인터벌 실행
    setInterval(정의함수(),밀리초);: 밀리초 마다 해당 정의함수를 실행시키는 함수
    - 밀리초: 1/1000초
    2.인터벌 끄기
    clearInterval(setInterval변수):종료
*/