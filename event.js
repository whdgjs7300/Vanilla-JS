
const title4 = document.querySelector(".hello4 h1");

console.dir(title4);

title4.style.color = "blue";

// 클릭이벤트 

function handleTitleClick() {
    console.log("타이틀이 클릭되었습니다");
}

title4.addEventListener("click", handleTitleClick);

