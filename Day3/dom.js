// HTML의 엘리먼트들을 JS로 변경하고 읽을 수 있다.
//  Object란?

//document

//document 또한 html을 가리키는 객체(object)

//document.title을 브라우저 콘솔에 입력하면 index.html의 타이틀이 나온다.

// document.title = "hello";
// // js에서 변경한 타이틀 이름으로 변경된다.
// // js에서 html을 변경할 수 있다는 것이다.


// document.getElementById("title")
// //getElementById -> HTML의 엘리먼트를 ID 값으로 호출하는 것. 하지만 직접 보여주지는 않음.

// const title = document.getElementById("title");

// console.dir(title);

// console.log(title.id);
// console.log(title.className);
// title.innerText = "Got you!"


// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// console.log(hellos[0]);

// const title2 = document.getElementsByTagName(h1);

//querySelector -> CSS 문법으로 엘리먼트를 찾을 수 있다.
//단 중복된 클래스명이 있을 경우엔 가장 첫번째만 호출된다.
//전부 가져오려면 querySelecorAll을 사용한다.

const title = document.querySelector(".hello h1");
const title2 = document.querySelector("#title");


title2.addEventListener("mouseenter", handleMouseEnter);

console.log(title);
title.innerText = "hello";

title.style.color = "blue";


function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = "purple";
    title.innerText = "title was clicked!"
    return false;
}

function handleMouseEnter(){
    title.style.color = "teal";
    title.innerText = "mouse is on me!"
    title2.style.color = "teal";
    title2.innerText = "mouse is on me!"

}

function handleMouseLeave(){
    title.style.color = "black";
    title.innerText = "mouse has left"
}
title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick; 완전히 같은 기능

title.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);

//element web-api를 통해 여러 이벤트들을 확인할 수 있다.

console.dir(title);
//addEventListener -> function을 바로 실행시키지 않고, 특정 event가 발생했을때 해당 function을 실행하도록 한다.


function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}


function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("no wifi");
}

function handleWindowOnline(){
    alert("connected")
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);