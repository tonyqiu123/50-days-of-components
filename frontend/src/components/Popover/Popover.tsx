import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Popover.css'
import OutsideClick from '@/components/OutsideClick/OutsideClick';


type PopoverProps = {
    children: React.ReactElement[];
} & HTMLAttributes<HTMLElement>;

const Popover: React.FC<PopoverProps> = ({ children, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

    const trigger = React.cloneElement(children[0], {
        onClick: () => setIsOpen(isOpen => !isOpen),
    });

    // Check if children[1] is valid before using it as content
    const content = children[1]
        ? React.cloneElement(children[1], {
            className: `popoverContent ${isOpen ? 'showPopoverContent' : ''}`
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

export default Popover
