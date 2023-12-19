const 지역 = [{ 이름: '안산', 지역번호: 1 }, { 이름: '안양', 지역번호: 2 }, { 이름: '수원', 지역번호: 3 }];
const 지점 = [
    { 이름: '센트럴락', 지역번호: 1, 지점번호: 1, 주소: '고잔로 108' },
    { 이름: '고잔', 지역번호: 1, 지점번호: 2, 주소: '호수동 광덕대로' },
    { 이름: '안산롯데시네마', 지역번호: 1, 지점번호: 3, 주소: '성포동 항가울로 422' }];

const 영화목록 = [{이름:'서울의봄',지점번호: 1, 영화번호: 1},{이름:'노량',지점번호: 1, 영화번호: 2}, {이름:'아쿠아맨',지점번호: 1, 영화번호: 3}]

const 관목록 = [{ 이름: '1관', 지점번호: 1, 수용인원: 70 }, { 이름: '2관', 지점번호: 1, 수용인원: 80 }, { 이름: '3관', 지점번호: 1, 수용인원: 90 },]

const 시간테이블 = [{ 시간: '11:20', 영화번호: 1 }, { 시간: '12:40' , 영화번호: 1}, { 시간: '17:00', 영화번호: 1 },{ 시간: '11:10' , 영화번호: 1}, { 시간: '12:40', 영화번호: 1 }, { 시간: '15:00', 영화번호: 1 }]
regionload();
function regionload(select) {
    //1. 어디에
    let region = document.querySelector('#region');
    //2. 무엇을  
    let html = ""
    for (let i = 0; i < 지역.length; i++) {
        html += `<span style="margin:10px"
         onclick="cinema(${지역[i].지역번호})">${지역[i].이름}
         </span>`;
    }
    //3.출력
    region.innerHTML = html;
}
function cinema(select) {
    console.log(select)
    //1. 어디에
    let cinema = document.querySelector('#cinema');
    //2. 무엇을  
    let html = "";
    for (let i = 0; i < 지역.length; i++) {
        if (지점[i].지역번호 == select) {
            for (i = 0; i < 지점.length; i++) {
                html += `<span style="margin:10px"
                onclick="movie(${지점[i].지점번호})">
                ${지점[i].이름}
                </span>`
            }
        }
    }
    //3.출력
    cinema.innerHTML = html;
}
function movie(select) {
    console.log(select)
    //1. 어디에
    let movie = document.querySelector('#movie');
    //2. 무엇을  
    let html = "";
    for (let i = 0; i < 지점.length; i++) {
        if (영화목록[i].지점번호 == select) {
            for (i = 0; i < 영화목록.length; i++) {
                html += `<span style="margin:10px"
                onclick="time(${영화목록[i].영화번호})">
                ${영화목록[i].이름}
                </span>`
            }
        }
    }
    //3.출력
    movie.innerHTML = html;
}
function time(select){
    console.log(select)
    //1. 어디에
    let time = document.querySelector('#time');
    //2. 무엇을  
    let html = "";
    for (let i = 0; i < 영화목록.length; i++) {
        if (시간테이블[i].영화번호 == select) {
            for (i = 0; i < 시간테이블.length; i++) {
                html += `<span style="margin:10px"
                onclick="time(${시간테이블[i].영화번호})">
                ${시간테이블[i].시간}
                </span>`
            }
        }
    }
    //3.출력
    time.innerHTML = html;
};