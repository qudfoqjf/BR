document.addEventListener('DOMContentLoaded',()=>{
    let counter = 0;
    let isConnect =false;

    const h1= document.querySelector('h1');
    const p = document.querySelector('p');
    const connectButton=document.querySelector('#connect');
    const disconnectButton=document.querySelector('#disconnect');

    const listener=(event)=>{
        h1.textContent=`클릭 횟수:${counter++}`
    }

    connectButton.addEventListener('click',()=>{
        if(isConnect==false){
            h1.addEventListener('click',listener)
            p.textContent = '이벤트 연결 상태: 연결'
            isConnect = true
        }
    })
    disconnectButton.addEventListener('click',()=>{
        if(isConnect==true){
            h1.removeEventListener('click',listener)
            p.textContent = '이벤트 연결 상태: 해제'
            isConnect =false
        }
    })


})

// p.326 확인문제
/* 
    1. 2번 DOMContentLoaded
    2. .클래스명, #id명, 태그명
    3. 4번 htmlContent
    4.  (1)border-radius -> borderRadius
        (2)font-family -> fontFamily
        (3)line-height-> lineHeight
        (4)width -> width
        (5)box-sizing -> boxSizing

*/
