import React, { useState, ReactNode, useRef, useEffect, HTMLAttributes } from 'react';
import './Tooltip.css';
import Image from 'next/image';

type TooltipProps = {
    toolTipText: string;
    children?: ReactNode;
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const Tooltip: React.FC<TooltipProps> = ({ toolTipText, children, darkMode = false, ...props }) => {

    const [hovering, setHovering] = useState(false)
    const [tooltipWidth, setTooltipWidth] = useState(0);


    const invisibleRef = useRef<HTMLParagraphElement>(null);


    useEffect(() => {
        if (invisibleRef.current) {
            setTooltipWidth(invisibleRef.current.offsetWidth / 2);
        }
    }, []);


    return (
        <div {...props} className={`${props.className ? props.className : ''} tooltip ${darkMode && 'darkMode'}`}>
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