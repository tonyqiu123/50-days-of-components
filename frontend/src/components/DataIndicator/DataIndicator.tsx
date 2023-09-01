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

    const numberConverter = (num: number) => {
        if (Number.isInteger(num)) return num
        return num.toFixed(2)
    }

    return (
        <div className='dataIndicator'>

            <p className='currentData'>{numberConverter(currentData)}</p>
            <div className={`difference ${difference}`}>
                {difference === 'negative' && '-'}
                {difference === 'positive' && '+'}
                {numberConverter(Math.abs(currentData - previousData))} ({numberConverter((currentData / previousData - 1) * 100)}%){difference === 'positive' && '↑'} {difference === 'negative' && '↓'} {text}
            </div>

        </div>
    );
};

export default DataIndicator