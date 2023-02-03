// 조건문(if, else)

// const age2 = parseInt(prompt("How old are you?"));




// isNaN() 사용하면 boolean 값으로 받음
// 숫자가 아닐 때 참이 나옴

console.log(isNaN(age2))

// 조건이 boolean 값이나 boolean 값으로 나타낼 수 있을 때 사용
if(isNaN(age2)) {
    console.log("나이를 입력하세요");
} else if(age2 < 18){
    console.log("18세 미만입니다");
} else if(age => 18 && age <= 50){
    console.log("술을 마실 수 있습니다");
} else {
    console.log("술을 마실 수 없습니다");
}

