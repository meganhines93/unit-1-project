const Card = ({ children, clickable }) => {
    return <div classname={`card ${clickable && 'clickable-card'}`}>{children}</div>;
};

export default Card;