// const loginForm = document.getElementById("login-form");
//querrySelector를 쓸땐 클래스인지 id인지 잘 확인할것

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    //브라우저에서 자동으로 새로고침하는 것을 제어한다.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //username이라는 변수에 입력된 username value를 저장.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // String이랑 변수 합치는 두가지 방법
    greeting.innerText = "Hello, " + username;
    //printf 보다 좀 더 편하네
    greeting.innerText = `hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
// }

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `hello, ${savedUsername}`;
}
// link.addEventListener("click", handleLinkClick);

//addEventListener를 쓰고 함수를 부여하면, JS가 자동으로 기본동작을 수행해준다.
//하지만 가끔 이걸 막고싶을때가 있을 거 아님?
//argument로 받은 것에 preventDefault()를 사용하면 기본동작을 막는다.
//link의 경우 해당 페이지로 이동하는 것이 기본동작이겠쥬?

//localStorage -> 이미 존재하는 기능이다. 브라우저에 뭔가를 저장할 수 있게 해준다.

//localStorage.setItem(). // 로컬 스토리지에 저장하는 메소드
//localStorage.setItem("Username", "gom");
//localStorage.getItem("Username"); 

//만약 localStorage에 이미 username이 저장되어 있으면 처음의 로그인 화면(form)이 보이지 않고,
//바로 hello, {username}이 표시되게 하려고 한다.
//그러려면 먼저 localStorage에 username이 저장되어 있는지 확인해야 한다.