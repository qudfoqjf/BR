//1. 등록함수:실행조건 : 등록버튼을 클릭했을때
function 등록(){
    console.log('등록()함수')
    //1. 입력
    const mid =document.querySelector('#mid').value;
    const mpw= document.querySelector('#mpw').value;
        console.log(mid);
        console.log(mpw);
    //2. 처리
    const member={
        mid:mid,
        mpw:mpw
    }
    const memberArray=JSON.parse(localStorage.getItem('memberArray')) ;//기존 배열호출
    memberArray.push(member);   //

    localStorage.setItem('memberArray',JSON.stringify(memberArray));
    //3. 출력[X]
    alert('회원가입 성공');
}