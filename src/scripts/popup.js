import { calendarRendering } from './calendar-visualization.js';

let startDate = document.querySelector('.start-date');
let startTime = document.querySelector('.start-time');
let endTime = document.querySelector('.end-time');
let endDate = document.querySelector('.end-date');

function dateToString(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = date.getDate();
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
};

function timeToString(date) {
    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;

    return `${hour}:${minute}`;
}

export const addButton = (event) => {
    if (event.target.classList.value === 'emptyCell') {

        const popup = document.querySelector(`.popup`);
        popup.classList.add('popup-switch');

        startTime.value = event.target.closest('.emptyRow').dataset.time + '';
        endTime.value = event.target.closest('.emptyRow').dataset.time + '';

        let month = document.querySelector('.dates').innerHTML.split(' ')[0];
        let startMonth = '02'

        let year = document.querySelector('.dates').innerHTML.split(' ')[1];
        let startYear = year;

        let startDay = event.target.dataset.date

        startDate.value = `${startYear}-${startMonth}-${startDay}`;
        endDate.value = `${startYear}-${startMonth}-${startDay}`;

    } else {
        const popup = document.querySelector(`.popup`);
        popup.classList.add('popup-switch');

        startDate.value = dateToString(new Date());
        endDate.value = dateToString(new Date());
        startTime.value = timeToString(new Date());
        endTime.value = timeToString(new Date());

    }
};



const popupWindow = document.querySelector(`.calendar-visualization`);
const btnCreate = document.querySelector('.create-button');

popupWindow.addEventListener('click', addButton);
btnCreate.addEventListener('click', addButton);

let closeButton = document.querySelector('.close');
closeButton.onclick = function () {
    event.preventDefault();
    const popup = document.querySelector(`.popup`);
    popup.classList.remove('popup-switch');
    calendarRendering();
}
