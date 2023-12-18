/* 
1. 숫자         1 vs 2 vs 3 
2. 문자열       "" vs'' vs ""
3. 불   true vs false
4. undefined     자료 데이터 없다 뜻. undefinde vs "" vs 0
5. 배열         [자료, 자료, 자료 ]
                -1.[숫자,문자열, 불, 배열]
                -2.[숫자, 문자열, 불, 배열[], 변수, 상수, 함수]
6. 함수          funtion 
                    -1 const/let 변수명 = funtion(){}
                    -2 function 함수명() {}
7. 객체(object){key: value, key: value, key: value}
                -{
                    keyName:1,
                    keyName:"유재석",
                    keyName:true ,
                    keyName:[],
                    keyName:{},
                    keyName: funtion(){}
                }
*/
// p.246
const product= {
    제품명: '7D 건조 망고', //key '제품명', value: '7D 건조 망고' = 속성property
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};
// 2. 객체 호출
console.log(product);
// 3. 객체내 속성 호출    객체명.keyname vs 객체명['keyname']: 해당하는 키의 값을 호출 
console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);
console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);

//p.248
const 객체2={
    number:273,
    string: '구름',
    boolean: true,
    array:[52, 273, 103, 27],

    method: function( ){},
    객체3 : {method2: function(){}}
};

console.log(객체2) // console:객체 내 log속석ㅇ에 함수 호출.
// document.querySelector(); //document 객체내의 querySelector속성에 함수 호출
// .(온점) : 접근연산자: 객체내 속성에 접근.
객체2.method();         //객체내 속성(메소드) 호출
객체2.객체3.method2();  //객체내 속성(객체3내 속성 (메소드2)호출)호출

//p.249
const pet={
    name:'구름',
    eat: function(food){
        alert(this.name+' 은/는'+food+' 을/를 먹습니다.' )
        // this란 현재 객체내의 속성명을 호출할때 사용하는 키워드.
        // this.key
    },
    eat2(food){}
};
pet.eat('밥');
//p.249,250
const student={};
student.이름='윤인성';
student.취미='악기';
student.장래희망='생명공학자';
//p.251 속성제거 
delete student.장래희망
console.log(student);

//p.254 확인문제
/* 1. {
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
    2. 3
    3. 1
    4. this.ko 빵
       this.lang[es] 스페인어
       this[es] pan
    this가 있으면 현재 객체내 속성, this가 없으면 매개변수.
} */