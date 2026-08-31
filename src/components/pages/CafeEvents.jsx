import { useNavigate } from "react-router";
import GoBack from '../../common/GoBack.jsx';
import EventCard from './Cards/EventCard.jsx';
import { eventData } from '../mockData/eventData.js';
import { useState } from "react";
import ErrorPage from "./ErrorPage.jsx";

const CafeEvents = ({ eventsError }) => {

const navigate = useNavigate();

const [selectedCategory, setSelectedCategory] = useState("All");

const filteredEvent = selectedCategory === "All"
    ? eventData
    : eventData.filter(
       (item) => item.category === selectedCategory
    );

const handleGoToHomePage = () => {
        navigate('/');
    };

    if (eventsError) {
        return (
            <ErrorPage>
                <p>{eventsError}</p>
                <GoBack text={'Return Home'} handleClick={handleGoToHomePage} />
            </ErrorPage>
        );
    } else {
        return ( 
            <main className="events-page">
                <h1 className="events-header">UPCOMING EVENTS</h1>
                <p className="events-subtitle">Join us for coffee, cats, and community events ath The Daily Purr</p>

                <div className="event-category-buttons">
                    <button onClick={() => setSelectedCategory("All")}>All</button>
                    <button onClick={() => setSelectedCategory("Social")}>Social</button>
                    <button onClick={() => setSelectedCategory("Wellness")}>Wellness</button>
                    <button onClick={() => setSelectedCategory("Arts & Crafts")}>Arts & Crafts</button>
                    <button onClick={() => setSelectedCategory("Adoption")}>Adoption</button>
                    <button onClick={() => setSelectedCategory("Special Event")}>Special Event</button>
                    <button onClick={() => setSelectedCategory("Seasonal")}>Seasonal</button>
                </div>
                {filteredEvent.length ? (
                    <ul className="event-card-container">
                        {filteredEvent.map((event) => (
                            <li className="event-card-item" key={event.id}>
                                <EventCard event={event} />
                            </li>
                        ))}</ul>
                ) : (
                    <p>
                        <em>We're sorry, there are no events to display at this time.</em>
                    </p>
                )}
            </main>
        );
    };
}

export default CafeEvents;