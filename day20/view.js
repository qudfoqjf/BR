//2-2.[R]개별글출력     
function 개별글출력(index) {
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