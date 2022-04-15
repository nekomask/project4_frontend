import React from "react";
import SingleEventComponent from "./SingleEventComponent/SingleEventComponent";
import NewEventsComponent from "./newEventsComponent/NewEventsComponent";

class ClassyEventsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            events: [],
            newEvent: {
                name: "",
                year: null,
                num_matches: null,
                best_match: "",
                avg_rating: null,
                noteworthy_events: ""
            }
        }
    }
    handleNewEventInputChange = (e) => {
        console.log(this)
        console.log(e.target.value)
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                [e.target.name]: e.target.value
            }
        })
    }

    createNewEvent = async (e) => {
        e.preventDefault();
        const apiResponse = await fetch("http://localhost:8000/api/events/", {
            method: "POST",
            body: JSON.stringify(this.state.newEvent),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if(apiResponse.status === 201){
        const creationResponseParsed = await apiResponse.json()
        console.log(creationResponseParsed)    
        this.setState({
            events: [...this.state.events, creationResponseParsed]
        })
    }
}

    async getEvents() {
        const getEventsApiResponse = await fetch("http://localhost:8000/api/events/")
        const parsedEvents = await getEventsApiResponse.json();
        this.setState({
            events: parsedEvents
        })
    }

    deleteEvent = async (idToDelete) => {
        const deleteResponse = await fetch(`http://localhost:8000/api/events/${idToDelete}`, {
        method: "DELETE"
        })
        if(deleteResponse.status === 204){
            this.setState({
                events: this.state.events.filter(e => e.id !== idToDelete)
            })
    }
}

    updateEvent = async (idToUpdate) =>{
        
    }


    componentDidMount() {
        this.getEvents()
        console.log("doing our api call now that its been rednered")
    }
    render() {
        return (
            <div>
                <h2>Classy Event container</h2>
                <NewEventsComponent
                    createNewEvent={this.createNewEvent}
                    handleNewEventInputChange={this.handleNewEventInputChange}>
                    </NewEventsComponent>
                {this.state.events.map((event) => {
                    return <SingleEventComponent deleteEvent={this.deleteEvent}event={event} key={`event-${event.id}`}>{JSON.stringify(event)}</SingleEventComponent>
                })}
            </div>
        )
    }
}

export default ClassyEventsContainer;