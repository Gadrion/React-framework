import React from 'react';

const Textarea = ({id, text, placeholder, cols="30", rows="8", value, handleChange}) => {
    return (
        <div className="label-textarea">
            <label htmlFor={id}>{text}</label>
            <textarea id={id} placeholder={placeholder} cols={cols} rows={rows} onChange={handleChange} value={value}></textarea>
        </div>
    );
};

export default Textarea;