const IconWithLabel = ({ id, classes, children }) => {
    if (!id) {
        throw new Error(`Icon needs an id!`);
    }

    return(
        <div id={`${id}-icon-container`} classname="icon-with-label">
            <i id={`${id}-icon`} className={`icon ${classes}`} aria-label={`${id} icon`}></i>
        </div>
    );
}

export default IconWithLabel;