import { useState } from "react";
import Button from '../../forms/input/Button.jsx';
import EventRegistrationForm from '../../forms/EventRegistrationForm.jsx';
import Spacer from '../../common/Spacer.jsx';


const EventCard = ({ event }) => {
    const [ openForm, setOpenForm ] = useState(false);

    const handleToggleForm = () => {
        setOpenForm(prevOpenForm => !prevOpenForm);
    };

    return (
        <div className="event-card">
            <img
                className="event-card-image"
                src={event.imageId}
                alt={'Cat Event Flyers'}
            />
            <div className="event-card-content">
                <h3 className="event-card-title">{event.title}</h3>
                <h4 className="event-card-date-and-time">{event.date} {event.time}</h4>
                <p>{event.description}</p>
                <Spacer marginY="20px" />
            </div>
                    <div className="price">Price ${event.price}</div>
                    <Spacer marginY="20px" />
                <div className="category">Category: {event.category}</div>
                <Spacer marginY="20px" />
                {openForm ? (
                    <EventRegistrationForm event={event} handleCloseForm={handleToggleForm} />
                ) : (
                    <div className="register-button-container">
                        <Button
                            id={`register-event-${event.id}`}
                            type="button"
                            label="Register"
                            handleClick={handleToggleForm}
                        />
                        <Spacer marginY="20px" />
                    </div>
                )}
        </div>
    );

} 

export default EventCard;