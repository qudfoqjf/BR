//1.[C]글쓰기   
function 글쓰기() {
    //1. HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value; 
    const password = document.querySelector('#password').value; 
    const title = document.querySelector('#title').value; 
    const content = document.querySelector('#content').value; 
    let  views = 0
    
    //2. 배열에 저장하기        객체로 변경
    let board = {작성자: writer, 비밀번호: password, 제목: title, 내용: content, 조회수:views}; //위에서가져온 4개의 값을 객체로 저장   
    boardArray=JSON.parse(localStorage.getItem('boardArray'));
    
    if(boardArray==null){boardArray=[]}
    boardArray.push(board);  
    
    //3. 배열을 HTML에 출력하기
    document.querySelector('#writer').value = '';     
    document.querySelector('#password').value = '';   
    document.querySelector('#title').value = '';      
    document.querySelector('#content').value = '';   
    localStorage.setItem('boardArray',JSON.stringify(boardArray));   
    return;             
}