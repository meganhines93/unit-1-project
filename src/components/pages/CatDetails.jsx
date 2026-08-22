import React from 'react';
import { useNavigate, useParams } from "react-router";
import GoBack from '../../common/GoBack.jsx';
import Spacer from '../../common/Spacer.jsx';
import { catData } from '../mockData/catData';

const CatDetails = ({ isLoading, cats, catsError }) => {
    const { id } = useParams();

    const navigate = useNavigate();

    const handleGoToHomePage = () => {
        navigate('/');
    };

    const handleGoToMeetTheCatsPage = () => {
        navigate('/cats');
    };

    if (isLoading) {
        return <LoadingPage dataName="cats" />;
    } else if (catsError) {
        return (
            <ErrorPage>
                <p>{catsError}</p>
                <Spacer marginY="20px" />
                <GoBack
                    text={'Return Home'}
                    handleClick={handleGoToHomePage}
                />
            </ErrorPage>
        );
    } else {
        const cat = catData.find((cat) => String(cat.id) === id);

        if (!cat) {
            return (
                <ErrorPage>
                    <p>Sorry, that cat does not exist!</p>
                    <Spacer marginY="20px" />
                    <GoBack
                        text={'View All Cats'}
                        handleClick={handleGoToMeetTheCatsPage}
                    />
                </ErrorPage>
            );
        } else {
            return (
                <main className="cat-details-section">
                    <GoBack
                        text={'View All Cats'}
                        handleClick={handleGoToMeetTheCatsPage}
                    />
                    <img 
                        className="cat-details-image"
                        src={cat.imageId}
                        alt={`Image of ${cat.name}`}
                    />
                    <div className="cat-details-content">
                    <h1 className="cat-name-header">{cat.name}</h1>

                    <h3>
                        Age: {cat.age} | Gender: {cat.gender}
                    </h3>

                    <h2>About {cat.name}</h2>
                    <p>{cat.description}</p>

                    <h3>Personality</h3>
                    <p>{cat.personality}</p>

                    <h3>Adoption Fee: ${cat.adoptionFee}</h3>
                    </div>
                </main>
            );
        }
    }
};

export default CatDetails;