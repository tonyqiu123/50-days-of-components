import React, { useState } from 'react';
import './HoverCard.css'

type HoverCardProps = {
    children: React.ReactElement[];
    darkMode?: boolean
};

const HoverCard: React.FC<HoverCardProps> = ({ children, darkMode=false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const trigger = React.cloneElement(children[0], {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
    });

    const content = children[1]
        ? React.cloneElement(children[1], {
            className: `hoverCardContent ${isOpen ? 'showHoverCardContent' : ''}`
        })
        : null;

    return (
        <div className={`hoverCard ${darkMode && 'darkMode'}`}
            onMouseLeave={() => setIsOpen(false)}>
            {trigger}
            {content}
        </div>
    );
};

export default HoverCard;
