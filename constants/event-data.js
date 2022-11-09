const EVENTS = [
    {
        id: 'orientation',
        title: 'Orientation',
        description: 'Ideathon is a university level competition',
        location: 'A street 25,  San Francisco',
        date: '2022-06-14',
        image: 'images/coding-event.jpg',
        isFeatured: true
    },
    {
        id: 'ideathon',
        title: 'Ideathon',
        description: 'Making networking for introverts fun',
        location: 'Street 47, New York',
        date: '2022-06-21',
        image: 'images/network-event.jpg',
        isFeatured: true
    },
]

const ACTIVITIES=[
    {  id:1,
        title:"Ideathon",
        image: 'images/network-event.jpg',
    },
    {  id:2,
        title:"Workshop",
        image: 'images/network-event.jpg',
    },
    {  id:3,
        title:"Pitching",
        image: 'images/network-event.jpg',
    },
    {  id:4,
        title:"Ideathon",
        image: 'images/network-event.jpg',
    },
    {  id:5,
        title:"Ideathon",
        image: 'images/network-event.jpg',
    },
    {  id:6,
        title:"Ideathon",
        image: 'images/network-event.jpg',
    },
]


export function getAllEvents() {
    return EVENTS;
}
export function getAllActivities() {
    return ACTIVITIES;
}

export function getFeaturedEvents() {
    return EVENTS.filter((event) => event.isFeatured);
}
export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    })

    return filteredEvents;
}

export function getEventById(id) {
    return EVENTS.find((event) => event.id === id);
}