// 데이터 타입 object
// object가 없다면 
// property(속성)을 가진 데이터를 저장

const playerName = "JongHeon";
const playerPoint = 121212;
const playerHansome = false;
const playerFat = "little bit";

// array도 좋지 않아보임(배열안에 리스트들이 어떤 의미를 가지고있는지 모름)
// 설명이 필요없는 값만 array
const player = ["JongHeon", 121212, false, "little bit"];

const player2 = {
    name : "JongHeon",
    points : 10,
    fat : true,
}

console.log(player2);
console.log(player2.name);
console.log(player2["name"]);


// object는 값을 업데이트도 할수있음(const는 전체를 하나의 값으로서 업데이트 하려고 할 때 에러가 뜸)
// ex) player2 = false;
console.log(player2.fat);
player2.fat = false;
console.log(player2.fat);

// object  값 추가
player2.lastName = "Park";
player2.points = player2.points + 15;
console.log(player2);
