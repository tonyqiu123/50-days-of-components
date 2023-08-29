import React, { useState, useEffect, HTMLAttributes } from 'react';
import './ScrollIndicator.css';

type ScrolIndicatorProps = {
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>

const ScrollIndicator: React.FC<ScrolIndicatorProps> = ({ darkMode = false, ...props }) => {

    const [scrollWidth, setScrollWidth] = useState<number>(0);

    const handleScroll = () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        setScrollWidth(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div {...props} className={`scroll-indicator-container ${darkMode ? 'darkMode' : ''} ${props.className ? props.className : ''}`}>
            <div className="scroll-indicator-bar">
                <div className="scroll-indicator-overlay" style={{ transform: `translateX(${scrollWidth - 100}%)` }}></div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
