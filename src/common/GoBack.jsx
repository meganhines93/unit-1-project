import IconWithLabel from './IconWithLabel.jsx';

const GoBack = ({ text, handleClick }) => {
    return (
        <button type="button" className="link-like-button" onClick={handleClick}>
            <IconWithLabel id="go-back" classes="fa-solid fa-circle-arror-left">
                {text}
            </IconWithLabel>
        </button>
    );
}
export default GoBack;