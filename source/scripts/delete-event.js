import { arrOfEvents, savetoLocalStorage } from './storage.js'
import { renderDates } from './navigation.js'

export function deleteButtonOnclick(obj) {
    let deleteButton = document.querySelector('.delete-event');
    deleteButton.addEventListener('click', deleteEvent);
    function deleteEvent() {
        event.preventDefault();

        let deletedEvent = arrOfEvents.indexOf(arrOfEvents.find(x => obj.id == x.id))
        arrOfEvents.splice(deletedEvent, 1);
        savetoLocalStorage();
        const popup = document.querySelector(`.popup`);
        popup.classList.remove('popup-switch');
        renderDates();
    }
}