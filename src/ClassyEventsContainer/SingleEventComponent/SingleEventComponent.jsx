import {useState, useEffect} from 'react'

const SingleEventComponent = (props) =>{
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const [showing, setShowing] = useState(false)
    
    const toggleShowing = () => {
        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }
    const [updateEvent, setUpdateEvent] = useState({
        name: props.event.name,
        year: props.event.year,
        num_matches: props.event.num_matches,
        best_match: props.event.best_match,
        avg_rating: props.event.avg_rating,
        noteworthy_events: props.event.noteworthy_events,
        _id: props.event.id
    })

    const submitUpdateEvent = (e) => {
        e.preventDefault();
        console.log("updating event!")
        //call function from the Parent to be given the form data
        props.updateEvent(props.event.id, updateEvent);
        setShowing(false)
    }

    const handleInputChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setUpdateEvent({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...updateEvent,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <h3>{props.event.name}</h3>
            <p>This event took place in {props.event.year}</p>
            <p>The best match on the card was {props.event.best_match}</p>
            <p>This show has {props.event.avg_rating} out of 5 stars</p>
            <h4>Noteworthy Events</h4>
            {props.event.noteworthy_events}
            <br></br>
            <br></br>
            <button onClick={()=>{props.deleteEvent(props.event.id)}}>DELETE {props.event.name}</button>
            {
                showing ?
                    <div id="edit-event-form">
                        <button onClick={toggleShowing}>x</button>
                        <form onSubmit={submitUpdateEvent}>
                        {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                        <h2>Update Event</h2>
                            Event Name: <input onChange={handleInputChange} type="text" name="name" value={updateEvent.name} /><br />
                            Year: <input onChange={handleInputChange} type="number" name="year" value={updateEvent.year || ""} /><br />
                            # of matches: <input onChange={handleInputChange} type="text" name="num_matches" value={updateEvent.num_matches || ""} /><br />
                            <button id="submit" type="submit">Submit</button>
                            </form>
                    </div>
                    :
                    <button onClick={toggleShowing}>Edit this event</button>
            }
        </div>
    )
}

export default SingleEventComponent