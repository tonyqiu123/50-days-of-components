import React, { HTMLAttributes, useState, useEffect } from 'react';
import './Pagination.css';
import Icon from '@/components/Icon/Icon';

// Define props for Pagination component, including optional handleClick function.
type PaginationProps = {
    totalQueries: number; // Total number of queries
    queriesPerPage: number; // Number of queries displayed per page
    darkMode?: boolean
    handleClick?: (index: number, start: number, end: number, numberOfQueries: number) => void; // Optional callback function for click events
} & HTMLAttributes<HTMLElement>;

// Pagination component
const Pagination: React.FC<PaginationProps> = ({ totalQueries, darkMode = false, queriesPerPage, handleClick = () => { }, ...props }) => {

    // State to track the selected page
    const [selected, setSelected] = useState<number>(1);

    // Function to handle click events on indicators
    const handleIndicatorClick = (index: number, start: number, end: number, numberOfQueries: number): void => {
        setSelected(index);
        handleClick(index, start, end, numberOfQueries);
    };

    // Effect to update start, end, and number of queries when the selected page changes
    useEffect(() => {
        const start = queriesPerPage * (selected - 1) + 1;
        const end = Math.min(queriesPerPage * selected, totalQueries);
        const numberOfQueries = end - start + 1;
        handleIndicatorClick(selected, start, end, numberOfQueries);
    }, [selected]);

    // Array to hold JSX elements for pagination indicators
    const Indicator: JSX.Element[] = [];
    const numberOfPages = Math.ceil(totalQueries / queriesPerPage);
    // Loop to create indicator elements
    for (let index = 1; index <= numberOfPages; index++) {
        Indicator.push(
            // Create an indicator with a click event to select the page
            <h4
                key={index}
                className={`indicator ${selected === index ? 'selected' : ''}`}
                onClick={() => setSelected(index)}
            >
                {index}
            </h4>
        );
    }

    // Render the Pagination component
    return (
        <section {...props} className={`pagination ${darkMode ? 'darkMode' : ''}`}>
            <div>
                {selected !== 1 && <Icon invert={darkMode} onClick={() => setSelected(1)} height={16} width={16} image='/pagination/reverseDoubleArrow.svg' />}
            </div>
            <div>
                {selected !== 1 && <Icon invert={darkMode} onClick={() => setSelected(selected => selected - 1)} height={16} width={16} image='/pagination/reverseArrow.svg' />}
            </div>
            {Indicator}
            <div>
                {selected !== numberOfPages && <Icon invert={darkMode} onClick={() => setSelected(selected => selected + 1)} height={16} width={16} image='/pagination/arrow.svg' />}
            </div>
            <div>
                {selected !== numberOfPages && <Icon invert={darkMode} onClick={() => setSelected(numberOfPages)} height={16} width={16} image='/pagination/doubleArrow.svg' />}
            </div>
        </section>
    )
};

export default Pagination;
