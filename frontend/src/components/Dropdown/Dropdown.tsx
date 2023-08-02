import React, { ChangeEvent, useState } from 'react';
import './Dropdown.css'

interface SelectDropdownProps {
    handleSetState: (value: any) => void;
    values: any[];
    label?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ handleSetState, values, label }) => {
    const [selectedValue, setSelectedValue] = useState(values[0]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        handleSetState(newValue);
    }

    return (
        <>
            {label && <p>{label}</p>}
            <select value={selectedValue} onChange={handleChange}>
                {values.map((value) => {
                    return <option key={value} value={value}>{value}</option>
                })}
            </select>
        </>
    )
};

export default SelectDropdown;
