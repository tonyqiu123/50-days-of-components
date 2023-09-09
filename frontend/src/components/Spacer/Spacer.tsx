import React from 'react';

// atleast x or y is required
type SpacerProps = {
    x?: number;
    y?: number;
} & (
        | { x: number }
        | { y: number }
    );

const Spacer: React.FC<SpacerProps> = ({ x = 0, y = 0 }) => {
    const style = {
        margin: `${y}px ${x}px`,
    };

    return <div style={style}></div>;
};


export default Spacer;