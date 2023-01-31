// const, let 차이점

const a = 5;
const b = 2;
let myName = "JongHeon";

// const는 constant(상수)라는 것으로, 값이 바뀔 수 없다
// 업데이트가 되지않음(에러코드)

console.log(myName)

// 자바스크립트는 위에서 아래로 코드를 실행하는 특성
// let은 값을 바꿀 수 있다(업데이트)
// 값의 업데이트를 원할 때 let 씀(필요할 때)
myName = "Park";

console.log("바뀐 이름은" + myName);

// var 변수는 오래된 버전에서 사용했음
// 원한다면 어디서든 업데이트 가능
// 문제점은 언어를 통한 보호를 받지 못한다
// 어떠한 규칙도 가지지 않는다


// 대부분 const를 쓰고 let은 가끔 업데이트가 필요할 경우, var는 쓰지않음



