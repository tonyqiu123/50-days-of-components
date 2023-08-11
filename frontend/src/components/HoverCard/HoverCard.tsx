import React, { HTMLAttributes, useState } from 'react';
import './HoverCard.css'

type HoverCardProps = {
    children: React.ReactElement[];
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

const HoverCard: React.FC<HoverCardProps> = ({ children, darkMode = false, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const trigger = React.cloneElement(children[0], {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
    });

    const content = children[1]
        ? React.cloneElement(children[1], {
            className: `${props.className ? props.className : ''} hoverCardContent ${isOpen ? 'showHoverCardContent' : ''}`
        })
        : null;

    return (
        <div {...props} className={`hoverCard ${darkMode && 'darkMode'}`}
            onMouseLeave={() => setIsOpen(false)}>
            {trigger}
            {content}
        </div>
    );
};

export default HoverCard;
