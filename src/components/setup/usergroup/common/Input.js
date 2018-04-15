import React from 'react';
// import './Input.css';

const Input = ({id, text, placeholder, value, handleChange, type}) => {
    return (
        <div className="label-input">
            <label htmlFor={id}>{text}</label>
            <input type={type} placeholder={placeholder} id={id} onChange={handleChange} value={value}/>
        </div>
    );
};

export default Input;