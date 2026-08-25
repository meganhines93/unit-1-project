import React from 'react';
import { useNavigate } from "react-router";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import GoBack from '../../common/GoBack.jsx';
import MenuCard from './Cards/MenuCard.jsx';
import { menuData } from '../mockData/menuData.js';
import { useState } from "react";


const CafeMenu = ({ isLoading, menuError }) => {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState("Espresso");

    const filteredMenu = menuData.filter(
        (item) => item.category === selectedCategory
    );

    const handleGoToHomePage = () => {
        navigate('/');
    };

    if (isLoading) {
        return <LoadingPage dataName="menu" />;
    } else if (menuError) {
        return (
            <ErrorPage>
                <p>{menuError}</p>
                <GoBack text={'Return Home'} handleClick={handleGoToHomePage} />
            </ErrorPage>
        );
    } else {
        return (
            <main className="menu-page">
                <h1 className="menu-header">MENU</h1>
                <p className="menu-subtitle">Good coffee, cozy bites & plenty of purrs</p>

                <div className="menu-category-buttons">
                    <button onClick={() => setSelectedCategory("Espresso")}>Espresso</button>
                    <button onClick={() => setSelectedCategory("Latte")}>Latte</button>
                    <button onClick={() => setSelectedCategory("Tea")}>Tea</button>
                    <button onClick={() => setSelectedCategory("Pastries")}>Pastries</button>
                    <button onClick={() => setSelectedCategory("Breakfast")}>Breakfast</button>
                    <button onClick={() => setSelectedCategory("Lunch")}>Lunch</button>
                </div>

                <h2 className="menu-title">{selectedCategory}</h2>

                {filteredMenu.length ? (
                    <div className="menu-card-container">
                        {filteredMenu.map((menu) => (
                            <li className="menu-card-item" key={menu.id}>
                                <MenuCard menu={menu} />
                            </li>
                        ))}
                    </div>
                ) : (
                    <p>
                        <em>We're sorry, there are no {selectedCategory} items to display at this time.</em>
                    </p>
                )}

            </main>
        );
    };
}


export default CafeMenu;