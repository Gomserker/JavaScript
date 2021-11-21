const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}

getClock();
setInterval(getClock, 1000);

function sayHello(){
    console.log("hello");
}



//interval과 timeout

//interval 매번 반드시 일어나야하는 일

// setInterval(sayHello, 2000);


// setTimeout(sayHello, 2000);

