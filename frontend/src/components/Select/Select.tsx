import React, { FC, HTMLAttributes, useState } from 'react';
import './Select.css';
import Button from '../Button/Button';
import Popover from '../Popover/Popover';

type SelectProps = {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    darkMode?: boolean;
    queries: string[]
    placeholder?: string
} & HTMLAttributes<HTMLElement>;

const Select: FC<SelectProps> = ({ selected, setSelected, darkMode = false, queries, placeholder = 'Search', ...props }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = (query: string) => {
        setSelected(query);
        setIsOpen(false)
    }

    return (
        <Popover isOpen={isOpen} setIsOpen={setIsOpen} className={`select ${darkMode ? 'darkMode' : ''}`} {...props}>
            <Button style={{ width: '100%', justifyContent: 'space-between' }} size='l' darkMode={darkMode} variant='outline' text={selected ? selected : placeholder} imageSrc='/select/arrow.svg' />
            <div className='selectDropdown'>
                {queries.map((query, index) => {
                    return (
                        <p onClick={() => handleOnClick(query)} key={index}>
                            {query}
                        </p>
                    )
                })}
            </div>
        </Popover>
    );
};

export default Select;
