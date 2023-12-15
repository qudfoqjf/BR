//배열 선언
const 부품1=[];
const 업체1=[];
const 가격1=[];

const 부품2=[];
const 업체2=[];
const 개수2=[];
const 총가격2=[];


function 등록1(){   //등록1 f start

console.log('등록 1 함수 실행');

//[입력]
const 부품=document.querySelector("#부품").value;
const 업체=document.querySelector("#업체").value;
const 가격=document.querySelector("#가격").value;

//유효성 검사
if(부품1.indexOf(부품)!=-1){
    alert('동일한 부품이 존재합니다.');
    console.log('부품 중복');
  
    document.querySelector("#부품").value=``;
    document.querySelector("#업체").value=``;
    document.querySelector("#가격").value=``;

    return;
}
//유효성 검사 end

//[처리]
부품1.push(부품);
업체1.push(업체);
가격1.push(가격);

console.log(부품1);
console.log(업체1);
console.log(가격1);

//[출력]
출력1();
document.querySelector("#부품").value=``;
document.querySelector("#업체").value=``;
document.querySelector("#가격").value=``;
alert('등록성공!');

const option = document.querySelector('#부품s');
let html=''
for(let i=0 ;i<부품1.length;i++){
    html+= `<option>${부품1[i]}</option>`
}
option.innerHTML = html;
}   //f end

function 삭제1(삭제1매개변수){    //삭제1 함수 start
    console.log('삭제1 함수 실행');

    let search=부품2.indexOf(부품1[삭제1매개변수]);

    부품1.splice(삭제1매개변수,1);
    업체1.splice(삭제1매개변수,1);
    가격1.splice(삭제1매개변수,1);

    if(search!=-1){
        부품2.splice(search,1);
        업체2.splice(search,1);
        개수2.splice(search,1);
        총가격2.splice(search,1);
    }

    출력1();
    출력2();
}   //f end

function 출력1(){   //등록1 f start
    console.log('출력함수 실행');
    
    const output1=document.querySelector("#출력1");

    let html=``; 

    for(let i=0; i<부품1.length; i++){
        html+=`<div>
            <span>${부품1[i]}</span>
            <span>${업체1[i]}</span>
            <span>${가격1[i]}</span>

            <button onclick='삭제1(${i})'>X</button>
            </div>`
        } 
    
    output1.innerHTML=html;

}   //f end


//발주 삭제 함수입니다
function 삭제함수(삭제할인덱스){
    console.log('삭제함수()실행' + 삭제할인덱스);
    if (confirm('삭제할까요?')) {
        alert('삭제 성공');
        부품2.splice(삭제할인덱스,1);
        업체2.splice(삭제할인덱스,1);
        개수2.splice(삭제할인덱스,1);
        총가격2.splice(삭제할인덱스,1);
    }
    출력함수2()
}
// 등록2 함수
function 등록2(){console.log('등록2함수실행')
    const 개수=document.querySelector('#개수');
    개수2.push(개수);
    console.log(개수2)
}
console.log(등록2())


function 출력2(){console.log('출력2함수실행')

    const output2=document.querySelector("#출력2");
    let html='';
// 업체2
    for(let i=0; i<업체2.length; i++){console.log(업체2[i]);
        html+=`<div>
        <span>${부품1[i]}</span>
        <span>${업체1[i]}</span>
        <span>${총가격2[i]}</span>
        </div>`
    }

// (부품당)총가격
    let 개수1=0;
    let 가격2=0;
    let 부품당총가격=0;
        for(let i=0; i<가격.length; 가격++){부품당총가격=가격[i]*개수2[i]
            총가격2.push(부품당총가격)
            html+=`<div>
            
            </div>`
            console.log(부품당총가격);

        }
        
// 총합계
    let total=0;
        for(let i=0; i<총가격2.length; i++){총합계 += Number(총가격2[i]);
            html+=`<div>
            <span>${total}}</span>
            </div>`}

    const 총합계=document.querySelector('#총합계')
    total.innerHTML=총합계
    output2.innerHTML=html;
}
console.log(출력2())
    
    
