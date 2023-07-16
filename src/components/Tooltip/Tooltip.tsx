import React, { useState, ReactNode } from 'react';
import './Tooltip.css';
import Image from 'next/image';

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
            <Image
                alt='tooltipicon'
                src='/tooltipIcon.svg'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)} 
                width={16}
                height={16}
                />
            <p className={`tooltip-hoverBox ${hovering && 'active'}`}
            >{toolTipText}</p>
        </div>
    );
};

export default Tooltip;