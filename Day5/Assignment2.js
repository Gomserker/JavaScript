const dday = document.querySelector("h2#d-day");

function getGoal(){
    const goal = new Date("December 25, 2021 00:00:00");
    const now = new Date();
    const until = goal - now;
    const day = String(Math.floor(until / (1000 * 60 * 60 * 24))).padStart(3, "0");
    const hour = String(Math.floor((until / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minute = String(Math.floor((until % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor ((until / 1000) % 60)).padStart(2,"0");
    
    dday.innerText = `${day}d ${hour}h ${minute}m ${seconds}s`;
}

getGoal();
setInterval(getGoal, 1000);