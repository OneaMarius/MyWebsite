// home page //

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        12,
        0,
        360
    )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360
    )}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360
    )}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${
        minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);

// contact page //

const miniApps = document.querySelectorAll(".miniApp");
const extraApps = document.querySelectorAll(".extraApp");
miniApps.forEach((miniApp, i) => {
    miniApp.addEventListener("click", () => {
        extraApps[i].classList.toggle("activated");
    });
});

/// background changer ////

const backgroundClr = document.querySelectorAll(".pages");

function randomRgbNr() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    const r = randomRgbNr();
    const g = randomRgbNr();
    const b = randomRgbNr();
    return `${r}, ${g}, ${b}`;
}

function changeBgColor() {
    backgroundClr.forEach((bgc) => {
        bgc.style.backgroundColor = `rgb(${randomRGB()})`;
    });
}

// setInterval(changeBgColor,5000);

// Projects

const imgs1 = document.getElementById("imgs1");
const imgs2 = document.getElementById("imgs2");
const imgs3 = document.getElementById("imgs3");
const imgs4 = document.getElementById("imgs4");
const imgs5 = document.getElementById("imgs5");
const imgs6 = document.getElementById("imgs6");
const imgs7 = document.getElementById("imgs7");
const imgs8 = document.getElementById("imgs8");

const img1 = document.querySelectorAll(".image-container .img1");
const img2 = document.querySelectorAll(".image-container .img2");
const img3 = document.querySelectorAll(".image-container .img3");
const img4 = document.querySelectorAll(".image-container .img4");
const img5 = document.querySelectorAll(".image-container .img5");
const img6 = document.querySelectorAll(".image-container .img6");
const img7 = document.querySelectorAll(".image-container .img7");
const img8 = document.querySelectorAll(".image-container .img8");

let idx1 = 0;
let idx2 = 0;
let idx3 = 0;
let idx4 = 0;
let idx5 = 0;
let idx6 = 0;
let idx7 = 0;
let idx8 = 0;

setInterval(run1, 2000);
setInterval(run2, 2150);
setInterval(run3, 2300);
setInterval(run4, 2450);
setInterval(run5, 2600);
setInterval(run6, 3750);
setInterval(run7, 2900);
setInterval(run8, 2700);

function run1() {
    idx1++;
    if (idx1 > img1.length - 1) {
        idx1 = 0;
    }
    imgs1.style.transform = `translateX(${-idx1 * 250}px)`;
 
}
function run2() {
    idx2++;
    if (idx2 > img2.length - 1) {
        idx2 = 0;
    }
    imgs2.style.transform = `translateX(${-idx2 * 250}px)`;
 
}
function run3() {
    idx3++;
    if (idx3 > img3.length - 1) {
        idx3 = 0;
    }
    imgs3.style.transform = `translateX(${-idx3 * 250}px)`;
}
function run4() {
    idx4++;
    if (idx4 > img4.length - 1) {
        idx4 = 0;
    }
    imgs4.style.transform = `translateX(${-idx4 * 250}px)`;
}
function run5() {
    idx5++;
    if (idx5 > img5.length - 1) {
        idx5 = 0;
    }
    imgs5.style.transform = `translateX(${-idx5 * 250}px)`;
}
function run6() {
    idx6++;
    if (idx6 > img6.length - 1) {
        idx6 = 0;
    }
    imgs6.style.transform = `translateX(${-idx6 * 250}px)`;
}
function run7() {
    idx7++;
    if (idx7 > img7.length - 1) {
        idx7 = 0;
    }
    imgs7.style.transform = `translateX(${-idx7 * 250}px)`;
}
function run8() {
    idx8++;
    if (idx8 > img8.length - 1) {
        idx8 = 0;
    }
    imgs8.style.transform = `translateX(${-idx8 * 250}px)`;
}


////// hover bg /////

const container = document.querySelector('#projects')
const colors = ['#1c1c1c', '#2c2c2c', '#3c3c3c', '#4c4c4c', '#5c5c5c']
const SQUARES = 3500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    // return colors[Math.floor(Math.random() * colors.length)]
    return `rgb(${randomRGB()})`
}