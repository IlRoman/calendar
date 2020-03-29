const baseUrl = 'https://5e720541942d92001611a8f2.mockapi.io/api/v1/Calendar'

export const getEventsList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
}

export const postToServer = (event) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(event)
    })
}

export const putToServer = (eventId, updatedEvent) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(updatedEvent)
    })
}

export const deleteFromServer = (eventId) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
}