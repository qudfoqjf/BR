let output = '';
/* //문제1
const vlaue1= Number(prompt('수 입력'));
for(let i=1; i<=vlaue1;i++){
    output+='*';
}// for end
console.log(output); */
/* //문제2
output = '';
const vlaue2= Number(prompt('수 입력'));
for(let i=1; i<=vlaue2;i++){
    output+='*';
    if(i%3==0){output +='\n';}
}// for end
console.log(output); */
/* //문제3
output = '';
const line3= Number(prompt('문제3 줄수: '));
for(let i=1;i<= line3;i++){
    for(let j=1;j<=j;j++){output+='*'}//for2 end
    output+= `\n`
}//for1 end
console.log(output); */
/* //문제4
output = '';
const line4= Number(prompt('문제4 줄수: '));
for(let i=1; i<=line4;i++){//행출력
for(let s=1; s<=line4-i+1; s++){
    output+='*'
    }//for2 end
    output +=`\n`
}   //for1 end
console.log(output); */

//문제5
/* output = '';
const line5=Number(prompt(`문제5 줄수:`));
for(let i=1;i<=line5;i++){//행
    //[공백]
    for(let b= 1; b<=line5-i; b++){output+=''}
    //[별]
    for(let s=;;s++)
} 
console.log(output); */
//문제6
/* output = '';
const line6=Number(prompt('문제6 줄수:'));
for(let i=1;i<=line6;i++){
    //[공백]
    for(let b =1; b<=i-1;b++){output+='';}
    //[별]
    for(let s =1; s<=line6-i+1;s++){output+='*';}
    //[줄바꿈]
    output+='\n';
}  
console.log(output) */
/* //문제7
output = '';
const line7=Number(prompt('문제7 줄수:'));
for(let i=1;i<=line7;i++){
    for(let k=1; k<=line7-i;k++){output+=' '}
    for(let j=1; j<=i*2-1;j++){output+=`*`}
    output+=`\n`
}
console.log(output)
//문제8
output = '';
const line8=Number(prompt('문제8 줄수:'));
for(let i=1;i<=line8;i++){
    //[공백]
    for(let b =1; b<=i-1;b++){output+=' '}
    //[별]
    for(let s=1; s<=(line8*2)-(i*2-1);s++){output+='*'}
    //[줄바꿈]
    output+='\n';
}
console.log(output) */

//문제10
/* output='';
const line10=Number(prompt('문제10 줄수:'));

for(let r =1; r<= line10; r++){

        for(let c=1; c<=line10;c++){
            if(r==c){output+=`*`}
            else if(r+c==line10+1){output+=`*`}
            else{output+=' '}
        }      
}   output+='\n';
console.log(output); */

// 문제 10-2
function 문제10() {
    const line = Number(document.querySelector('#line10').value);
    let html = '';
    //[행]
    for (let r = 1; r <= line; r++) {
        html += `<tr>`; // 행 시작
        //[열]
        for (let c = 1; c <= line; c++) {
            if (c == r) { html += `<td>★</td>` }
            else if (c+r == line + 1) { html += `<td>★</td>` }
            else{ html += `<td> </td>`; }
        }
        // 줄 끝
        html += `</tr>`;
    }
    const tableObj = document.querySelector('#table10');
    tableObj.innerHTML = html;
} //f end

function 문제9(){ //f start
    const line = Number(document.querySelector('#line9').value);
    let half = parseInt((line/2))+1;
    let html = '';
        // [행]
            for(let r= 1; r<=line; r++){
                html+=`<tr>`; // 행 시작

                //[열]
                if(r<=half){
                    for(let c =1; c<=half-r+1; c++){ html +=`<td> </td>`}
                    for(let c =1; c<=r*2-1; c++){ html +=`<td>★</td>`}         
                }
                else if(r>half){
                    for(let c=1; c<=(r-half)+1;c++){ html +=`<td> </td>`}
                    for(let c=1; c<=2*(line-r)+1;c++){html +=`<td>★</td>`}
                }
            }
            const tableObj = document.querySelector('#table9');
            tableObj.innerHTML = html;







} // f end