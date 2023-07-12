import React, { useState, ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
    toolTipText: string;
    children?: ReactNode;
    darkMode?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ toolTipText, children, darkMode = false }) => {

    const [hovering, setHovering] = useState(false)


    return (
        <div className={`tooltip ${darkMode && 'darkMode'}`}>
            {children}
            <img src='/tooltipIcon.svg'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)} />
            <p className={`tooltip-hoverBox ${hovering && 'active'}`}
            >{toolTipText}</p>
        </div>
    );
};

export default Tooltip;