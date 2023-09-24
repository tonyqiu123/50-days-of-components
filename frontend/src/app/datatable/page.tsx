'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import DataTable from '@/components/DataTable/DataTable';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';

const DataTableDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `import DataTable from '@/components/DataTable/DataTable';

const actions = [
    {
        name: "Edit job",
        action: async () => { }
    },
    {
        name: "Delete job",
        action: async () => { }
    }
]

const jobs = [
    {
        jobTitle: "Software Engineer",
        salary: 90000,
        yoeRequired: 2,
        location: "San Francisco",
        jobDescription: "Develop and maintain software applications.",
    },
    {
        jobTitle: "Data Scientist",
        salary: 85000,
        yoeRequired: 3,
        location: "New York",
        jobDescription: "Analyze and interpret complex data to inform business decisions.",
    }
];

<DataTable darkMode={isDarkMode} data={jobs} actions={actions} />
`;


    const actions = [
        {
            name: "Edit job",
            action: async () => { }
        },
        {
            name: "Delete job",
            action: async () => { }
        }
    ]

    const jobs = [
        {
            jobTitle: "Software Engineer",
            salary: 90000,
            yoeRequired: 2,
            location: "San Francisco",
            jobDescription: "Develop and maintain software applications.",
        },
        {
            jobTitle: "Data Scientist",
            salary: 85000,
            yoeRequired: 3,
            location: "New York",
            jobDescription: "Analyze and interpret complex data to inform business decisions.",
        },
        {
            jobTitle: "UX Designer",
            salary: 75000,
            yoeRequired: 1,
            location: "Los Angeles",
            jobDescription: "Design user interfaces and enhance user experiences.",
        },
        {
            jobTitle: "Product Manager",
            salary: 100000,
            yoeRequired: 4,
            location: "Seattle",
            jobDescription: "Oversee product development and drive strategy.",
        },
        {
            jobTitle: "Marketing Specialist",
            salary: 60000,
            yoeRequired: 2,
            location: "Chicago",
            jobDescription: "Plan and execute marketing campaigns.",
        },
        {
            jobTitle: "Financial Analyst",
            salary: 80000,
            yoeRequired: 2,
            location: "Houston",
            jobDescription: "Analyze financial data and provide insights.",
        },
        {
            jobTitle: "Graphic Designer",
            salary: 65000,
            yoeRequired: 1,
            location: "Miami",
            jobDescription: "Create visual assets for marketing and branding.",
        },
        {
            jobTitle: "Software Quality Engineer",
            salary: 85000,
            yoeRequired: 3,
            location: "Austin",
            jobDescription: "Ensure software quality through testing and QA processes.",
        },
        {
            jobTitle: "HR Manager",
            salary: 90000,
            yoeRequired: 5,
            location: "Boston",
            jobDescription: "Lead human resources initiatives and personnel management.",
        },
    ];


    const cssCode = `th {
    transition: background-color 0.15s;
    padding: 8px;
}

th>p {
    cursor: pointer;
    width: fit-content;
    padding: 6px 10px;
    transition: background-color 0.15s;
    user-select: none;
}

th>p:hover {
    background-color: #f8f8f8;
}

table {
    background-color: white;
    width: 100%;
    border-collapse: collapse;
}

table p {
    white-space: nowrap;
}

tr {
    border: 1px solid #f3f3f3;
    transition: background-color 0.15s;
}

tbody>tr:hover {
    background-color: #f8f8f8;
}

td {
    padding: 12px;
    transition: background-color 0.15s;
    text-align: left;
}


.table-deleteActivated {
    gap: 16px;
    justify-content: flex-start !important;
}

.table-actionsComponent {
    user-select: none;
    width: fit-content;
    height: fit-content;
    position: relative;
}

.table-actionsComponent>img {
    padding: 6px;
    cursor: pointer;
    transition: background-color .15s;
}

.table-actionsComponent>img:hover {
    background-color: #eeeeee;
}

.table-actionsComponent-dropdown {
    box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    position: absolute !important;
    z-index: 20;
    top: 100%;
    right: 0;
    border: 1px solid #f3f3f3;
    width: fit-content;
    padding: 4px;
    background-color: white;
    pointer-events: none;
    transition: opacity 0.15s;
    opacity: 0;
}

.active.table-actionsComponent-dropdown {
    display: flex;
    flex-direction: column;
    pointer-events: unset;
    opacity: 1;
}


.table-actionsComponent-dropdown>p {
    cursor: pointer;
    padding: 8px 12px;
    transition: background-color .15s;
}

.table-actionsComponent-dropdown>p:hover {
    background-color: #f8f8f8;
}

/* darkMode */
table.darkMode th>p:hover {
    background-color: #313131;
}

table.darkMode {
    background-color: rgb(0, 0, 0);
}

table.darkMode tr {
    background-color: rgb(0, 0, 0);
    border: 1px solid #313131;
}

table.darkMode tbody>tr:hover {
    background-color: #313131;
}

table.darkMode .table-actionsComponent>img:hover {
    background-color: #a8a8a8;
}

table.darkMode .table-actionsComponent-dropdown {
    box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 1px solid #464646;
    background-color: rgb(0, 0, 0);
}

table.darkMode .table-actionsComponent-dropdown>p:hover {
    background-color: #313131;
}`

    const tsxCode = `import React, { useState, useEffect, useRef } from 'react';
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
                    <img style={{ cursor: 'pointer', filter: \`invert(\${darkMode ? '1' : '0'})\` }} src='/DataTable/ellipsis.svg' />
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
        <table className={\`table \${darkMode ? 'darkMode' : ''}\`}>
            <thead>
                <tr>
                    {tableColumns &&
                        tableColumns.map((key) => (
                            <th key={key} >
                                <p onClick={() => handleSort(key)} style={{ marginLeft: \`\${determineAlignment(data[0][key]) === 'right' ? 'auto' : ''}\` }}>
                                    {key}
                                    {sortCriteria === key && sortOrder === 'asc' ? ' ↑' : ''}
                                    {sortCriteria === key && sortOrder === 'desc' ? ' ↓' : ''}
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
                                <td style={{ textAlign: \`\${determineAlignment(item[columnKey])}\` }} key={columnKey}>
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

`


    return (
        <React.Fragment>

            <h1>DataTable component</h1>
            <Spacer y={4} />
            <p>The DataTable component is a versatile React component that facilitates dynamic sorting and display of tabular data, complete with optional action buttons. It utilizes state management for sorting, offers customizable actions, and dynamically determines cell alignment based on data types, providing a user-friendly and adaptable data presentation solution.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/DataTable' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Positive</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <DataTable darkMode={isDarkMode} data={jobs} actions={actions} />
                    </div>
                </TabsContent>


                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>


            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />
            <h1>Component Code</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='tsx'><p>tsx</p></TabsTrigger>
                <TabsTrigger value='css'><p>css</p></TabsTrigger>

                <TabsContent value='tsx'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

                <TabsContent value='css'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='css' code={cssCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>


            </Tabs>
        </React.Fragment>
    );
};

export default DataTableDemo;
