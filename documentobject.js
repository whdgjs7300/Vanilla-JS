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