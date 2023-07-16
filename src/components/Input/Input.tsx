import React, { useState, InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = {
    placeHolder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
} & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ placeHolder = '', darkMode = false, fullWidth, ...props }) => {

    return (
        <input placeholder={placeHolder} className={`${darkMode && 'darkMode'} ${fullWidth && 'fullWidth'}`} type="text" {...props} />
    );
};

export default Input;
