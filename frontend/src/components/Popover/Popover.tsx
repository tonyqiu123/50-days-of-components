import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Popover.css'
import OutsideClick from '@/components/OutsideClick/OutsideClick';

type PopoverProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactElement[];
} & HTMLAttributes<HTMLElement>;

const Popover: React.FC<PopoverProps> = ({ isOpen, setIsOpen, children, ...props }) => {

    const trigger = React.cloneElement(children[0], {
        onClick: () => setIsOpen(isOpen => !isOpen),
    });

    // Check if children[1] is valid before using it as content
    const content = children[1]
        ? React.cloneElement(children[1], {
            className: `popoverContent ${isOpen ? 'showPopoverContent' : ''} ${children[1].props.className}`
        })
        : null;

    return (
        <OutsideClick onClickOutside={() => setIsOpen(false)}>
            <div {...props} className={`${props.className ? props.className : ''} popover`}>
                {trigger}
                {content}
            </div>
        </OutsideClick>
    );
};

export default Popover;
