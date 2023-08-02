import React, { useState, InputHTMLAttributes } from 'react';
import './Input.css';
import Image from 'next/image';

type InputProps = {
    placeHolder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
    iconSrc?: string;
    className?: string;
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ search, setSearch, placeHolder = '', darkMode = false, fullWidth, iconSrc, className = '' }) => {

    return (
        <div className='inputContainer'>
            {iconSrc && <Image alt='' width={16} height={16} src={iconSrc} />}
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={placeHolder} className={`input ${className} ${darkMode && 'darkMode'} ${iconSrc && 'inputWithImg'} ${fullWidth ? 'fullWidth' : ''}`} type="text" />
        </div>
    );
};

export default Input;
