//1. HTML요소에서 onclick="함수()" 인라인 이벤트 모델[react]
function 인치변환(){
    const input = document.querySelector('input');
    const p=document.querySelector('p');

    const inch=Number(input.value);
        if(isNaN(inch)){
            p.textContent='숫자를 입력해주세요'
            return
        }
    const cm= inch*2.54
    p.textContent=`${cm}cm`
}
//p.339
//2. addEventListener 사용 표준 이벤트 모델
document.addEventListener('DOMContentLoaded',function(){
    // 각요소들을 가져오기 
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const p=document.querySelector('p');

    // 요소의 이벤트 등록
    button.addEventListener('click',function(){
        //입력받은 값 호출해서 숫자로 변환
        const inch=Number(input.value);
        if(isNaN(inch)){
            p.textContent='숫자를 입력해주세요'
            return
        }
    const cm= inch*2.54
    p.textContent=`${cm}cm`

    })//e.end
    // [p.341]
    const email=document.querySelector('#email');
    const emailConfirm=document.querySelector('#emailConfirm')

    const isEmail= function(value){
        return value.indexOf('@')>1 && value.split('@')[1].indexOf('.')> 1
    }
    email.addEventListener('keyup',function(event){
        console.log(event);
        console.log(event.currentTarget);//현재 이벤트를 발생시킨 요소(주체)
        console.log(email.value) ;                    //입력요소에서 입력값호출
        console.log(event.currentTarget.value);            //이벤트 발생한 요소의 입력값호출

        const value=event.currentTarget.value;
        if(isEmail(value)){//2번 주석의 함수호출
            emailConfirm.style.color='green';
            emailConfirm.textContent=`이메일 형식입니다.${value}`
        }
        else{
            emailConfirm.style.color='red';
            emailConfirm.textContent=`이메일 형식이 아닙니다.${value}`
        }
    })
})// e end