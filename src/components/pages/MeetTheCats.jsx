import React from 'react';
import { Link } from "react-router";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AdoptionForm from '../../Forms/AdoptionForm';
import { catData } from '../mockData/catData';
import CatCard from './CatCard';


const MeetTheCats = ({meetthecats}) => {
    return(
        <main className="meet-the-cats-page">
                <h1 className="meet-the-cats-header">MEET THE CATS</h1>
                {CharacterData.length ? (
                    <div className="cat-card-container">{catsJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no cats to display at this time.</em>
                    </p>
                )}
                <section>
                    <h2>ADOPTION REQUEST FORM</h2>
                    <AdoptionForm />

                </section>
                
        </main>
    );
}

export default MeetTheCats;