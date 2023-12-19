
const 전국영화관 = [
    {
        지점코드: 1, 지점명: '안산센트럴락', 주소: '고잔로108',
        영화: [
            { 영화코드: 1, 영화이름: '서울의봄', 시간테이블: [{ 관: '1관', 시간: '12:00' }, { 관: '2관', 시간: '14:00' }] },
            { 영화코드: 2, 영화이름: '노량', 시간테이블: [{ 관: '6관', 시간: '15:00' }, { 관: '7관', 시간: '18:00' }] }
        ]
    },
    { 지점코드: 2, 지점명: '안산고잔', 주소: '고잔로108', 영화: ['서울의봄', '3일의 휴가'] },
    { 지점코드: 3, 지점명: '안산롯데시네마', 주소: '고잔로108', 영화: ['서울의봄', '노량'] },
    { 지점코드: 3, 지점명: '안산롯데시네마', 주소: '고잔로108', 영화: ['서울의봄', '노량'] }
]
cinemaload();
function cinemaload() {
    //1. 어디에
    let cinema = document.querySelector('#cinema');
    //2. 무엇을   
    let html = "";
    for (let i = 0; i < 전국영화관.length; i++) {
        html += `<span style="margin:10px"
         onclick="movie(${전국영화관[i].지점코드})">
         ${전국영화관[i].지점명}
         </span>`
    }
    //3.출력
    cinema.innerHTML = html;
}
function movie(select) {
    //1. 어디에
    let movie = document.querySelector('#movie');
    //2. 무엇을
    let html = "";
    //1. 선택한 지점코드 찾기.
    for (let i = 0; i < 전국영화관.length; i++) {
        // 만약에 전국영화관내 지점코드중에 내가 선택한 지점코드와 같으면
        if (전국영화관[i].지점코드 == select) {
            //2. 찾았으면 해당 지점의 영화 출력
            for (let j = 0; j < 전국영화관[i].영화.length; j++) {
                html += `<span style="margin:10px"
                    onclick="time()">${전국영화관[i].영화[j].영화이름}
                    </span>`
            }//for end
        }
    }//for end
    //3. 출력
    movie.innerHTML = html;
}
function time(선택한지점코드, 영화인덱스) {
    //1. 어디에
    const time = document.querySelector('time');
    //2. 무엇을
    let html = "";
    //지점에 영화에 시간테이블 출력
    for (let i = 0; i < 전국영화관.length; i++) {
        if (전국영화관[i].지점코드 == 선택한지점코드) {
            //2.지점에 영화찾기
            for (let j = 0; j < 전국영화출력[i].영화.length; j++) {
                if (전국영화관[i].영화[j].영화코드 == 선택한지점코드) {
                    //3. 지점에 영화의타임테이블 출력
                    for (let t = 0; t < 전국영화관[i].영화[j].시간테이블.length; t++) {
                        html += `<span style="margin:10px"
                            ${전국영화관[i].영화[j].시간테이블[t].관}
                            ${전국영화관[i].영화[j].시간테이블[t].시간}
                            </span>`
                    }
                }
            }
        }
    }
    //3. 출력
    time.innerHTML = html;
}
