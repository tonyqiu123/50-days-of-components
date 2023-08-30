import React, { HTMLAttributes, useEffect, useState } from 'react';
import './Popover.css'
import OutsideClick from '@/components/OutsideClick/OutsideClick';

type PopoverProps = {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactElement[];
    position?: 'up-left' | 'down-left' | 'up-right' | 'down-right'
} & HTMLAttributes<HTMLElement>;

const Popover: React.FC<PopoverProps> = ({ isOpen: isOpenProp, setIsOpen: setIsOpenProp, children, position = 'down-right', ...props }) => {
    const [isOpenState, setIsOpenState] = useState(false);

    const isOpen = isOpenProp !== undefined ? isOpenProp : isOpenState;
    const setIsOpen = setIsOpenProp !== undefined ? setIsOpenProp : setIsOpenState;

    const trigger = React.cloneElement(children[0], {
        onClick: () => setIsOpen(isOpen => !isOpen),
    });

    const content = children[1]
        ? React.cloneElement(children[1], {
            className: `popoverContent ${position} ${isOpen ? 'showPopoverContent' : ''} ${children[1].props.className}`
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
