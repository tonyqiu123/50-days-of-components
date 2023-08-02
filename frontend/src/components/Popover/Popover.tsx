import React, { useState } from 'react';
import './Popover.css'
import OutsideClick from '@/components/OutsideClick/OutsideClick';


type PopoverProps = {
    children: React.ReactElement[];
};

const Popover: React.FC<PopoverProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const trigger = React.cloneElement(children[0], {
        onClick: () => setIsOpen(!isOpen),
    });

    // Check if children[1] is valid before using it as content
    const content = children[1]
        ? React.cloneElement(children[1], {
            className: `popoverContent ${isOpen ? 'showPopoverContent' : ''}`
        })
        : null;

    return (
        <OutsideClick onClickOutside={() => setIsOpen(false)}>
            <div className='popover'>
                {trigger}
                {content}
            </div>
        </OutsideClick>
    );
};

export default Popover
