import { useState, useEffect } from "react"
import SingleEventComponent from "./SingleEventComponent/SingleEventComponent"

const EventContainer = () => {
    const [events, setEvents] = useState([])
    const getEvents = async () => {
        const getEventsApiResponse = await fetch("http://localhost:8000/api/events")
        const parsedEvents = await getEventsApiResponse.json();
        setEvents(parsedEvents)
    }
    
    return (
        <div>
            <h2>Event container</h2>
            <button onClick={getEvents}>Get Events</button>
            { events.map((event) => {
                return <SingleEventComponent event={event} key={`event-${event.id}`}>{JSON.stringify(event)}</SingleEventComponent>
            })}
        </div>
    )
}

export default EventContainer