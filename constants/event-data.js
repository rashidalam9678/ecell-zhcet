const EVENTS = [
    {
        id: 'ideathon',
        title: 'Ideathon',
        description: 'Ideathon is a university level competition',
        location: 'A street 25,  San Francisco',
        date: '2022-06-14',
        image: 'images/coding-event.jpg',
        isFeatured: false
    },
    {
        id: 'event2',
        title: 'Networking Basics',
        description: 'Making networking for introverts fun',
        location: 'Street 47, New York',
        date: '2022-06-21',
        image: 'images/network-event.jpg',
        isFeatured: true
    },
    {
        id: 'event2',
        title: 'Networking Advanced',
        description: 'Making networking for advanced use-cases',
        location: 'Street 47, New York',
        date: '2022-07-25',
        image: 'images/network-event-advanced.jpg',
        isFeatured: true
    }
]

export function getFeaturedEvents() {
    return EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return EVENTS;
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