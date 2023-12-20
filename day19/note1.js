//전역변수 
const categoryList = [
{ cname: '신제품(NEW)', cno: 1 },
{ cname: '프리미엄', cno: 2 },
{ cname: '와퍼&주니어', cno: 3 },
{ cname: '치킨&슈림프버거', cno: 4 },
{ cname: '올데이킹&킹모닝', cno: 5 },
];
const product = [
    { cno: 1, pno: 1, pname: '큐브 스테이크 와퍼', pprice: 13000, pimg: 'cube.png' },
    { cno: 1, pno: 2, pname: '더블비프불고기버거', pprice: 11000, pimg: 'doublebeaf.png' },
    { cno: 2, pno: 3, pname: '몬스터 와퍼', pprice: 10000, pimg: 'monster.png' }
];
let cartArray = [];


//함수1 카테고리선택
selCategory(1)
function selCategory(select) {
    //1.어디에
    const category = document.querySelector('#category');
    //2. 무엇을
    let html = '';
    for (let i = 0; i < categoryList.length; i++) {
        html += `<li onclick="selCategory(${categoryList[i].cno})"
        class="${select == categoryList[i].cno ? "select" : ""}">
        ${categoryList[i].cname}</li>`
    }
    //3.출력
    category.innerHTML = html
    printProduct(select)
}

//함수2 제품 출력
function printProduct(select){
    //1.어디에
    const productBox = document.querySelector('#productBox')
    //2. 무엇을
    let html = "";
    for (let i = 0; i < product.length; i++) {
        if (product[i].cno==select ) {
            html += `<div onclick="setCart(${product[i].pno})" class="product">
                        <img src="img/${product[i].pimg}" />
                        <div class="pinfo">
                            <div class="pname">${product[i].pname}</div>
                            <div class="pprice">${product[i].pprice.toLocaleString()}원</div>
                        </div>
                    </div>`
        }
    }
    //3.출력
    productBox.innerHTML = html
}
//함수3.카트를 갱신하는함수
function printCart(){
    //1.어디에
    const Cart=document.querySelector('#cartBottom');
    //2. 무엇을
    let total=0
    let Count= cartArray.length;
    let html=''
    for(let i=0;i<cartArray.length;i++){
        for(let j=0;j<product.length;j++){
            if(cartArray[i]==product[j].pno){
                html+=`<div class="cartItem">
                <div>${product[j].pname}</div>
                <div>${product[j].pprice.toLocaleString()+'원'}</div>
                <span onclick="cartRemove(${i})">X</span>
                </div>`
                total+=product[j].pprice
            }; 
        };
    } 

    //3.출력
    Cart.innerHTML=html;
    document.querySelector('#count').innerHTML=Count;
    document.querySelector('#total').innerHTML=total;

}
//함수4. 카트에 담기
function setCart(select){
    console.log(select)
    cartArray.push(select)
    printCart();
}
//함수5. 카트에서 제거하는 함수
function cartRemove(select){
    console.log(select);
    cartArray.splice(select,1);
    printCart()
}
//함수6. 취소하기
function allRemove(){
    cartArray.splice(0);
    printCart()
}
//함수7. 카테고리등록
function regCategory(select){
    console.log(select);
    categoryList.push({cname:select,cno:categoryList.length+1})
    console.log(categoryList)
    selCategory(1) 
}
//함수8. 제품등록

function regProduct(){
    const productpush =[]
    productpush.push(pname.value,pprice.value,pimg.value,cno.value)
    console.log(productpush)
    let name=productpush[0];console.log(name);
    let price=productpush[1]*1;console.log(price);
    let img=productpush[2];console.log(img);
    let canum=productpush[3]*1;console.log(canum);
    product.push({cno:canum,pno:product.length+1,pname:name,pprice:price,pimg:img})
    console.log(product)
    selCategory(1)
}



