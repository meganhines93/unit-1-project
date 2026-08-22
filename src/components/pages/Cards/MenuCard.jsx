import { useState } from "react";
import Button from '../../../forms/input/Button.jsx';
import Spacer from '../../../common/Spacer.jsx';

const MenuCard = ({ menu }) => {
    const [ openForm, setOpenForm ] = useState(false);
    const handleToggleForm = () => {
        setOpenForm(prevOpenForm => !prevOpenForm);
    };

    return(
        <div className = "menu-card">
            <img
                className="menu-card-image"
                src={menu.imageId}
                alt={'Menu Item Image'}
            />
            <div className="menu-card-content">
                <h3 className="menu-card-name">{menu.name}</h3>
                <h4 className="menu-card-description">{menu.description}</h4>
                <h5 className="menu-card-price">Price: ${menu.price}</h5>
                <h5 className="menu-card-available">{menu.available}</h5>
            </div>
        </div>
    );
}

export default MenuCard;