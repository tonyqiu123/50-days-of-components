import React, { HTMLAttributes, useState } from 'react';
import './Switch.css';

type SwitchProps = {
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const Switch: React.FC<SwitchProps> = ({ isChecked, setIsChecked, darkMode = false, ...props }) => {

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
    };

    return (
        <div
            {...props}
            className={`${props.className ? props.className : ''} switch ${isChecked ? 'checked' : ''} ${darkMode && 'darkMode'}`}
            onClick={handleToggle}
        >
            <div
                className={`slider ${isChecked ? 'checked' : ''}`}
            />
        </div>
    );
};

export default Switch;
