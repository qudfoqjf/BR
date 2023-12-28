/* 
    수정
        1. [식별자] 무엇을 수정할껀지.updatefno
        2. 기존데이터 호출
        3. 수정처리
*/

// [1] 수정할 게시물의 정보를 출력한다.
function 수정정보호출(){

    //1. 누구를
    const fno= JSON.parse(localStorage.getItem('updatefno'));
    //2. fno에 해당하는 객체 찾기
    const feedList=JSON.parse(localStorage.getItem('feedList'));
        for(let i=0;i<feedList.length;i++){
            if(fno==feedList[i].fno){
                //3. 기존 데이터 대입.
                document.querySelector('textarea').value= feedList[i].fcontent.replaceAll('<br/>','\n');
                document.querySelector('#fileImg').src=feedList[i].fimg;
            }
        }
}
let imgByte=''
function 이미지등록( event ){  console.log('이미지등록()');
    let 파일읽기객체 = new FileReader(); 
    파일읽기객체.readAsDataURL( event.target.files[0] );  console.log( 파일읽기객체 );
    파일읽기객체.onload = function(){ 
        document.querySelector('#fileImg').src = 파일읽기객체.result;
        imgByte= 파일읽기객체.result;
    } 
}

//[3] 
function 피드수정(){
    //1.입력받은값 호출
    const fcontent=document.querySelector('textarea').value;
    //2.
    const fno=JSON.parse(localStorage.getItem('updatefno'));
    const feedList=JSON.parse(localStorage.getItem('feedList'));
        for(let i=0;i<feedList.length;i++){
            if(fno==feedList[i].fno){
                feedList[i].fcontent=fcontent.replaceAll('\n','<br/>');

                feedList[i].fimg = imgByte==''? feedList[i].fimg:imgByte;
                //
                localStorage.setItem('feedList',JSON.stringify(feedList));
                alert('수정 성공'); location.href="index.html";
            } //if end
        }// for end
} //f end