import React from 'react';

const Button = ({ className, onClick, label, type, disabled }) => {
    return (
        <button
          className={className}
          disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
