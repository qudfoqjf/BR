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
}  */
console.log(output)
//문제7
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
console.log(output)