//0. 전역변수
    //- 속성[상태]마다 배열 하나씩 만들면 배열이 너무 많아져, 관리가 힘듬
    //- 객체지향 나오기전... 여러속성들을 하나의 배열에서 관리가 필요
        //1. boardarray = [
            //하나의 서로다른 유형의 4가지의 데이터 저장하면 인덱스 관리 힘듬
        //2. boardarray = ["작성자/비밀번호/제목/내용, 작성자/비밀번호/제목/내용, 작성자/비밀번호/제목/내용"]
            // -기준문자 추가해서 여러개의 데이터를 저장한다.
            // -여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 "단 구분이 있어야함"[ 구분 문자는 개발자 마음]
            // -입력 데이터에는 구분 문자가 포함되면 안된다.
const boardarray=[];

//1.[C]글쓰기   [글쓰기 버튼을 클릭했을때/]
function 글쓰기(){//매개변수: X // 리턴값: X
    //1. HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    //2. 배열에 저장하기
    const board =`${writer}/${password}/${title}/${content}`;
    boardarray.push(board); console.log(boardarray);
    //3. 배열을 HTML에 출력하기
    document.querySelector('#writer').value='';
    document.querySelector('#password').value='';
    document.querySelector('#title').value='';
    document.querySelector('#content').value='';
    모든글출력();
    return;
} 
//2-1. [R]모든글출력    [1.js가 열렸을때 2. 글쓰기/글수정/글삭제 처리 할때마다]
function 모든글출력(){  // 매개변수: X 리턴값: X
    const tablebody= document.querySelector('table>tbody');
    let html= '';
    for(let i=0; i<boardarray.length;i++){
        console.log(boardarray);
        html+=`<tr onclick="개별글출력(${i})">
            <th>${i}</th>
            <th>${boardarray[i].split("/")[2]}</th> 
            <th>${boardarray[i].split("/")[0]}</th>
        </tr>`
    }
    tablebody.innerHTML=html;

    return;
} 
//2-2.[R]개별글출력     [해당글을 선택했을때]
function 개별글출력(index){// 매개변수: (대상)보고자하는 식별번호 리턴값: X
    console.log(index);
    const boardBox = document.querySelector('#boardBox');
    // replaceAll("교체할 문자열", "새로운 문자열"): 특정 문자열 치환
    // \n을 <br/>로 변경:
    console.log(boardarray[index].split("/")[3].replaceAll('\n', '<br/>'))
    let html = `<div> 작성자: ${boardarray[index].split("/")[0]}</div>
                <div> 제목: ${boardarray[index].split("/")[2]}</div>
                <div> 내용: ${boardarray[index].split("/")[3].replaceAll("\n","<br/>")}</div>
                <input onclick="글수정(${index})" type="button" value="수정"/>
                <input onclick="글삭제(${index})" type="button" value="삭제"/>
               `;
    boardBox.innerHTML=html;
    return;

} 
//3. [U]글수정  [글수정 버튼을 클릭했을때]
function 글수정(index){// 매개변수: (대상)수정할 식별번호 리턴값: X
    console.log(index);

    //1. 검증 [유효성검사]- 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호');
    if(checkPw==boardarray[index].split("/")[1]){
        const updatetitle= prompt('수정할 제목');
        const updatecontent= prompt('수정할 내용');
        // 수정 처리
        boardarray[index]=`${boardarray[index].split('/')[0]}/
                           ${boardarray[index].split('/')[1]}/
                           ${updatetitle}/${updatecontent}             
        `
        alert("수정 성공");
        모든글출력();개별글출력(index);
    }else{ alert('패스워드가 다릅니다. 수정 불가')}
    
    return;
}     
//4. [D]글삭제  [글삭제 버튼을 클릭했을때]
function 글삭제(index){// 매개변수: (대상)삭제할 식별번호 리턴값: X
    console.log(index);
    const checkPw= prompt('비밀번호');
    if(checkPw==boardarray[index].split("/")[1]){
        boardarray.splice(index,1);
        alert("삭제성공");
        //새로고침
        모든글출력();
        document.querySelector('#boardBox').innerHTML=""
    }else{
        alert('패스워드가 다릅니다. 삭제 불가')
    }
    return;
}     
/* 
    함수 만들때 고민할점.
    1.
    2.
    3.
    4.

*/