//예1
console.log(localStorage.getItem('이름'))
//console.log(_object.이름);      //js는 html이 새로고침되거나/바뀌면 호출 불가능

//예2
const 회원정보목록=localStorage.getItem('회원정보목록')
console.log(회원정보목록);
console.log(회원정보목록[0].이름);

const 회원정보목록2=JSON.parse(localStorage.getItem('회원정보목록2'));
console.log(회원정보목록2);         //(2)
console.log(회원정보목록2[0].이름); //이름