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
        let menuJSX = menuData.map((menu) => {
            return (
                <li className="menu-card-item" key={menu.id}>
                    <MenuCard menu={menu} />
                </li>
            );
        });

        return (
            <main className="menu-page">
                <h1 className="menu-header">MENU</h1>
                {menuData.length ? (
                    <div className="menu-card-container">{menuJSX}</div>
                ) : (
                    <p>
                        <em>We're sorry, there are no menu items to display at this time.</em>
                    </p>
                )}
            </main>
        );
    };
}


export default CafeMenu;