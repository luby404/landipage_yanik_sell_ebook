/*const scrollHeader = () =>{
    const header = document.querySelector('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)*/






var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0
};

ScrollReveal({ reset: true }).reveal('.infos', slideUp);
ScrollReveal({ reset: true, delay: 300 }).reveal('.card_img', slideUp);




document.querySelectorAll(".cards .card").forEach((element, index) => {
    ScrollReveal({ reset: true, delay: index * 200 }).reveal(element, slideUp);
});

document.querySelectorAll(".cards .test_mu").forEach((element, index) => {
    ScrollReveal({ reset: true, delay: index * 200 }).reveal(element, slideUp);
});


let msg = document.querySelector(".message")

setInterval(() => {


    msg.classList.add("show")
    msg.innerHTML = `
    
    <span id="name">Nova Venda Realizada</span>
    
    `


    setTimeout(() => {
        msg.classList.remove("show")
    }, 2100);


}, 15000);



let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 10;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 10;
    document.getElementById("display").innerText = "10:00:00";
}

function updateTime() {
    if (milliseconds === 0 && seconds === 0 && minutes === 0) {
        clearInterval(timer);
        isRunning = false;
        return;
    }

    milliseconds -= 10;
    if (milliseconds < 0) {
        milliseconds = 990;
        seconds--;
    }
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    //let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;
    document.getElementById("timer").innerText = `${min}:${sec}`;



}

setTimeout(() => {
    startTimer()
}, 1000);

