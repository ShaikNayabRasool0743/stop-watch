// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 1;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', addLap);

function start() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
    }
}

function pause() {
    if (running) {
        running = false;
        clearInterval(tInterval);
    }
}

function reset() {
    running = false;
    clearInterval(tInterval);
    display.textContent = "00:00:00";
    lapList.innerHTML = '';
    lapCounter = 1;
}

function addLap() {
    if (running) {
        const lapTime = display.textContent;
        const li = document.createElement('li');
        li.textContent = Lap ${lapCounter++}: ${lapTime};
        lapList.appendChild(li);
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    const formatTime = (unit) => (unit < 10 ? 0${unit} : unit);

    display.textContent = ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)};
}
