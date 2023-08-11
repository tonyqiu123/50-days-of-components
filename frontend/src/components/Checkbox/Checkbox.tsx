import React, { HTMLAttributes, useState } from 'react';
import './Checkbox.css';
import Image from 'next/image';

type CheckboxProps = {
    primaryText: string;
    subText?: string;
    onChange?: (checked: boolean) => void;
    darkMode?: boolean;
} & HTMLAttributes<HTMLElement>

const Checkbox: React.FC<CheckboxProps> = ({
    primaryText,
    subText = '',
    onChange = () => { },
    darkMode = false,
    ...props
}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(!isChecked);
        onChange(newCheckedState);
    };

    return (
        <label {...props} className={`${props.className ? props.className : ''} ${darkMode && 'darkMode'} checkbox-container`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className='checkmark'>
                <Image width={10} height={10} src='/Checkbox/checkmark.svg' alt='checkmark' />
            </div>
            <div className="text-container">
                <p className="primary-text">{primaryText}</p>
                {subText && <p className="sub-text">{subText}</p>}
            </div>
        </label>

    );
};

export default Checkbox;
