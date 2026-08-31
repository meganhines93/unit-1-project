import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AdoptionForm from '../../Forms/AdoptionForm';
import { catData } from '../mockData/catData';
import CatCard from './Cards/CatCard';
import Button from './../../forms/input/Button.jsx';
import Spacer from '../../common/Spacer.jsx';

const MeetTheCats = ({ catsError }) => {
    const navigate = useNavigate();

    const [ openForm, setOpenForm ] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleToggleForm = () => {
        setOpenForm(prevOpenForm => !prevOpenForm);
    };

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);


    const handleGoToHomePage = () => {
        navigate('/');
    };

    if (catsError) {
        return (
            <div>
                <p>{catsError}</p>
                <button onClick={handleGoToHomePage}>
                    Return Home
                </button>
            </div>
        );
    }

    const catsJSX = catData.map((cat) => {
        return (
            <li className="cat-card-item" key={cat.id}>
                <CatCard cat={cat} />
            </li> 
        );
    });

    return (
        <main className="meet-the-cats-page">
            <h1 className="meet-the-cats-header">MEET THE CATS</h1>
            <div className="meet-the-cats-subtitle">
            <p>Each of our cats has a unique story and a loving heart.</p>
            <p>Click on a cat to learn more about them!</p>
            </div>

            {catData.length ? (
                <ul className="cat-card-container">
                    {catsJSX}
                </ul>
            ) : (
                <p>
                    <em>
                        We're sorry, there are no cats to display at this time.
                    </em>
                </p>
            )}

            <section>
                {openForm ? (
                    <AdoptionForm 
                        handleCloseForm={handleToggleForm} 
                        setShowSuccess={setShowSuccess}
                    />
                ) : (
                    <div className="adoption-form-button-container">
                        <Button
                            id={`adoption-form`}
                            type="button"
                            label="Submit Adoption Request"
                            handleClick={handleToggleForm}
                        />
                        <Spacer marginY="20px" />
                    </div>
                )}

                {showSuccess && (
                        <p className="success-message">
                            Adoption request submitted successfully!
                        </p>
                    )} 

                
            </section>
        </main>
    );
};

export default MeetTheCats;