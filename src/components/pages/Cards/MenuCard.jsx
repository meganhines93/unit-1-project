const MenuCard = ({ menu }) => {
    return(
        <div className = "menu-card">
            <img
                className="menu-card-image"
                src={menu.imageId}
                alt={'Menu Item Image'}
            />
            <div className="menu-card-content">
                <h3 className="menu-card-name">{menu.name}</h3>
                <p className="menu-card-description">{menu.description}</p>
                <p className="menu-card-price">Price: ${menu.price}</p>
            </div>
        </div>
    );
}

export default MenuCard;