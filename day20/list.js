function 글출력() { 
    const tablebody = document.querySelector('table>tbody'); 
    const boardArray = JSON.parse(localStorage.getItem('boardArray'));
    let html='';              
    for (let i = 0; i < boardArray.length; i++) {  
        console.log(boardArray);
            html += `<tr> 
                        <th>${i}</th>
                        <th>${boardArray[i].제목}</th> 
                        <th>${boardArray[i].작성자}</th>
                    </tr>` 
    };
    console.log(html);
    tablebody.innerHTML = html; 
    return;
}
글출력()
location.href="view.html"