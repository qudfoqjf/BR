let num = Number(prompt("별의 개수"));
let output = '';

// 문제1) 입력받은 수 만큼 * 출력 
for(let i=1;i<=num;i++){
    output+='*';
}
console.log(output);

// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
output = '';
for(let i=1;i<=num;i++){
    output+='*';
    if(i%3==0){output +='\n';}
}
console.log(output);
// 문제3) 입력받은 줄 수 만큼 * 출력
output = '';
for(let i=1;i<=num;i++){
    for(let j=1; j<=i;j++){output+='*';}
    output+= `\n`
}
console.log(output);
// 문제4) 입력받은 줄 수 만큼 * 출력
output = '';
for(let i=1;i<=num;i++){
    for(let j=num; j>=i;j--){output+='*';}
    output+= `\n`
}
console.log(output);
// 문제5) 입력받은 줄 수 만큼 * 출력 
output='';
for(let i=1;i<=num;i++){
    for(let k=num-i;k>0;k--){output+=' '}
    for(let j=1; j<=i;j++){output+='*';}
    output+= `\n`
}
console.log(output);
// 문제6) 입력받은 줄 수 만큼 * 출력 
output = '';
for(let i=1;i<=num;i++){
    for(let k=1;k<i;k++){output+=' '}
    for(let j=num; j>=i;j--){output+='*';}
    output+= `\n`
}
console.log(output);
// 문제7) 입력받은 줄 수 만큼 * 출력 
output = '';
for(let i =1; i<=num; i++){
    for(let k=1; k<=num-i;k++){output+=' '}
    for(let j=1; j<=i*2-1;j++){output+=`*`}
    output+=`\n`
}// for1 end
console.log(output);
// 문제8) 입력받은 줄 수 만큼 * 출력 
output = '';
for(let i =1; i<=num; i++){
    for(let k=1; k<=i-1;k++){output+=' '}
    for(let j=1; j<=2*(num-i)+1;j++){output+=`*`}
    output+=`\n`
}// for1 end
console.log(output);
// 문제9) 입력받은 줄 수 만큼 * 출력  (짝수만)
output = '';
let half = parseInt(num/2)
for(let i =1; i<=num; i++){
    if(i<=half){
    for(let k=1; k<=half-i;k++){output+=' '}
    for(let j=1; j<=i*2-1;j++){output+=`*`}
    output+=`\n`
}else if(i>=half){
    for(let k=1; k<(i-half)-1;k++){output+=' '}
    for(let j=1; j<=2*(num-i)+1;j++){output+=`*`}
    output+=`\n`
} 
}// for1 end
console.log(output);

//문제10)  입력받은 줄 수 만큼 * 출력(홀수만 입력)
output='';
for(let r =1; r<= num; r++){

    for(let c=1; c<=num;c++){
        if(r==c){output+=`*`}
        else if(r+c==num+1){output+=`*`}
        else{output+=' '}
    } 
}
console.log(output);






/* console.log(half)
let center= half+1;
for(let i =1; i<=num;i++){
    if(i < center){

    }
    else if(i==center){}
    else if(i>center){}
} */