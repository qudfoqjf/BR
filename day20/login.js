function 로그인(){
    console.log('로그인()함수')
    //1.[입력]
    const mid = document.querySelector('#mid').value
    const mpw = document.querySelector('#mpw').value
    //2.[처리] 기존에있던 데이터와 입력받은데이터와 비교

        //기존 가져오기
    const memberArray = JSON.parse(localStorage.getItem('memberArray'));

    const member={mid:mid,mpw:mpw}

    //3. 비교
    for(let i=0;i<memberArray.length;i++){
        let oldMember=memberArray[i];
        if(oldMember.mid==member,mid&&oldMember.mpw==member.mpw){
            alert('로그인 성공'); return;   //찾으면 함수종료
        }
    }
    alert('동일한 회원정보가 없습니다.')
}