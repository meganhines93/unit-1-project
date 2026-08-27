import { useState } from "react";
import Button from '../../../forms/input/Button.jsx';
import EventRegistrationForm from '../../../forms/EventRegistrationForm.jsx';
import Spacer from '../../../common/Spacer.jsx';


const EventCard = ({ event }) => {
    const [ openForm, setOpenForm ] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [registration, setRegistration] = useState(null);

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
                <h2 className="event-card-title">{event.title}</h2>

                <h4 className="event-card-date-and-time">{event.date} {event.time}</h4>

                <p>{event.description}</p>

                <Spacer marginY="20px" />
            </div> 
                    <div className="price">Price ${event.price}</div>
                    <Spacer marginY="20px" />
                <div className="category">{event.category}</div>
                {openForm ? (
                    <div className="registration-form-wrapper">
                        <EventRegistrationForm 
                            event={event} 
                            registration={registration}
                            setRegistration={setRegistration}
                            handleCloseForm={handleToggleForm} 
                            setShowSuccess={setShowSuccess}
                        />
                    </div>
                ) : (
                    <div className="register-button-container">
                        <Button
                            id={`register-event-${event.id}`}
                            type="button"
                            label={registration ? "Edit Registration" : "Register"}
                            handleClick={handleToggleForm}
                        />
                    </div>
                )}
                {showSuccess && (
                    <p className="success-message">{registration
                        ? "Registration submitted successfully!"
                        : "Registration submitted successfully!"}
                    </p>
                        
                )}
        </div>
    );

} 

export default EventCard;