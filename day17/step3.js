
const boardarray = [];    

//1.[C]글쓰기   
function 글쓰기() {
    //1. HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value; 
    const password = document.querySelector('#password').value; 
    const title = document.querySelector('#title').value; 
    const content = document.querySelector('#content').value; 
    //2. 배열에 저장하기        객체로 변경
    const board = {작성자: writer, 비밀번호: password, 제목: title, 내용: content}; //위에서가져온 4개의 값을 객체로 저장
    board.조회수 = 0;
    boardarray.push(board);     //객체내 없는 key 호출 > key생성      
    //3. 배열을 HTML에 출력하기
    document.querySelector('#writer').value = '';     
    document.querySelector('#password').value = '';   
    document.querySelector('#title').value = '';      
    document.querySelector('#content').value = '';   
    모든글출력();       
    return;             
}
//2-1. [R]모든글출력    
function 모든글출력() { 
    const tablebody = document.querySelector('table>tbody'); 
    let html = '';               
    for (let i = 0; i < boardarray.length; i++) {  
        console.log(boardarray);
        html += `<tr onclick="개별글출력(${i})"> 
                        <th>${i}</th>
                        <th>${boardarray[i].제목}</th> 
                        <th>${boardarray[i].작성자}</th>
                        <th>${boardarray[i].조회수}</th>
                    </tr>` 
    }
    tablebody.innerHTML = html; 
    return;
}
//2-2.[R]개별글출력     
function 개별글출력(index) {
    //조회수 증가.
    boardarray[index].조회수+= 1;   모든글출력();
    const boardBox = document.querySelector('#boardBox');   
    let html = `<div> 작성자: ${boardarray[index].작성자} 조회수 ${boardarray[index].조회수}</div> 
                            <div> 제목: ${boardarray[index].제목}</div>
                            <div> 내용: ${boardarray[index].내용.replaceAll("\n", "<br/>")}</div>
                            <input onclick="글수정(${index})" type="button" value="수정"/>
                            <input onclick="글삭제(${index})" type="button" value="삭제"/>
                            `;
    boardBox.innerHTML = html;
    return;
}
//3. [U]글수정  [글수정 버튼을 클릭했을때]
function 글수정(index) {
    console.log(index);

    //1. 검증 [유효성검사]- 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호'); 
    if (checkPw == boardarray[index].비밀번호) {  
        const updatetitle = prompt('수정할 제목');
        const updatecontent = prompt('수정할 내용');
        // 수정 처리
        boardarray[index].제목 = updatetitle;
        boardarray[index].내용 = updatecontent;         
        alert("수정 성공");
        모든글출력(); 개별글출력(index);
    } else { alert('패스워드가 다릅니다. 수정 불가') }
    return;
}
//4. [D]글삭제  [글삭제 버튼을 클릭했을때]
function 글삭제(index) {
    console.log(index);
    const checkPw = prompt('비밀번호');
    if (checkPw == boardarray[index].비밀번호) {
        boardarray.splice(index, 1);
        alert("삭제성공");
        //새로고침
        모든글출력();
        document.querySelector('#boardBox').innerHTML = ""
    } else {
        alert('패스워드가 다릅니다. 삭제 불가')
    } return;
}
