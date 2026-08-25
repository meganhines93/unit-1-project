import React from 'react';
import { useNavigate, useParams } from "react-router";
import Spacer from '../../common/Spacer.jsx';
import { catData } from '../mockData/catData';
import Button from '../../forms/input/Button.jsx';
import GoBack from '../../common/GoBack.jsx';


const CatDetails = ({ isLoading, catsError }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleGoToMeetTheCats = () => {
        navigate('/cats');
    };

    const handleGoToHomePage = () => {
        navigate('/');
    };

    if (isLoading) {
        return <LoadingPage dataName="cats" />;
    } 
    
    if (catsError) {
        return (
            <ErrorPage>
                <p>{catsError}</p>

                <Spacer marginY="20px" />

                <GoBack
                    text="Return Home"
                    handleClick={handleGoToHomePage}
                />
            </ErrorPage>
        );
    }

    const cat = catData.find((cat) => String(cat.id) === id);

    if (!cat) {
        return (
            <ErrorPage>
                <p>Sorry, that cat does not exist!</p>

                <Spacer marginY="20px" />

                <div className="view-all-cats-button-container">
                    <Button
                        type="button"
                        label="View All Cats"
                        handleClick={handleGoToMeetTheCats}
                    />
                </div>
            </ErrorPage>
        );
    }

    return (
        <main className="cat-details-section">

            <div className="view-all-cats-button-container">
                <Button
                    type="button"
                    label="View All Cats"
                    handleClick={handleGoToMeetTheCats}
                />
            </div>

            <img
                className="cat-details-image"
                src={cat.imageId}
                alt={`Image of ${cat.name}`}
            />

            <div className="cat-details-content">

                <h1 className="cat-name-header">
                    {cat.name}
                </h1>

                <h3>
                    Age: {cat.age} | Gender: {cat.gender}
                </h3>

                <h2>
                    About {cat.name}
                </h2>

                <p>
                    {cat.description}
                </p>

                <h3>
                    Personality
                </h3>

                <p>
                    {cat.personality}
                </p>

                <h3>
                    Adoption Fee: ${cat.adoptionFee}
                </h3>

            </div>

        </main>
    );
};

export default CatDetails;