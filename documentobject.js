// jS와 HTML이 서로 작동하는 과정(상호작용)
// Js는 HTML에 이미 연결되어있음
// 그 모든것은 document로 시작 (내가 만드는 web사이트)


document.title = "Hi";

console.log(document.title);

// HTML 태그를 불러오는 방법(id)
const title = document.getElementById("title");

console.log(title);

// HTML 태그 수정하는 방법
title.innerHTML ="Got you!";

const hellos = document.getElementsByClassName("hello");


console.log(hellos);

// querySelector는 element를 CSS 방식으로 검색할 수 있음
// h1 태그의 클래스명이 다같애도 젤 위에있는 첫번째
// 태그만 호출함
const title2 = document.querySelector(".hello h1");

console.log(title2);

// querySelectorAll 
// 같은 클래스명의 h1 태그 전부를 불러옴(array 형식)

const title3 = document.querySelectorAll(".hello h1");
console.log(title3);