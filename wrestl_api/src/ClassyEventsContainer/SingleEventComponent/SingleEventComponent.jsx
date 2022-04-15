const SingleEventComponent = (props) =>{
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
        </div>
    )
}

export default SingleEventComponent