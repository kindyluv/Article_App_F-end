import React from 'react';

const Button = ({ className, onClick, label, type, disabled, style, ...args }) => {
    return (
        <button
          className={className}
          id={className}
          disabled={disabled}
            type={type}
            onClick={onClick}
            style={style}
            {...args}
        >
            {label}
        </button>
    );
};

export default Button;
