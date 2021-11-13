const h1 = document.querySelector("#title");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
// === 는 값이 일치하는지 확인하기 위해
h1.addEventListener("click", handleTitleClick);

