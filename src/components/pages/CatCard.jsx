import { useState } from "react";
import Button from '../../forms/input/Button.jsx';
import Spacer from '../../common/Spacer.jsx';


const CatCard = ({ cat }) => {
    const [ openForm, setOpenForm ] = useState(false);

    const handleToggleForm = () => {
        setOpenForm(prevOpenForm => !prevOpenForm);
    };

    return (
        <div className="cat-card">
            <img
                className="cat-card-image"
                src={cat.imageId}
                alt={'Cat Profile Picture'}
            />
            <div className="cat-card-content">
                <h3 className="cat-card-name">{cat.name}</h3>
                <h4 className="cat-card-personality">{cat.personality}</h4>   
        </div>
        </div>
    );

} 

export default CatCard;