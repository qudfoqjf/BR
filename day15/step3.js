//전역 자료
const todoList = [];              //할 일의 내용을 저장.
const stateList = [];            //할 일의 상태를 저장.
//지역 자료[함수안에서 선언]


//1. 등록 함수: 매개변수, 리턴값
function Register() {
    console.log('Register()실행')
    //[1.입력]:HTML INPUT으로부터 입력된 값을 가져온다.
    const content = document.querySelector('#content').value; console.log(content);
    //[2.처리]: 입력받은 값을 배열에 저장한다.
    todoList.push(content);
    stateList.push(false); //할일의 상태를 입력받지 않고 초기값을 임의로 false
    console.log(todoList); console.log(stateList);
    document.querySelector('#content').value = ''; alert('등록 성공');
    //[3.출력]
    output()
}


//2. 변경 함수: 매개변수=변경할 인덱스, 리턴값X
function Change(chgIndex) {
    console.log('Change()실행 + chgIndex')
    //[1.입력]X
    //[2.처리]false -> true / true -> false
    stateList[chgIndex] = !stateList[chgIndex]; //기존의 반대를 대입
    console.log(stateList);
    //[3.출력]
    output();
}


//3. 삭제 함수: 매개변수, 리턴값
function Delete(delIndex) {
    console.log('Delete()실행 + delIndex')
    //[1.입력]X
    //[2.처리]
    todoList.splice(delIndex, 1);
    stateList.splice(delIndex, 1);
    //[3.출력]
    output()
}

//4.출력 함수 [등록후, 변경후, 삭제후= 배열의 최신상태를 HTML대입]
function output() {

    //1.[어디에] todoBottom에
    const todoBottom = document.querySelector('#todoBottom');
    //2.[무엇을] 배열에있는 여러요소들을
    let html = '';// 초기값은 반문자열
    for (let i = 0; i < todoList.length; i++) {
        html += `<div class="todo ${stateList[i] ? 'success' : ''} ">              
                <div class="content">${todoList[i]}</div>
                <div class="btnBox">
                    <input onclick="Change(${i})" type="button" value="변경"/>
                    <input onclick="Delete(${i})" type="button" value="삭제"/>
                </div>
                </div>`}
    //3.[대입]
    todoBottom.innerHTML = html;
}
