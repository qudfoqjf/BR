document.addEventListener('DOMContentLoaded', function () {
    //문서 객체 가져오기
    const input = document.querySelector('#todo')
    const todoList = document.querySelector('#todo-list')
    const addButton = document.querySelector('#add-button')

    let keyCount = 0;

    //함수선언
    const addTodo = function () {
        if (input.value.trim() === '') {//trim() 좌우 공백제거
            alert('할 일을 입력해주세요')
            return
        }

        //문서객체 설정
        const item = document.createElement('div')
        const checkbox = document.createElement('input')
        const text = document.createElement('span')
        const button = document.createElement('button')

        // 문서객체 식별키
        const key = keyCount
        keyCount += 1

        //item 객체 조작및 추가
        item.setAttribute('data-key', key)
        item.appendChild(checkbox)
        item.appendChild(text)
        item.appendChild(button)
        todoList.appendChild(item)

        //checkbox 객체 조작
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change', function (event) {
            item.style.textDecoration
                = event.target.checked ? 'line-through' : ''
        })

        //text 객체 조작
        text.textContent = input.value

        //button 객체 조작
        button.textContent = '제거하기'
        button.addEventListener('click', function () {
            removeTodo(key)
        })

        // 입력양식 초기화
        input.value = ''

    }

    //식별 키로 문서 객체제거
    const removeTodo = function (key) {
        const item=document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item)
    }

    addButton.addEventListener('click',addTodo)
    input.addEventListener('keyup',function(event){
        const ENTER=13
        if(event.keyCode===ENTER){
            addTodo()
        }
    })
})