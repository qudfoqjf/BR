//2-2.[R]개별글출력     
function 개별글출력() {
    const boardBox = document.querySelector('#boardBox'); 
    const boardarray = JSON.parse(localStorage.getItem('boardArray'));
    let index=JSON.parse(localStorage.getItem('selectNum'));
    console.log(index)
    let html = `<div> 작성자: ${boardarray[index].작성자} </div> 
                            <div> 제목: ${boardarray[index].제목}</div>
                            <div> 내용: ${boardarray[index].내용.replaceAll("\n", "<br/>")}</div>
                            <input onclick="글수정(${index})" type="button" value="수정"/>
                            <input onclick="글삭제(${index})" type="button" value="삭제"/>
                            `;
    boardBox.innerHTML = html;
    return;
}
개별글출력()
//3. [U]글수정  [글수정 버튼을 클릭했을때]
function 글수정() {
    let index=JSON.parse(localStorage.getItem('selectNum'));
    //1. 검증 [유효성검사]- 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호'); 
    let boardarray = JSON.parse(localStorage.getItem('boardArray'));
    if (checkPw == boardarray[index].비밀번호) {  
        const updatetitle = prompt('수정할 제목');
        const updatecontent = prompt('수정할 내용');
        // 수정 처리
        boardarray = JSON.parse(localStorage.getItem('boardArray'));
        boardarray[index].제목 = updatetitle;
        boardarray[index].내용 = updatecontent;  
        localStorage.setItem('boardArray',JSON.stringify(boardarray));      
       /*  localStorage.setItem(`boardArray`,(updatetitle))
        localStorage.setItem(`boardArray`,(updatecontent))  */ 
        alert("수정 성공");
        개별글출력();
    } else { alert('패스워드가 다릅니다. 수정 불가') }
    return;
}
//4. [D]글삭제  [글삭제 버튼을 클릭했을때]
function 글삭제() {
    const boardarray = JSON.parse(localStorage.getItem('boardArray'));
    let index=JSON.parse(localStorage.getItem('selectNum'));
    const checkPw = prompt('비밀번호');
    if (checkPw == boardarray[index].비밀번호) {
        boardarray.splice(index, 1);
        localStorage.setItem('boardArray',JSON.stringify(boardarray));
        alert("삭제성공");
        //새로고침
        document.querySelector('#boardBox').innerHTML = ""
        location.href="list.html" 
    } else {
        alert('패스워드가 다릅니다. 삭제 불가')
    } return;
}
