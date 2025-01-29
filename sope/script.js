let startTime;
let updatedTime;
let difference;
let t;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime() - (difference || 0);
        t = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    if (running) {
        clearInterval(t);
        running = false;
    }
}

function resetTimer() {
    clearInterval(t);
    running = false;
    difference = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("display").innerHTML =
        (hours > 9 ? hours : "0" + hours) + ":" +
        (minutes > 9 ? minutes : "0" + minutes) + ":" +
        (seconds > 9 ? seconds : "0" + seconds);
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);