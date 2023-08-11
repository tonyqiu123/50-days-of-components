import React, { HTMLAttributes, useState, useEffect } from 'react';
import './Pagination.css';
import Icon from '@/components/Icon/Icon';

type PaginationProps = {
    totalQueries: number;
    queriesPerPage: number;
    darkMode?: boolean;
    handleClick?: (index: number, start: number, end: number, numberOfQueries: number) => void;
} & HTMLAttributes<HTMLElement>;

const Pagination: React.FC<PaginationProps> = ({ totalQueries, darkMode = false, queriesPerPage, handleClick = () => { }, ...props }) => {
    const [selected, setSelected] = useState<number>(1);

    const handleIndicatorClick = (index: number, start: number, end: number, numberOfQueries: number): void => {
        setSelected(index);
        handleClick(index, start, end, numberOfQueries);
    };

    useEffect(() => {
        const start = queriesPerPage * (selected - 1) + 1;
        const end = Math.min(queriesPerPage * selected, totalQueries);
        const numberOfQueries = end - start + 1;
        handleIndicatorClick(selected, start, end, numberOfQueries);
    }, [selected]);

    const Indicator: JSX.Element[] = [];
    const numberOfPages = Math.ceil(totalQueries / queriesPerPage);

    for (let index = 1; index <= numberOfPages; index++) {
        Indicator.push(
            <h4
                key={index}
                className={`indicator ${selected === index ? 'selected' : ''}`}
                onClick={() => setSelected(index)}
            >
                {index}
            </h4>
        );
    }

    return (
        <section {...props} className={`${props.className ? props.className : ''} pagination ${darkMode ? 'darkMode' : ''}`}>
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
    );
};

export default Pagination;
