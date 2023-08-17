import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import './AspectRatio.css'; // Import the CSS file

type AspectRatioProps = {
    ratio: number;
    children: ReactNode;
    maxHeight?: number;
} & HTMLAttributes<HTMLElement>;

const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, maxHeight, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [hasReachedMaxSize, setHasReachedMaxSize] = useState(false);

    useEffect(() => {
        if (wrapperRef.current) {
            const wrapperHeight = wrapperRef.current.offsetHeight;

            if ((maxHeight && wrapperHeight >= maxHeight)) {
                setHasReachedMaxSize(true);
            } else {
                setHasReachedMaxSize(false);
            }
        }
    }, [maxHeight]);

    // Calculate maximum dimensions while maintaining the aspect ratio
    let calculatedMaxHeight = maxHeight;
    let calculatedMaxWidth;

    if (maxHeight) {
        calculatedMaxWidth = maxHeight * ratio;
    }

    const aspectStyle = {
        paddingTop: `${(1 / ratio) * 100}%`,
        maxWidth: calculatedMaxWidth,
        maxHeight: calculatedMaxHeight,
        ...props.style,
    };

    return (
        <div {...props} className={`aspectRatio ${props.className ? props.className : ''}`} style={aspectStyle}>
            <div
                ref={wrapperRef}
                className={`contentWrapper ${hasReachedMaxSize ? 'reachedMaxSize' : ''}`}
            >
                {children}
            </div>
        </div>
    );
};

export default AspectRatio;
