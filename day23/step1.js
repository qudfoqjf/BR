// p.331 키보드 이벤트

// 1. HTML 모두 로드 되었을때/
document.addEventListener('DOMContentLoaded',function(){
    // 2. 특정 html요소를 객체로 호출
    const textarea=document.querySelector('textarea');
    const h1=document.querySelector('h1');

    // 3.textarea 요소의 이벤트 등록
    textarea.addEventListener('keyup',function(e){
        console.log(e);
        console.log(e.code);
        console.log(e.keycode);
        console.log(e.altKey);
        console.log(e.ctrlKey);
        console.log(e.shiftKey);
        //event: 매개변수로 이벤트의 정보를 받습니다. 
        const length=textarea.value.length;
        h1.textContent=`글자수:${length}`;
    });
    //[p.333]
    const star=document.querySelector('h2');
    star.style.position='absolute';

    let x=0;
    let y=0;
    const block=20 //이동단위

    //2. 별 위치를 그려주는 함수
    console.log(x);console.log(y);
    const print=function(){
        star.style.left=`${x*block}px`
        star.style.top=`${y*block}px`
    }
    print();

    //3. 별위치를 이동하는 이벤트
        //3-1 키보드 방향키의 키번호
        const left=37;const up=38;const right=39;const down=40;

    document.body.addEventListener('keydown',function(e){
        console.log(e);
        if(e.keyCode==left){x--}
        else if(e.keyCode==up){y--}
        else if(e.keyCode==right){x++}
        else if(e.keyCode==down){y++}
        else{}

        print();
    })

});
