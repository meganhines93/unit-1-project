const Input = ({ id, label, type, value, checked,name,ref, min, required, handleChange }) => {
    return(
        <>
            <label htmlFor={id}>
                {label}
                {required && '*'}
            </label>

            <input 
                id={id}
                name={name}
                type={type || 'text'}
                value={value}
                checked={type === 'checkbox' ? checked : undefined}
                ref={ref}
                min={min}
                onChange={handleChange}
            />
        </>
    );
}

export default Input;