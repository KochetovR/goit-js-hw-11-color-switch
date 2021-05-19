import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')
let switchColorBody = null;
const indexArrLength = colors.length-1;

startBtn.addEventListener('click', () => {
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    startBtn.disabled='true'
    switchColorBody = setInterval(() => {
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, indexArrLength)];
    },1000);
    
})

stopBtn.addEventListener('click', () => {
    clearInterval(switchColorBody)
    startBtn.removeAttribute('disabled');
})
