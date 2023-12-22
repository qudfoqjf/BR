//p.276 Math 객체

const num = Math.random();      // 0 ~ 1 사이 난수
console.log(num);

// 0~10 사이의 난수
console.log(num*10);
// 0~50 사이의 난수
console.log(num*50);
// 1~50 사이의 난수
console.log(num*50+1);

// 5이상~5미만 사이의 난수
console.log(num*10 -5);
// -25이상~25미만 사이의 난수
console.log(num*50-25);

console.log(Math.floor(3.14));  //Math.floor 소수점 버림
console.log(parseInt(3.14));    //parseInt() 정수로 변환
console.log(3.14.toFixed(0));   //toFixed 반올림실행


// -5이상 5미만 사이의 정수만
console.log(Math.floor(num*10-5));
// -25이상~25미만 사이의 정수만 
console.log(Math.floor(num*50-25));

//p.291: 객체 속성 여부 확인
// 객체 속성
const object={
    name:'혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
}
// 객체 내부에 속성이 있는지 확인합니다.
if(object.name!==undefined){
    console.log('name속성이 있습니다.')
}else{console.log('name속성이 없습니다.')}

if(object.author!==undefined){
    console.log('author속성이 있습니다')
}else{console.log('name속성이 없습니다.')}


