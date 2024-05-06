import React from 'react'

const Input = ({ onKeyUp, className, type, value, onChange, placeholder, required, defaultValue }) => {
    return (
      <input
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onKeyUp={onKeyUp}
        defaultValue={defaultValue}
      />
    );
};

export default Input
