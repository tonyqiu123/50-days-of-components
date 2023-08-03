import React, { useState } from 'react';
import './ShowMore.css';

interface ShowMoreProps {
    children: React.ReactNode;
    height?: number
    text?: string
    darkMode?: boolean
}

const ShowMore: React.FC<ShowMoreProps> = ({ children, height = 200, text = 'Show more', darkMode = false }) => {

    const [showFull, setShowFull] = useState(false);


    return (
        <div className={`${darkMode ? 'darkMode' : ''} showMoreContainer`} style={{ height: `${showFull ? 'auto ' : `${height}px`}` }}>
            {!showFull && (
                <div className="gradient" onClick={() => setShowFull(true)}>
                    <p className="showMoreText">{text}</p>
                </div>
            )}
            {children}
        </div>
    );
};

export default ShowMore;
