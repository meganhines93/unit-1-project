import { Link } from "react-router";
import Card from './../../../common/Card.jsx'


const CatCard = ({ cat }) => {
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
                        <h2 className="cat-card-name">{cat.name}</h2> 
                    </div>
                </div>
            </Card>
        </Link>
    );

} 

export default CatCard;