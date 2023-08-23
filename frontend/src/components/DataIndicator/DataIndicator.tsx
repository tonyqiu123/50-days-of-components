import React, { useState, useEffect } from 'react';
import './DataIndicator.css'


type DataIndicatorProps = {
    currentData: number
    previousData: number
    text?: string
}

const DataIndicator: React.FC<DataIndicatorProps> = ({ currentData, previousData, text }) => {
    const [difference, setDifference] = useState<'neutral' | 'positive' | 'negative'>('neutral');

    useEffect(() => {
        const newDifference = currentData - previousData;
        if (newDifference > 0) {
            return setDifference('positive');
        }
        else if (newDifference < 0) {
            return setDifference("negative");
        }
    }, [currentData, previousData]);

    return (
        <div className='dataIndicator'>

            <p className='currentData'>{currentData}</p>
            <div className={`difference ${difference}`}>
                {difference === 'negative' && '-'}
                {difference === 'positive' && '+'}
                {Math.abs(currentData - previousData)} ({(currentData / previousData - 1) * 100}%){difference === 'positive' && '↑'} {difference === 'negative' && '↓'} {text}
            </div>

        </div>
    );
};

export default DataIndicator