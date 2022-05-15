import React from 'react';

function Button {
    function Button({ clickHandler, children, type, disabled }) {
        return (
            <button
                onClick={clickHandler}
                type={type}
                disabled={disabled || false}
            >
            </button>
        );
    }
}

export default Button;