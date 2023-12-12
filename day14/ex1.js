let num = prompt("별의 개수");

// 문제1) 입력받은 수 만큼 * 출력 
for(let i=1;i<=num;i++){
    document.write('*');
}
// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
for(let i=0;i<=num;i++){
    document.write('*');
    if(i%3==0){document.write('\n')}
}
// 문제3) 입력받은 줄 수 만큼 * 출력