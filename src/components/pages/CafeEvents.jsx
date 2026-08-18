import React from 'react';
import { useNavigate } from "react-router";
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import GoBack from '../../common/GoBack.jsx';
import EventCard from './EventCard.jsx';
import { eventData } from '../mockData/eventData.js';

const CafeEvents = ({ isLoading, events = [], eventsError }) => {
    const navigate = useNavigate();

    const handleGoToHomePage = () => {
        navigate('/');
    };

    if (isLoading) {
        return <LoadingPage dataName="events" />;
    } else if (eventsError) {
        return (
            <ErrorPage>
                <p>{eventsError}</p>
                <GoBack text={'Return Home'} handleClick={handleGoToHomePage} />
            </ErrorPage>
        );
    } else {
        let eventsJSX = eventData.map((event) => {
            return (
                <li className="event-card-item" key={event.id}>
                    <EventCard event={event} />
                </li>
            );
        });

        return (
            <main className="events-page">
                <h1 className="events-header">UPCOMING EVENTS</h1>
                {eventData.length ? (
                    <div className="event-card-container">{eventsJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no events to display at this time.</em>
                    </p>
                )}
            </main>
        );
    }
}

export default CafeEvents;