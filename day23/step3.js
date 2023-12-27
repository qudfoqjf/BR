const category=['떡볶이','순대','오뎅','튀김']

document.addEventListener('DOMContentLoaded',function(){
    //2.
    const selectBox= document.querySelector('#selectBox');
    let html='안녕'
        for(let i= 0;i<category.length;i++){
            html+=`<option>${category[i]}</option>`
        }
        selectBox.innerHTML=html;
        //textContent: 문자열 그자체.//innerHTML: 문자열 HTML형식

    //[p.343]
    const select= document.querySelector('select');
    const p=document.querySelector('p');
    // 요소의 이벤트[change:value값이 바뀔때마다]등록
    select.addEventListener('change',function(event){
        console.log(event); //  change 이벤트결과 정보 객체
        console.log(event.currentTarget);   //change이벤트를 발생시킨 요소
        console.log(event.currentTarget.options)    //select 하위 요소들/배열 반환
        console.log(event.currentTarget.options.selectedIndex)  //select요소의 선택된 인덱스
        // [방법1]
        const options = event.currentTarget.options;
        const index= event.currentTarget.options.selectedIndex;
        p.textContent=`선택:${options[index].textContent}`

        // [방법2]
        p.textContent=`선택:${select.value}`;
    })


    //[p.345]
    let 현재값
    let 변환상수;

    const select3=document.querySelector('select:nth-child(6)')
    console.log(select3);
    const input=document.querySelector('input')
    const span=document.querySelector('span')
    const calculate=function(){
        span.textContent=(현재값*변환상수).toFixed(2); //소수점2번째자리까지반올림
    }
    select3.addEventListener('change',function(event){
        const options=event.currentTarget.options;
        const index=event.currentTarget.options.selectedIndex;
        변환상수=Number(options[index].value);
        calculate();
    })

    input.addEventListener('keyup',function(event){
        현재값=Number(event.currentTarget.value);

        calculate()
    })

})//e end