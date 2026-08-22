import { useState } from "react";
import { useNavigate } from "react-router";
import AdoptionForm from '../../Forms/AdoptionForm';
import { catData } from '../mockData/catData';
import CatCard from './Cards/CatCard';
import { Link } from 'react-router';
import Button from './../../forms/input/Button.jsx';
import Spacer from '../../common/Spacer.jsx';

const MeetTheCats = ({ isLoading, catsError }) => {
    const navigate = useNavigate();

    const [ openForm, setOpenForm ] = useState(false);

    const handleToggleForm = () => {
        setOpenForm(prevOpenForm => !prevOpenForm);
    };

    const handleGoToHomePage = () => {
        navigate('/');
    };

    if (isLoading) {
        return <p>Loading cats...</p>;
    }

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
                    <AdoptionForm handleCloseForm={handleToggleForm} />
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
            </section>
        </main>
    );
};

export default MeetTheCats;