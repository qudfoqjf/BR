//전역 자료
const dateList =[];
const contentList =[];
const costList =[];
let compareArray=[];

//1. 등록함수
function Register(){
    //[1.입력]
    const date =document.querySelector('#date').value; console.log(date)
    const content =document.querySelector('#content').value; console.log(content)
    const cost =document.querySelector('#cost').value; console.log(cost)
    let date2= date.split("-");
    let compare= Number(date2[0])*10000+Number(date2[1])*100+Number(date2[2])*1;console.log(compare);
    compareArray.push(compare);
    console.log(compareArray);
    //[2.처리]
    dateList.push(date); contentList.push(content); costList.push(cost);
    if(dateList.length>1){
        for(let i=0;i<dateList.length;i++){
            
    }}
    //[3.출력]
    
    output();
    Sum();
}

//2. 출력함수
function output(){
    const write=document.querySelector('#write');
    let html=''
    for (let i=0;i<dateList.length;i++){
        rest(costList[i])
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
    for(i=0;i<costList.length;i++){total+=Number(costList[i])};
    let a=total*1;
    sum.innerHTML =rest(a);
}

//5. 쉼표함수
function rest(tal){   
    let to= String(tal); console.log(to);
    let splt = to.split(''); console.log(splt);
    let tt =''
    if(splt.length%3==0){
        for(i=1;i<=splt.length;i++){
            if(i%3==0&& i!=splt.length){tt+=splt[i-1]+','}
            else {tt+=splt[i-1]}
            }
    }
    else if(splt.length%3==1){
        for(i=1;i<=splt.length;i++){
            if(i%3==1&& i!=splt.length){tt+=splt[i-1]+','}
            else {tt+=splt[i-1]}
        }
    }
    else if(splt.length%3==2){
        for(i=1;i<=splt.length;i++){
            if(i%3==2&& i!=splt.length){tt+=splt[i-1]+','}
            else {tt+=splt[i-1]}
        }
    }
    console.log (tt)
    return tt
}

//6. 오름차순 함수
/* function sort(){
    for(let i=0;i<dateList.length;i++){
    date= dateList[i].split("-");
    let all=Number(date[0])*1000+Number(date[1])*100+Number(date[2])*1;
    console.log(all);
    
}
    
} */