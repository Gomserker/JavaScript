const random = document.querySelector("#randomNum");
const choosen = document.querySelector("#choosenNum");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const play = document.querySelector("#play");

const HIDDEN_CLASSNAME = "hidden";

function openResult(event){
    event.preventDefault();
    const choosenNum = choosen.value;
    const randomNum = Math.ceil(Math.random() * random.value);

    if(choosenNum < randomNum){
        result1.classList.remove(HIDDEN_CLASSNAME);
        result1.innerText = "invalid input, guess number must bigger than random number";
    } else {
        result1.innerText = `You chose : ${choosenNum}, the machine chose: : ${randomNum}`
        result1.classList.remove(HIDDEN_CLASSNAME);
        result2.classList.remove(HIDDEN_CLASSNAME);
    }
    

    if (choosenNum != randomNum){
        result2.innerText = "You Lost!"
    } else {
        result2.innerText = "You Win!"
    }
}

play.addEventListener("submit", openResult);



