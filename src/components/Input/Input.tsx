import React, { useState } from 'react';
import './Input.css';

interface InputProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    placeHolder?: string;
    darkMode?: boolean;
}

const Input: React.FC<InputProps> = ({ text, setText, placeHolder = '', darkMode = false }) => {

    return (
        <input placeholder={placeHolder} className={`${darkMode && 'darkMode'}`} type="text" value={text} onChange={(e) => setText(e.target.value)} />
    );
};

export default Input;
