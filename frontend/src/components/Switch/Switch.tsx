import React, { useState } from 'react';
import './Switch.css';

interface SwitchProps {
    onChange: (checked: boolean) => void;
    darkMode?: boolean
}

const Switch: React.FC<SwitchProps> = ({ onChange, darkMode = false }) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked);
    };

    return (
        <div
            className={`switch ${isChecked ? 'checked' : ''} ${darkMode && 'darkMode'}`}
            onClick={handleToggle}
        >
            <div
                className={`slider ${isChecked ? 'checked' : ''}`}
            />
        </div>
    );
};

export default Switch;
