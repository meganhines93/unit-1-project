import React from 'react';
import { useNavigate } from "react-router";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import GoBack from '../../common/GoBack.jsx';
import MenuCard from './Cards/MenuCard.jsx';
import { menuData } from '../mockData/menuData.js';


const CafeMenu = ({ isLoading, menu = [], menuError }) => {
    const navigate = useNavigate();

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
        const espressoDrinks = menuData.filter((menu) => {
            return menu.category === "Espresso";
        });

        const latteDrinks = menuData.filter((menu) => {
            return menu.category === "Latte";
        });

        const teaDrinks = menuData.filter((menu) => {
            return menu.category === "Tea";
        });

        const pastries = menuData.filter((menu) => {
            return menu.category === "Pastries";
        });

        const breakfast = menuData.filter((menu) => {
            return menu.category === "Breakfast";
        });

        const lunch = menuData.filter((menu) => {
            return menu.category === "Lunch";
        });

        let espressoJSX = espressoDrinks.map((menu) => {
            return (
                <li className="menu-card-item" key={menu.id}>
                    <MenuCard menu={menu} />
                </li>
            );
        });

        let latteJSX = latteDrinks.map((menu) => {
            return (
                <li className="menu-card-item" key={menu.id}>
                    <MenuCard menu={menu} />
                </li>
            );
        });

        let teaJSX = teaDrinks.map((menu) => {
            return (
                <li className="menu-card-item" key={menu.id}>
                    <MenuCard menu={menu} />
                </li>
            );
        });

        let pastriesJSX = pastries.map((menu) => {
            return (
                <li className="menu-card-item" key={menu.id}>
                    <MenuCard menu={menu} />
                </li>
            );
        });

        let breakfastJSX = breakfast.map((menu) => {
            return (
                <li className="menu-card-item" key={menu.id}>
                    <MenuCard menu={menu} />
                </li>
            );
        });

        let lunchJSX = lunch.map((menu) => {
            return (
                <li className="menu-card-item" key={menu.id}>
                    <MenuCard menu={menu} />
                </li>
            );
        });


        return (
            <main className="menu-page">
                <h1 className="menu-header">MENU</h1>

                <h2 className="menu-h2">Espresso</h2>
                {espressoDrinks.length ? (
                    <div className="menu-card-container">{espressoJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no espresso items to display at this time.</em>
                    </p>
                )}

                <h2 className="menu-h2">Lattes</h2>
                {latteDrinks.length ? (
                    <div className="menu-card-container">{latteJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no latte items to display at this time.</em>
                    </p>
                )}

                <h2 className="menu-h2">Tea</h2>
                {teaDrinks.length ? (
                    <div className="menu-card-container">{teaJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no tea items to display at this time.</em>
                    </p>
                )}

                <h2 className="menu-h2">Pastries</h2>
                {pastries.length ? (
                    <div className="menu-card-container">{pastriesJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no pastries items to display at this time.</em>
                    </p>
                )}

                <h2 className="menu-h2">Breakfast</h2>
                {breakfast.length ? (
                    <div className="menu-card-container">{breakfastJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no breakfast items to display at this time.</em>
                    </p>
                )}

                <h2 className="menu-h2">Lunch</h2>
                {lunch.length ? (
                    <div className="menu-card-container">{lunchJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no lunch items to display at this time.</em>
                    </p>
                )}

            </main>
        );
    };
}


export default CafeMenu;