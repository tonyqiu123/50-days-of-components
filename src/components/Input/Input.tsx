import React, { useState, InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    placeHolder?: string;
    darkMode?: boolean;
} & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ text, setText, placeHolder = '', darkMode = false, ...props }) => {

    return (
        <input placeholder={placeHolder} className={`${darkMode && 'darkMode'}`} type="text" value={text} onChange={(e) => setText(e.target.value)} {...props} />
    );
};

export default Input;
