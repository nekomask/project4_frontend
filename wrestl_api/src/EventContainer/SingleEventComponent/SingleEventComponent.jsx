const SingleEventComponent = (props) =>{
    return (
        <div>
            <h3>{props.event.name}</h3>
            <p>This event took place in {props.event.year}</p>
            <p>The best match on the card was {props.event.best_match}</p>
            <h4>Special Note</h4>
            {props.event.noteworthy_events}
        </div>
    )
}

export default SingleEventComponent