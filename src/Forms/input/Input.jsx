const Input = ({ id, label, type, value, ref, min, required, handleChange }) => {
    return(
        <>
            <label htmlFor={id}>
                {label}
                {required && '*'}
            </label>
            <input 
                id={id}
                type={type || 'text'}
                value={value}
                ref={ref}
                min={min}
                onChange={handleChange}
            />
        </>
    );
}

export default Input;