console.log('js열림');
const 회원배열 = [];        //함수 밖에서 선언했으므로 1번만 선언됨
    //- 배열을 위에 선언/생성한 이유
        //1. 선언은 1번만 되어야한다[누적시키기 위해서]
        //2. 여러{}에서 호출/사용 해야 하므로 전역에서 사용가능하게 선언
            // 1. function 회원등록(){} 2.function 회원삭제(){}
/* 
    ====================================js전체구역[대한민국]==================================
    let 변수1 = 30;
        ================================함수구역[경기도]=======================================
    function 함수(){
        let 변수2 = 40;
        console.log(변수1);     // 대한민국 사람이면 경기도에 들어갈 수 있다.
    ====================================if구역[안산]=========================================
    if(조건){
        console.log(변수1)      // 대한민국 사람이면 안산에 들어갈수있다
        console.log(변수3)      // X
    }
    }
        ===============================제어문구역[강원도 구역]=================================
    if(조건){
        let 변수3 = 50;
        console.log(변수1);     // 대한민국 사람이면 강원도에 들어갈수 있다
        console.log(변수2);     // 다른 구역에 태어난[선언]된 변수는 들어올 수 없다.
    }
    ===================================js구역===========================================
*/

function 회원등록() { // f start 선언
    //1.입력
    const name = document.querySelector('#nameInput').value;
    //2.[처리]
    if (회원배열.indexOf(name) >= 0) { alert('현재 등록된 이름입니다[중복]'); return; }
    if (name.length != 3) { alert('회원명은 3글자로 입력해주세요'); return; }
    if (!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])) { alert('숫자를 입력할 수 없습니다'); return; }
    회원배열.push(name);
    console.log(회원배열);
    //3.[출력]
    document.querySelector('#nameList').innerHTML = 회원배열;
    //1. 등록후 input 상자 초기화 [input에 value에 빈문자열 넣어주기]
    document.querySelector('#nameInput').value = '';
}   //f end

function 회원삭제(){ // f start
    console.log('회원삭제 함수');
    //1. 입력
    const name=document.querySelector('#nameInput').value;
    //2. 처리 삭제처리 -> 배열에서 요소 제거 입력한값이 존재하면 삭제, 없으면 없다고 출력
    let deleteIndex = 회원배열.indexOf(name);  // 삭제할 인덱스 위치 
    if (deleteIndex>= 0){//. indexOf() 존재하면 0이상의 인덱스위치 반환
        회원배열.splice(deleteIndex,1); alert('삭제했습니다')
    }else{//없으면-1
        alert('존재하지 않습니다.');
    }
    //3. [출력-> 새로고침(배열내 요소가 변경되어서 화면도 다시 출력)] 재 렌더링
    document.querySelector('#nameList').innerHTML = 회원배열;
}// f end

//변수 : let, 상수 :const, 함수:function