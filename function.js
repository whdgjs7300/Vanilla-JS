// 자바스크립트 함수(코드의 간결화)
// function은 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해준다

function sayHello(name, age) {
    console.log("Hello my name is " + name + " and I'm " + age);
}

sayHello();
// 데이터를 함수에 보내는 방법
// function은 데이터를 받아 ()안에 값을 넣을 수 있다. ex) console.log("blah blah");
// 첫번째 argument로 어떤 데이터가 들어오면 name이라는 변수 이름을 쓰게 된다
// argument는 두개의 값을 받을 수 있디. 
sayHello("JongHeon", 10);
sayHello("mama", 23);

function plus(a, b) {
    console.log(a + b);
}

plus(8, 60);

function divide(a, b) {
    console.log(a / b);
}
// 함수안에 a와 b에 데이터를 보내는 방법
divide(98,20);


// object 안에서의 함수 설정
const player3 = {
    name : "JongHeon",
    sayHello: function(name) {
        console.log("Hello " + name + " nice meet you");
    },
}

console.log(player3.name);
player3.sayHello("papa");

