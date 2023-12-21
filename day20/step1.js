/* 

    자료<----->변수(나중에 재사용을 위해 사용/ 식별하기 위해서)

    객체: 속성과 메소드를 가질 수 있는 모든 것
        형태
            객체 선언: const object= {}
            객체내 속성추가: object.새로운속성명 = 값;
            객체내 속성의 값 호출: object.속성명 (java에서사용) vs object['속성명'] (java에서 사용X)
            객체내 속성의 값 변경: object.기존속성명 = 값;
        -배열도 객체
        -함수도 객체
        -기본자료형(숫자,불,문자열) 객체 아니다.
            1.기본 자료형 ---> 객체로변환(객체 자료형,래퍼 클래스)
                객체로 활용하려고 (속성/메소드를 사용하기 위해서 --부가기능을 사용하기위해서)

            2.
                -new 객체를 만들때 쓰는 일반적인 new 연산자(객체화))
                new Number(숫자자료형)
                new String(문자자료형)
                new Boolean(불 자료형)
            3. 문자열 타입[일시적 승급]
                -속성을 추가는 할 수 없지만, js만든 사람이 제공하는 속성은 사용이 가능하다.

*/  
//p.257
const a = []; // 배열
a.sample=10;
console.log(a.sample);
console.log(typeof a);  //typeof 상수/변수; 해당 상수/변수 저장된 자효의 타입 확인
console.log(Array.isArray(a))   //Array.isArray(상수/변수): 해당 상수/변수에 자료가 배열자료형인지 검증

function b(){}
b.sample =10;
console.log(b.sample);
console.log(typeof b);  //함수는 객체의 특성을 완벽하게 가지고 있음.[js만]

//p.258
const c= 273;
c.sample=10;
console.log(c.sample) ;            //undefined: 기본자료형[객체가 아니므로]은 속성을 추가할 수 없다.

const d ='안녕하세요';
d.sample=10;
console.log(d.sample);             //undefined: 기본자료형[객체가 아니므로]은 속성을 추가할 수 없다.  
console.log(d.length);              

const e= true;
e.sample=10;
console.log(e.sample);             //undefined: 기본자료형[객체가 아니므로]은 속성을 추가할 수 없다.

// p.260
const f = new Number(273);
    console.log(f);
f.sample = 10;
    console.log(f);             //{273, sample:10} // 객체는 키와값=속성
console.log(f.valueOf());       //객체명.valueOf(); 속성이 없는값 추출

const g =Number(273);
    console.log(g);             //단순히 기본자료형 타입변환 [객체X]

// p.261
console.log('안녕하세요'.length);
console.log('안녕하세요'.anchor('aaa')); // 문자열 기본자료형도 .온점 메소드 사용가능하다.
console.log('안녕하세요'.bold('aaa'));   

//p.263
Number.prototype.sample= 10;
const i = 273
console.log(i.sample);

const j= 100;
console.log(j.sample); 

const i2 =new Number(273);
i2.sample2=10;
console.log(i2.sample);         //10

const j2 =new Number(273);
console.log(j2.sample2);        //undefined

//p.264
Number.prototype.power =function(n=2){
    return this.valueOf() **n
}

const a2= 12
console.log('a2.power():',a2.power())
console.log('a2.power(3):',a2.power(3))
console.log('a2.power(4):',a2.power(4))

//p.265
const h ='안녕하세요';
console.log(h.indexOf('안녕')); // 0: 문자열내 '안녕'이 존재하면 앞문자의 인덱스로 추출
console.log(h.indexOf('하세')); // 2:
console.log(h.indexOf('자바'))  // -1
            //vs
console.log(h.contain('안녕')); // contain is not a function[contain() 메소드가 없다]  

//js가 편의성으로 제공하면 좋은데 없으니까 직접 만들기
String.prototype.contain= function(data){
    return this.indexOf(data) >= 0;
}

console.log(h.contain('안녕'));


