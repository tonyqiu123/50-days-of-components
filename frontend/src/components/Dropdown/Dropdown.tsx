import React, { ChangeEvent, HTMLAttributes, useState } from 'react';
import './Dropdown.css'

type SelectDropdownProps = {
    handleSetState: (value: any) => void;
    values: any[];
} & HTMLAttributes<HTMLElement>

const SelectDropdown: React.FC<SelectDropdownProps> = ({ handleSetState, values, ...props }) => {
    const [selectedValue, setSelectedValue] = useState(values[0]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        handleSetState(newValue);
    }

    return (
        <select  value={selectedValue} onChange={handleChange}>
            {values.map((value) => {
                return <option key={value} value={value}>{value}</option>
            })}
        </select>
    )
};

export default SelectDropdown;
