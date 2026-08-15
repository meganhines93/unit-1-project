import React from 'react';
import { Link } from "react-router";
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const CafeMenu = ({menu}) => {
    return(
        <main>
            <h1>MENU</h1>
                <h2>Espresso Drinks</h2>
                <h2>Lattes</h2>
                <h2>Tea</h2>
                <h2>Pasteries</h2>
                <h2>Breakfast</h2>
                <h2>Lunch</h2>
        </main>
    );
}

export default CafeMenu;