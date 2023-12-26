//1. 익명함수.
const 함수 = function(){}
//2. 선언적함수
function 함수2(){}
document.addEventListener('DOMContentLoaded',()=>{
    // 1. 각 부모요소 2개 호출
    const divA= document.querySelector('#first');
    const divB= document.querySelector('#second');
    // 2. <h1> 요소 생성
    const h1 = document.createElement('h1');
    // 3. h1에 요소에 내용 추가
    h1.textContent= '이동하는 h1 태그';
    // 4. 함수1 정의 : 부모1에 h1을 대입
    const toFirst=function(){
        divA.appendChild(h1);
        setTimeout(toSecond,1000);
    }
    // 5.함수2 정의
    const toSecond = function(){
        divB.appendChild(h1);
        setTimeout(toFirst,1000);
    }
    //6. 함수1 실행
    toFirst();
    //[p.322]
    //원형: setTimeout(함수, 밀리초);
    setTimeout(function(){
        console(h2.parentNode); // 객체명.parentNode : 해당 객체의 부모
        const h2=document.querySelector('h2');
        h2.parentNode.removeChild(h2);
    },3000);    //3초후 함수 실행

    //[p.323]
    let counter=0;
    const h3 =document.querySelector('h3');

    h3.addEventListener('click',function(event){
        // 1. click 이벤트가 발생하면 실행되는 함수.addEventListener
        // 2. 그 이벤트를 발생한 결과 내용을 콜백함수의 매개변수로 전달
        // 왜? 클릭이벤트 결과에 필요한 정보가 있으면 활용해서 쓸수 있도록 지원
        console.log(event);
        console.log(event.target);
        counter++;
        h3.textContent=`클릭 횟수: ${counter}`;
    })


    //1. 익명함수를 상수에 대입     [재호출0] 
    const 삭제함수1=function(){}
    setTimeout(삭제함수1,3000);

    //2. 익명함수를 상수에 대입X
    setTimeout(function(){},3000);  //[재호출X]

    //3. 선언적함수를 선언
    function 삭제함수2(){
        const h2= document.querySelector('h2');
        h2.parentNode.removeChild(h2);
    }
    setTimeout(삭제함수2(),3000);
})