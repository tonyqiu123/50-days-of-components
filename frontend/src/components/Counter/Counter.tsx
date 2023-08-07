import React, { useRef, useState, useEffect } from "react";

interface CounterProps {
    target: number;
    increment?: number;
    duration?: number;
    className?: string;
}

const Counter: React.FC<CounterProps> = ({ target = 100, increment = 1, duration = 1000, className = '' }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const numberRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!numberRef.current) return;

        let startValue = 0;
        const steps = Math.ceil(target / increment);
        const interval = setInterval(() => {
            if (startValue >= target) {
                clearInterval(interval);
            } else {
                startValue += increment;
                setCurrentValue(startValue);
            }
        }, duration / steps);

        return () => {
            clearInterval(interval);
        };
    }, [target, increment, duration]);

    return (
        <h1 className={className} ref={numberRef}>{currentValue}</h1>
    );
};

export default Counter;
