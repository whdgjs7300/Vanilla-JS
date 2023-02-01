// 조건문(if, else)

const age2 = parseInt(prompt("How old are you?"));




// isNaN() 사용하면 boolean 값으로 받음
// 숫자가 아닐 때 참이 나옴

console.log(isNaN(age2))

// 조건이 boolean 값이나 boolean 값으로 나타낼 수 있을 때 사용
if(isNaN(age2)) {
    console.log("숫자를 입력하세요");
} else {
    console.log("숫자가 맞습니다");
}