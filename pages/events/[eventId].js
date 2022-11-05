import { useRouter } from 'next/router';
import EventItem from '../components/events/EventItem';
import { getEventById } from '../../constants/event-data';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;

    const event = getEventById(eventId);

    if (!event) {
        return <p>No Event Found</p>
    }

    return (
        <EventItem
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image} />
    )
}

export default EventDetailPage;