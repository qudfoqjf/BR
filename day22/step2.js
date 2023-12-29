//HTML을 모두 읽었을때, 해당 함수 실행
document.addEventListener('DOMContentLoaded', function(){
    // h1요소를 객체로 가져오기.
    const header = document.querySelector('h1');
        //document.querySelector('h1');         해당요소를 객체로 호출
        //documnet.querySelector('h1').value;   해당요소의 입력된 값 호출
            //[*단 value입력 관련 요소만 가능]: input,select,textarea 등/ div,span,h1 [X]
        //document.querySelector('h1').innerHTML;   해당 요소 사이의 HTML을 텍스트 호출[마크업 코드를 읽어옴]
        header.textContent= 'HEADERS';      //DOM객체명.textContent:텍스트 호출 [마크업이 만들어낸 텍스트를 읽어옴]
        header.style.color='white';         //DOM객체명.style.css 속성명='값';
        header.style.backgroundColor= 'black';
        header.style.padding = '10px';
        // css: background-color vs js: backgroundColor:카멜 표기법 

        //p.313
        // querySelectorAll을 이용한 h1 dom 객체를 여러개/배열 로 반환
        const headers= document.querySelector('h1'); console.log(headers)
        for(let i = 0 ; i<headers.length;i++){
            if(i%2==0){headers[i].style.color='white'}
            else {headers[i].style.color= 'red';}
            headers[i].textContent= i%3== 0?'3배수O':'3배수X';
            headers[i].style.backgroundColor = 'black';
            headers[i].style.padding= '10px';
        }
        // p.314
        const a= document.querySelector('#a');
        const b= document.querySelector('#b');

        a.textContent= `<h1>textContent 속성 <h1/>`;    //문자그대로
        
    });