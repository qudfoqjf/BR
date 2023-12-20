/* 
    설계
        1. 경험
        2. 기능 실행 순서
            [키오스크= 사용자입장]
                -카테고리선택->제품선택 ->장바구니 담기 ->결제 내역()
            [포스기=관리자입장]
                -결제 내역(주문상태)
                -카테고리 추가/삭제 기능
                -제품 추가/삭제 기능
        3. 기능에 필요한 메모리(저장-DB설계) 설계
            카테고리=[
            {cno:1,cname:'신제품(NEW)'},
            {cno:1,cname:'프리미엄'},
            {cno:1,cname:'와퍼&주니어'},
            {cno:1,cname:'치킨&슈림프버거'},
            {cno:1,cname:'올데이킹&킹모닝'}
        ]   테이블끼리 연결점 필요
                -관리자가 해당 배열을 추가/삭제

        4. 배열 안에 있는 데이터를 식별할때 기준점.
            사람={이름:'유재석',나이:40세,직업:강사}- 중복이 존재하면 문제발생
            사람={주민등록번호:'930125-1257526',이름:'유재석', 나이:40세,직업:강사}주민등록번호는 중복 절대안됨.

            -인덱스 VS 식별코드생성 VS 이름 
                '신제품(NEW)'-> {cn}
        
*/
/* 전역변수 */
/* 1.카테고리 목록 */
let categoryArray = [
    { cno: 1, cname: '신제품(NEW)' },
    { cno: 2, cname: '프리미엄' },
    { cno: 3, cname: '와퍼&주니어' },
    { cno: 4, cname: '치킨&슈림프버거' },
    { cno: 5, cname: '올데이킹&킹모닝' }
]
/* 2. 제품목록 */
let productArray = [
    { pno: 1, pname: '큐브 스테이크 와퍼', pprice: 15000, pimg: 'cube.png', cno: 1 },
    { pno: 2, pname: '더블비프불고기버거', pprice: 12000, pimg: 'doublebeaf.png', cno: 1 },
    { pno: 3, pname: '몬스터 와퍼', pprice: 11000, pimg: 'monster.png', cno: 2 },
]
printcategory(1); //스크립트가 열렸을때 실행
function printcategory(select) { //매개변수: 함수안으로 들어오는값
    //1.어디에
    const category = document.querySelector('#category');
    //2.무엇을
    let html = "";
    for (let i = 0; i < categoryArray.length; i++) {
        html += `<li onclick="printcategory(${categoryArray[i].cno})" 
        class="${categoryArray[i].cno == select ? 'select' : ''}">
        ${categoryArray[i].cname}</li>`
    }
    //3.출력
    category.innerHTML = html;
    printProduct(select);// 선택된 카테고리 번호를 제품출력함수에 대입
    // 해당 카테고리의 제품만 출력하기위해서
}// f end

// -함수2 : 제품을 출력하는함수(실행조건: 카테고리가 변경되었을 때)
function printProduct(select) {//함수선언 // 전체출력// 내가 선택한 카테고리의 제품만
    console.log(select);
    //1. 어디에
    const productBox = document.querySelector('#productBox');
    //2. 무엇을
    let html = "";
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].cno == select) {
            html += `<div onclick=" setCart(${productArray[i].pno})" class="product">
                        <img src="img/${productArray[i].pimg}"/>
                        <div class="pinfo">
                            <div class="pname">${productArray[i].pname}</div>
                            <div class="pprice">${productArray[i].pprice.toLocaleString()}원</div>
                        </div>
                    </div>`
        }
    }
    //3. 출력
    productBox.innerHTML = html;
}// f end

let cartArray = [];
//-함수3 제품선택시 카트에 제품을담는 함수(실행조건:제품을 클릭했을때)
function setCart(select) {

    //1. 입력

    //2. 처리
    cartArray.push(select);
    //3. 출력
        //1.어디에
        printCart()
}
// 함수4 X버튼을 클릭했을때 카트에서 해당제품삭제
function remove(select) {
    //1. 입력 --> 매개변수로 선택된 삭제인덱스
    //2. 처리 --> 배열에서 해당 인덱스 삭제

    cartArray.splice(select, 1);
    console.log(cartArray);
    printCart()

}

//함수5 카트의 현재상태를 출력하는 함수 (삭제했을때,추가했을때)

function printCart() {
    //1.어디에
    const cartBottom = document.querySelector('#cartBottom');
    //2.무엇을
    let html = "";
    let totalPrice = 0;
    let cartCount = cartArray.length;
    for (let i = 0; i < cartArray.length; i++) {
        for (let j = 0; j < productArray.length; j++) {
            if (cartArray[i] == productArray[j].pno) {
                html += `<div class="cartItem">
                    <div>${productArray[j].pname}</div>
                    <div>${productArray[j].pprice}</div>
                    <span onclick="remove(${i})">X</span>
                </div>`
                totalPrice += productArray[j].pprice;
            }
        }
    }
    //3.출력
    cartBottom.innerHTML = html;
    document.querySelector('#count').innerHTML = cartCount;
    document.querySelector('#total').innerHTML = totalPrice.toLocaleString() + "원";
}

function allRemove(){
    cartArray.splice(0)
    printCart()
}