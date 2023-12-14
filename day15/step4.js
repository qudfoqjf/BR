//전역 자료
const dateList =[];
const contentList =[];
const costList =[];

//1. 등록함수
function Register(){
    //[1.입력]
    const date =document.querySelector('#date').value; console.log(date)
    const content =document.querySelector('#content').value; console.log(content)
    const cost =document.querySelector('#cost').value; console.log(cost)
    //[2.처리]
    dateList.push(date); contentList.push(content); costList.push(cost);
    console.log(dateList);console.log(contentList);console.log(costList);
    //[3.출력]
    output();
    Sum();
    rest();
}

//2. 출력함수
function output(){
    const write=document.querySelector('#write');
    let html=''
    for (let i=0;i<dateList.length;i++){
        html+= `<tr>
        <td>${dateList[i]}</td>
        <td>${contentList[i]}</td>
        <td>${costList[i]}</td>
        <td><input type="button" onclick="Delete()" value="삭제"/></td>       
        </tr>`
    }
    write.innerHTML = html;
}

//3. 삭제함수
function Delete(delIndex) {
    dateList.splice(delIndex,1);
    contentList.splice(delIndex,1);
    costList.splice(delIndex,1);
    output();
    Sum();
}

//4. 합계함수
function Sum(){
    const sum =document.querySelector('#sum');
    let total = 0;   
    for(i=0;i<costList.length;i++){total+=Number(costList[i])}   
    sum.innerHTML =Number(total);
}

//5. 쉼표함수
function rest(){
    let leng= ('cost').length; console.log(leng);
    let slice = 'cost'.split ; console.log(slice)
    if(leng>3){}
}
