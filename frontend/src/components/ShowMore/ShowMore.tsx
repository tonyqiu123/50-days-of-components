import React, { HTMLAttributes, useState } from 'react';
import './ShowMore.css';

type ShowMoreProps = {
    children: React.ReactNode;
    height?: number
    text?: string
    darkMode?: boolean
} & HTMLAttributes<HTMLElement>;

const ShowMore: React.FC<ShowMoreProps> = ({ children, height, text = 'Show more', darkMode = false, ...props }) => {

    const [showFull, setShowFull] = useState(false);


    return (
        <div {...props} className={`${props.className ? props.className : ''} ${darkMode ? 'darkMode' : ''} showMoreContainer`} style={{ height: `${showFull || !height ? 'auto ' : `${height}px`}` }}>
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
