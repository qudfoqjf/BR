//배열 선언
// [객체]=====
const 업체등록=[];         
const 업체등록2=[];
// [객체]=====

const 개수2=[];
const 총가격2=[];

//========================================form1===============================================
function 등록1(){   //등록1 f start

console.log('등록 1 함수 실행');

//[입력]
const 부품=document.querySelector("#부품").value;
const 업체=document.querySelector("#업체").value;
const 가격=document.querySelector("#가격").value;

    //유효성 검사---------------------------------------------
    for(let i=0; i<업체등록.length; i++){
        if(업체등록[i].부품1==부품){//동일부품 존재 시
            console.log(업체등록.부품1==부품);
            alert('동일한 부품이 존재합니다.');
            console.log('부품 중복');
            value초기화();
            return;
        }
    }
    //빈칸검사
    if(부품==""){ alert('부품명을 입력해 주십시오.'); return; }
    if(업체==""){ alert('업체명을 입력해 주십시오.'); return; }
    if(가격==""){ alert('가격을 입력해 주십시오.'); return; }

    //가격 숫자검사
    if(isNaN(가격)){ alert('가격을 숫자로 입력해 주십시오.'); return; }

    //유효성 검사 end--------------------------------------------

//[처리]
업체등록.push({
    부품1 : 부품,
    업체1 : 업체,
    가격1 : 가격
});

console.log(업체등록);
//=======================================================

const option = document.querySelector('#부품s');
let html=''
for(let i=0 ;i<업체등록.length;i++){
    html+= `<option>${업체등록[i].부품1}</option>`
}
option.innerHTML = html;
//=======================================================        

//[출력]
출력1();
value초기화();
alert('등록성공!');

}   //f end

function 삭제1(삭제1매개변수){    //삭제1 함수 start
console.log('삭제1 함수 실행');
//231215_19:09 수정
    console.log(`업체등록2=${업체등록2.length}`);        

    for(let i=0; i<업체등록2.length; i++){
        if(업체등록2[i]==삭제1매개변수){
            업체등록2.splice(i,1);
        }
    }                
//--------------

업체등록.splice(삭제1매개변수,1);

//=======================================================

const option = document.querySelector('#부품s');
let html=''
for(let i=0 ;i<업체등록.length;i++){
    html+= `<option>${업체등록[i].부품1}</option>`
}
option.innerHTML = html;
//=======================================================       
삭제함수()
출력1();
출력2();
}   //f end

function 출력1(){   //등록1 f start
console.log('출력함수 실행');

const output1=document.querySelector("#출력1");

let html=``; 

for(let i=0; i<업체등록.length; i++){
    html+=`<div>
                <div>${업체등록[i].부품1}</div>
                <div>${업체등록[i].업체1}</div>
                <div>${(업체등록[i].가격1*1).toLocaleString()}원</div>

                <div>
                    <button onclick='삭제1(${i})'>X</button>
                </div>
             </div>`
    } 
output1.innerHTML=html;
}   //f end

function value초기화(){ //vlaue값 초기화 f start
document.querySelector("#부품").value=``;
document.querySelector("#업체").value=``;
document.querySelector("#가격").value=``;
}// f end
//========================================form1 end===============================================

// 등록2 함수
function 등록2(){console.log('등록2함수실행')
const 개수=document.querySelector('#개수').value;
const 부품s=document.querySelector('#부품s').value;
    console.log( 부품s );
    
let 업체인덱스 = -1;
for( let i = 0 ; i<업체등록.length ; i++ ){
    if( 업체등록[i].부품1 == 부품s ){
        업체인덱스 = i;
        break;
    }
}
let 물품당합계=업체등록[업체인덱스].가격1*개수;
const 등록2={부품2:부품s, 업체2:업체등록[업체인덱스].업체1, 개수2:개수, 총가격2:물품당합계}
업체등록2.push(등록2);
출력2();
}
function 출력2(){console.log('출력2함수실행')
const output2=document.querySelector('#출력2')
let html='';
// 업체2

/* let 부품당총가격=0;  //231215.18:23 수정
for(let i=0; i<가격1.length; i++){
    부품당총가격=가격1[i]*개수2[i]
    총가격2.push(부품당총가격);
    console.log(총가격2);
} */
for(let i=0; i<업체등록2.length; i++){
    html+=`
    <div class="출력2row">
        <div>${업체등록2[i].부품2}</div>
        <div>${업체등록2[i].업체2}</div>
        <div>${업체등록2[i].개수2}</div>
        <div>${업체등록2[i].총가격2.toLocaleString()}원</div>

        <button onclick="삭제함수(${i})">X</button>
    </div>
    `
}
    total();
// 총합계
output2.innerHTML=html;
}
function total(){
const output3=document.querySelector("#총합계")
let total=0;
for(let i=0; i<업체등록2.length; i++){
    total += Number(업체등록2[i].총가격2);
}
output3.innerHTML=`<div> 총 합계 : <span>${ (total*1).toLocaleString() } 원 </span>  </div>`;
}
//발주 삭제 함수입니다
function 삭제함수(삭제할인덱스){
console.log('삭제함수()실행' + 삭제할인덱스);
if (confirm('삭제할까요?')) {
    alert('삭제 성공');
    업체등록2.splice(삭제할인덱스,1)
}
출력2()
}