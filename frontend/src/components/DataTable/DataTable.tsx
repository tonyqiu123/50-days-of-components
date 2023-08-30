import React, { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button/Button';
import './DataTable.css';
import OutsideClick from '../OutsideClick/OutsideClick';
import Popover from '../Popover/Popover';

interface TableProps {
    data: any[];
    actions?: { name: string; action: () => Promise<void> }[];
    darkMode?: boolean
}

const DataTable: React.FC<TableProps> = ({ data, actions, darkMode = false }) => {
    const [sortCriteria, setSortCriteria] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [tableColumns, setTableColumns] = useState<string[]>();


    useEffect(() => {
        if (data && data.length > 0) {
            const keys = Object.keys(data[0])
            setTableColumns(keys);
        }
    }, [data]);



    const handleSort = (criteria: string): void => {
        if (sortCriteria === criteria) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortCriteria(criteria);
            setSortOrder('asc');
        }
    };

    const ActionsComponent = (selectedIndex: number) => {
        if (actions) {
            return (
                <Popover className='table-actionsComponent' position='down-left'>
                    <img style={{ cursor: 'pointer', filter: `invert(${darkMode ? '1' : '0'})` }} src='/DataTable/ellipsis.svg' />
                    <div className='table-actionsComponent-dropdown'>
                        {actions.map((action, index) => (
                            <p
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    action.action();
                                }}
                            >
                                {action.name}
                            </p>
                        ))}
                    </div>
                </Popover>

            );
        }
    };

    if (data) {
        data.sort((a, b) => {
            const valueA = a[sortCriteria];
            const valueB = b[sortCriteria];

            // Check if values are numeric and sort numerically if they are
            if (!isNaN(valueA) && !isNaN(valueB)) {
                return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
            }

            // If values are not numeric, convert them to strings and sort
            const strA = valueA !== undefined ? valueA.toString().toLowerCase() : '';
            const strB = valueB !== undefined ? valueB.toString().toLowerCase() : '';

            if (strA < strB) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (strA > strB) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }

    function determineAlignment(value: string | number) {
        if (typeof value === 'number') {
            return 'right';
        }

        if (typeof value === 'string') {
            // Check if the string is a percentage
            if (value.trim().endsWith('%')) {
                return 'right';
            }
            if (value.trim().startsWith('$')) {
                return 'right';
            }

            // Try to parse the string as a number
            const numericValue = parseFloat(value);
            if (!isNaN(numericValue)) {
                return 'right';
            }
        }

        return 'left';
    }


    return (
        <table className={`table ${darkMode ? 'darkMode' : ''}`}>
            <thead>
                <tr>
                    {tableColumns &&
                        tableColumns.map((key) => (
                            <th key={key}>
                                <p onClick={() => handleSort(key)}>
                                    {key}&nbsp;&nbsp;
                                    {sortCriteria === key && sortOrder === 'asc' ? '↑' : ''}
                                    {sortCriteria === key && sortOrder === 'desc' ? '↓' : ''}
                                </p>
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item: any, index: number) => (
                    <tr key={index}>
                        {tableColumns &&
                            tableColumns.map((columnKey) => (
                                <td style={{ textAlign: `${determineAlignment(item[columnKey])}` }} key={columnKey}>
                                    <p>{String(item[columnKey])}</p>
                                </td>
                            ))}
                        <td>{ActionsComponent(index)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default DataTable;

