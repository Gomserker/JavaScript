const h1 = document.querySelector("#title");

// function handleTitleClick(){
//     const clickedClass = "clicked";
//     //상수로 변수를 선언하고, css 클래스 명을 복붙하면 실수를 줄일 수 있다.
//     //"" 같은 raw문자열을 반복하면 사고나기 쉬움.
//     if(h1.className === clickedClass){
//         h1.className ="";
//     } else {
//         h1.className = clickedClass;
//     }
// }

//위는 getter이자 동시에 setter임을 보여주는 예시



//하지만, html에서 해당 이벤트가 일어나는 태그에 클래스명을 초기에 부여할 경우
//이벤트가 동작하면서 기존의 클래스명을 지워버리는 일이 발생한다.
//때문에 html에 클래스명을 추가하거나 할 경우엔 css와 js까지
//모든 코드에 해당 클래스명을 추가해줘야하는데 번거로울뿐더러 사고도 나기 쉽다.
//이때 사용하는 것이 classList
//className은 덮어놓고 클래스명을 바꿔버리지만, classList의 속성을 활용하면 
//HTML elements에 해당 클래스가 포함되어 있는지 확인할 수 있다.


// function handleTitleClick(){
//     const clickedClass = "clicked";
    
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass)
//     } else {
//         h1.classList.add(clickedClass)
//     }
// }

//h1의 class에 "변수" clickedClass가 포함되어 있다면
//class 목록에 "변수" clickedClass를 삭제해라 포함되어 있지 않다면
//class 목록에 "변수" clickedClass를 추가해라

//하지만 더 쉬운 방법도 있다. 바로 toggle function

function handleTitleClick(){
    h1.classList.toggle("clicked");
}
//toggle은 h1의 classList에 "clicked" 클래스가 이미 있는지 확인해서
//있으면 제거해주고, 없으면 추가해준다. 스위치의 개념이네?
h1.addEventListener("click", handleTitleClick);
