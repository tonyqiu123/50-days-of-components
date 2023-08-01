import React, { useState, ReactNode, useRef, useEffect } from 'react';
import './Tooltip.css';
import Image from 'next/image';

interface TooltipProps {
    toolTipText: string;
    children?: ReactNode;
    darkMode?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ toolTipText, children, darkMode = false }) => {

    const [hovering, setHovering] = useState(false)
    const [tooltipWidth, setTooltipWidth] = useState(0);


    const invisibleRef = useRef<HTMLParagraphElement>(null);


    useEffect(() => {
        if (invisibleRef.current) {
            setTooltipWidth(invisibleRef.current.offsetWidth);
        }
    }, []);


    return (
        <div className={`tooltip ${darkMode && 'darkMode'}`}>
            {children}
            <Image
                alt='tooltipicon'
                src='/Tooltip/tooltipIcon.svg'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                width={16}
                height={16}
            />
            <p className={`tooltip-hoverBox ${hovering && 'active'}`} style={{ width: `${tooltipWidth + 28}px` }}>{toolTipText}</p>

            <p ref={invisibleRef} style={{ whiteSpace: 'nowrap', visibility: 'hidden', position: 'absolute' }}>{toolTipText}</p>
        </div>
    );
};

export default Tooltip;