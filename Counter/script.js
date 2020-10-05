var newYear = new Date();

function calc(){
    
    newYear = document.getElementById('calc').value;
    
    if(newYear === ""){
        alert("TYPE SOMETHİNG");
    }
    else{
        let html = "";

    html = `<h1 id="label">That's the Date </h1>
    <div class="countdown">
        <div class="days time">
            <p id="days">0</p>
            <span>days</span>
        </div>
        <div class="hours time">
            <p id="hours">0</p>
            <span>hours</span>
        </div>
        <div class="mins time">
            <p id="mins">0</p>
            <span>mins</span>
        </div>
        <div class="seconds time">
            <p id="seconds">0</p>
            <span>seconds</span>
        </div>
    </div>
    
    <script src="script.js"></script>`

    document.querySelector('body').innerHTML = html;

    setInterval(countdown, 1000);
    }
}


function countdown() {

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const Seconds = Math.floor(totalSeconds % 60);
    
    const Days = Math.floor(totalSeconds / 3600 / 24);
    
    const Hours = Math.floor(totalSeconds / 3600) % 24;
    
    const Minutes = Math.floor(totalSeconds / 60) % 60;
   
    daysEl.innerHTML = formatTime(Days);
    hoursEl.innerHTML = formatTime(Hours);
    minsEl.innerHTML = formatTime(Minutes);
    secondsEl.innerHTML = formatTime(Seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}