import { useState } from "react";
import { Link } from "react-router";
import Button from '../../../forms/input/Button.jsx';
import Spacer from './../../../common/Spacer.jsx';
import Card from './../../../common/Card.jsx'


const CatCard = ({ cat }) => {
    const [ openForm, setOpenForm ] = useState(false);

    const handleToggleForm = () => {
        setOpenForm(prevOpenForm => !prevOpenForm);
    };

    return (
        <Link to={`/cats/${cat.id}`}>
            <Card clickable={true}>
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
            </Card>
        </Link>
    );

} 

export default CatCard;