import React, { useState, InputHTMLAttributes, HTMLAttributes } from 'react';
import './Input.css';
import Image from 'next/image';

type InputProps = {
    placeHolder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
    iconSrc?: string;
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>;
} & HTMLAttributes<HTMLElement>

const Input: React.FC<InputProps> = ({ search, setSearch, placeHolder = '', darkMode = false, fullWidth, iconSrc, ...props }) => {

    return (
        <div {...props} className={'inputContainer'}>
            {iconSrc && <Image alt='' width={16} height={16} src={iconSrc} />}
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={placeHolder} className={`${props.className ? props.className : ''} input ${darkMode ? 'darkMode' : ''} ${iconSrc ? 'inputWithImg' : ''} ${fullWidth ? 'fullWidth' : ''}`} type="text" />
        </div>
    );
};

export default Input;
