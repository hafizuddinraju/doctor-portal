import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button 
        className="btn border-none btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">{children}</button>
    );
};

export default PrimaryButton;