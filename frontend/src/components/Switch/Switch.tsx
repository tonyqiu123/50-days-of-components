import React, { HTMLAttributes, useState } from 'react';
import './Switch.css';

type SwitchProps = {
    onChange: (checked: boolean) => void;
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const Switch: React.FC<SwitchProps> = ({ onChange, darkMode = false, ...props }) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked);
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
