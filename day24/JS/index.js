/* 
    -게시물(상위)
    -댓글(하위)
        1. 관계파악 
        2. 데이터
            게시물: 대표이미지, 등록날짜, 내용, 좋아요수, 싫어요수 , 비밀번호(수정/삭제시)
            댓글: 내용, 등록날짜, 비밀번호(삭제시 사용)
        3. 식별자
            1. 인덱스[인덱스 변화 있을경우 식별자 역할이 불가능, 임시로만 가능]
            2. 식별자만들기[1.자동번호(1씩증가)2. 데이터조합등등]중복이 없어야한다!!.
        4. 관계데이터 대입[하위에서 상위의 식별을 가지고 있어야한다.]
            게시물: +게시물번호
            댓글: +댓글번호 +게시물번호
*/

let feedList = [
    {
        fno: 1,
        fimg: 'bts.png',
        fdate: '2023-12-28',
        fcontent: `방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨
                    전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수
                    있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은
                    곳이기도 합니다. 주말 데이트로 #아원고택 어때요?`,
        fgood: 30,
        fbad: 0,
        fpwd: 1234
    },
    {
        fno: 2,
        fimg: 'bts.png',
        fdate: '2023-12-28',
        fcontent: `방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨`,
        fgood: 302,
        fbad: 0,
        fpwd: 1234
    },
    {
        fno: 3,
        fimg: 'bts.png',
        fdate: '2023-12-28',
        fcontent: `  전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수
                    있는 갤러리부터 주변에 특색 있는 산책길까지 한 편의 수채화 같은
                    곳이기도 합니다.`,
        fgood: 130,
        fbad: 0,
        fpwd: 1234
    },
    {
        fno: 4,
        fimg: 'bts.png',
        fdate: '2023-12-28',
        fcontent: `주말 데이트로 #아원고택 어때요?`,
        fgood: 32101,
        fbad: 0,
        fpwd: 1234
    }
];
let replyList = [
    {
        rno: 1,
        fno: 1,    /* 참조할 게시물 번호 = 상위의 식별번호 */
        rdate: '2023-12-29',
        rcontent: '댓글1',
        rpwd: '1234'
    },
    {
        rno: 2,
        fno: 2,    /* 참조할 게시물 번호 = 상위의 식별번호 */
        rdate: '2023-12-29',
        rcontent: '댓글2',
        rpwd: '1234'
    }
    ,
    {
        rno: 3,
        fno: 3,    /* 참조할 게시물 번호 = 상위의 식별번호 */
        rdate: '2023-12-29',
        rcontent: '댓글3',
        rpwd: '1234'
    }
];
document.addEventListener('DOMContentLoaded', function () {
    모든피드호출()
})

//-------------------------------------------------------------------------------------------------

//[1]모든 피드(게시물) 출력함수(1. js가 열렸을때 2. 등록, 삭제, 댓글등록/삭제)
function 모든피드호출() {

    //!!!!!!!! : 샘플대신 localStorage에 있는 데이터 사용.
    let feedList=JSON.parse(localStorage.getItem('feedList'))
    //1. 어디에
    const feedBox = document.querySelector('#feedBox');

    //2. 무엇을
    let html = '';
    //2-1 모든피드 출력[피드목록/ 배열에 있는 객체들을 하나씩 제출]
    for (let i = 0; i < feedList.length; i++) {

        const feed=feedList[i]
        html += `<div class="feed">
                    <div><img src="${feed.fimg}" /></div><!-- 이미지 구역 -->
                    <div class="contentBox">
                        <div class="date">1시간전</div><!-- 날짜 -->
                        <div class="content">${feed.fcontent}</div>
                        </div><!-- 내용 구역 -->
                        <div class="button"><!-- 좋아요 구역 -->
                        <div> <!-- 왼쪽버튼들 -->
                            <button onclick="수정페이지이동(${feed.fno})" type="button">수정</button>
                            <button onclick="피드삭제(${feed.fno})" type="button">삭제</button>
                            <button type="button">답글</button>
                        </div>
                        <div>
                            <span>👍${feed.fgood}</span>
                            <span>👎${feed.fbad}</span>
                        </div>
                    </div>
                    <div class="replyBox">
                        ${댓글출력(feed.fno)}
                    </div>
                </div>`
    }

    //3. 출력
    feedBox.innerHTML = html
}   //f end

//[2] 피드/게시물의 해당하는 댓글 모두 출력하는 함수 정의(1.피드/게시물 출력시 같이)
function 댓글출력(fno){
    let html='';
    //모든 갯글목록에서 fno를 찾아서 일치하면 댓글HTML 구성
    for(let i=0;i<replyList.length;i++){
        if(fno==replyList[i].fno){
            html+=`<div class="reply">
            <div></div>
            <div>
                <span class="date"></span>
                <button type="button">X</button>
            </div>
        </div>`
        }
    }
    return html
}

//[3]삭제함수. (1.삭제버튼 눌렀을때)
function 피드삭제(fno){    //매개변수: 삭제할 pno
    if(패스워드확인(fno)){return;}
    const feedList=JSON.parse(localStorage.getItem('feedList'));
    for(let i =0;i<feedList.length;i++){
        //2. 찾은객체의 fpwd와 입력받은 패스워드 일치여부
        if(feedList[i].fno==fno){ 
            feedList.splice(i,1);
            alert('삭제되었습니다')
            localStorage.setItem('feedList',JSON.stringify(feedList));
            모든피드호출();
            //!!!!!:삭제는 1번
            return;
        }
            
    }
        
}//f end


//[4] 수정페이지로 이동함수. (1. 수정버튼을 클릭했을때)
function 수정페이지이동(fno){
    if(패스워드확인(fno)){return;}
    localStorage.setItem('updatefno',JSON.stringify(fno));
    location.href="update.html"
}//f end

//[5] 패스워드 검사 (1.삭제/수정했을때)
function 패스워드확인(fno){
    //1. 확인패스워드 입력
    const pwdConfirm=prompt('피드의 비밀번호 확인');
    //2. 패스워드 일치 여부 확인
        //1. 피드목록에서 fno 객체 찾기.
        const feedList=JSON.parse(localStorage.getItem('feedList'));
        for(let i =0;i<feedList.length;i++){
             //2. 찾은객체의 fpwd와 입력받은 패스워드 일치여부
             if(feedList[i].fno==fno&& feedList[i].fpwd==pwdConfirm){
                return false;
             }
        }
        alert('비밀번호가 일치하지 않습니다')
        return true;  
}