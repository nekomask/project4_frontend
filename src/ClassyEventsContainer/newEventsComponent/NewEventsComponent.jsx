const NewEventsComponent = (props) => {
    return(
        <div key="create">
            <h5>Create a new Wrasslin Event</h5>
            <form onSubmit={props.createNewEvent}> 
                Name: <input onChange={props.handleNewEventInputChange} name="name" type="text"></input>
                <br></br>
                Year: <input onChange={props.handleNewEventInputChange} name="year" type="number"></input>
                <br></br>
                # of Matches: <input onChange={props.handleNewEventInputChange} name="num_matches" type="number"></input>
                <br></br>
                Best Match: <input onChange={props.handleNewEventInputChange} name="best_match" type="text"></input>
                <br></br>
                Show rating: <input onChange={props.handleNewEventInputChange} name="avg_rating" type="number"></input>
                <br></br>
                Noteworthy events: <input onChange={props.handleNewEventInputChange} name="noteworthy_events" type="text"></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewEventsComponent;