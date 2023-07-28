import React, { useState, InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = {
    placeHolder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
    title?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ placeHolder = '', title, darkMode = false, fullWidth, ...props }) => {

    return (
        <div className='input'>
            {title && <p>{title}</p>}
            <input placeholder={placeHolder} className={`${darkMode && 'darkMode'} ${fullWidth && 'fullWidth'}`} type="text" {...props} />
        </div>
    );
};

export default Input;
