import { arrayOfDates } from './navigation.js';
import { activeEventOnclick } from './edit-event.js';

let eventPlace = document.querySelectorAll('.day');
let eventDay = document.querySelectorAll('.day-number');

export function displayEvent(starttime, endTime, name, descriprion, id) {
    if (arrayOfDates[0].getMonth() === starttime.getMonth()) {
        let diff = ((endTime - starttime) / 1000 / 60);
        for (let i = 0; i < 7; i++) {

            let timeParts = (starttime + '').split(' ')[4].split(':');

            if (eventDay[i].innerHTML == endTime.getDate()) {
                //create long event
                if (starttime.getDate() !== endTime.getDate()) {
                    let activeEventShort = document.createElement('div');
                    let activeEventLong = document.createElement('div');
                    activeEventShort.classList.add('active_event');
                    activeEventLong.classList.add('active_event');

                    let marginTopOfShortEvent = +timeParts[0] * 60 + +timeParts[1];
                    activeEventShort.style.marginTop = `${marginTopOfShortEvent + 100}px`;
                    activeEventShort.style.height = `${1440 - marginTopOfShortEvent}px`;

                    let heightOfLongEvent = endTime
                    activeEventLong.style.marginTop = '100px'
                    activeEventLong.style.height = `${1440 - (1440 - (endTime + '').split(' ')[4].split(':')[0] * 60 +
                        +((endTime + '').split(' ')[4].split(':')[1]))}px`;

                    eventPlace[i - 1].append(activeEventShort);
                    eventPlace[i].append(activeEventLong);

                    activeEventLong.innerHTML += `${name}<br>`
                    activeEventLong.innerHTML += `${(starttime + '').split(' ')[4]} - ${(endTime + '').split(' ')[4]}<br>`;
                    activeEventLong.innerHTML += `${descriprion}`;

                    activeEventShort.innerHTML += `${name}<br>`
                    activeEventShort.innerHTML += `${(starttime + '').split(' ')[4]} - ${(endTime + '').split(' ')[4]}<br>`;
                    activeEventShort.innerHTML += `${descriprion}`;


                    activeEventShort.setAttribute('data-id', id);
                    activeEventLong.setAttribute('data-id', id);

                } else {
                    // create short event
                    let margin = +timeParts[0] * 60 + +timeParts[1];

                    let activeEvent = document.createElement('div');
                    eventPlace[i].append(activeEvent);
                    activeEvent.classList.add('active_event');
                    activeEvent.style.height = `${diff}px`;

                    activeEvent.style.marginTop = `${margin + 100}px`;
                    activeEvent.innerHTML += `${name}<br>`
                    activeEvent.innerHTML += `${(starttime + '').split(' ')[4]} - ${(endTime + '').split(' ')[4]}<br>`;
                    activeEvent.innerHTML += `${descriprion}`;

                    activeEvent.setAttribute('data-id', id);
                }
            }
        }
    }
};

export function renderEvents(arrOfEvents) {
    for (let i = 0; i < arrOfEvents.length; i++) {
        displayEvent(arrOfEvents[i].startDate, arrOfEvents[i].endDate, arrOfEvents[i].name,
            arrOfEvents[i].description, arrOfEvents[i].id);
    };
};