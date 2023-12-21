function 글출력() { 
    const tablebody = document.querySelector('table>tbody'); 
    const boardArray = JSON.parse(localStorage.getItem('boardArray'));
    let html='';              
    for (let i = 0; i < boardArray.length; i++) {  
        console.log(boardArray);
            html += `<tr onclick="개별글출력(${i})"> 
                        <th>${i}</th>
                        <th>${boardArray[i].제목}</th> 
                        <th>${boardArray[i].작성자}</th>
                        <th>${boardArray[i].조회수}</th>
                    </tr>` 
    };
    console.log(html);
    tablebody.innerHTML = html; 
    return;
}
글출력()

function 개별글출력(index){

const boardArray = JSON.parse(localStorage.getItem('boardArray'));
boardArray[index].조회수+=1;
localStorage.setItem('boardArray',JSON.stringify(boardArray));  
location.href="view.html"
localStorage.setItem('selectNum',JSON.stringify(index));
}