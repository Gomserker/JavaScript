// const loginForm = document.getElementById("login-form");
//querrySelector를 쓸땐 클래스인지 id인지 잘 확인할것

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    //브라우저에서 자동으로 새로고침하는 것을 제어한다.
    const username = loginInput.value;
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
// link.addEventListener("click", handleLinkClick);

//addEventListener를 쓰고 함수를 부여하면, JS가 자동으로 기본동작을 수행해준다.
//하지만 가끔 이걸 막고싶을때가 있을 거 아님?
//argument로 받은 것에 preventDefault()를 사용하면 기본동작을 막는다.
//link의 경우 해당 페이지로 이동하는 것이 기본동작이겠쥬?
