'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../RootLayout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Table from '@/components/Table/Table';

const TableDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `import Table from '@/components/Table/Table';
    
const chessOpenings = [
        {
            opening: "Ruy Lopez",
            status: "Popular",
            complexity: "High",
            startingMoves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
        },
        {
            opening: "Sicilian Defense",
            status: "Common",
            complexity: "Medium",
            startingMoves: "1.e4 c5",
        },
        {
            opening: "King's Gambit",
            status: "Aggressive",
            complexity: "High",
            startingMoves: "1.e4 e5 2.f4",
        },
        {
            opening: "French Defense",
            status: "Solid",
            complexity: "Medium",
            startingMoves: "1.e4 e6",
        },
        {
            opening: "Caro-Kann Defense",
            status: "Solid",
            complexity: "Medium",
            startingMoves: "1.e4 c6",
        },
        {
            opening: "English Opening",
            status: "Versatile",
            complexity: "Medium",
            startingMoves: "1.c4",
        },
        {
            opening: "Italian Game",
            status: "Popular",
            complexity: "Medium",
            startingMoves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
        },
        {
            opening: "Pirc Defense",
            status: "Solid",
            complexity: "High",
            startingMoves: "1.e4 d6",
        },
        {
            opening: "Nimzo-Indian Defense",
            status: "Strategic",
            complexity: "High",
            startingMoves: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
        },
        {
            opening: "Grünfeld Defense",
            status: "Dynamic",
            complexity: "High",
            startingMoves: "1.d4 Nf6 2.c4 g6 3.Nc3 d5",
        },
        {
            opening: "Scandinavian Defense",
            status: "Uncommon",
            complexity: "Medium",
            startingMoves: "1.e4 d5",
        },
    ];
    
    <Table darkMode={isDarkMode}>
    <Table.Header>
        <Table.Row>
            <Table.Head>Opening</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Complexity</Table.Head>
            <Table.Head>Starting Moves</Table.Head>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        {chessOpenings.map((opening) => (
            <Table.Row key={opening.opening}>
                <Table.Cell>{opening.opening}</Table.Cell>
                <Table.Cell>{opening.status}</Table.Cell>
                <Table.Cell>{opening.complexity}</Table.Cell>
                <Table.Cell>{opening.startingMoves}</Table.Cell>
            </Table.Row>
        ))}
    </Table.Body>
</Table>`;

    const chessOpenings = [
        {
            opening: "Ruy Lopez",
            status: "Popular",
            complexity: "High",
            startingMoves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
        },
        {
            opening: "Sicilian Defense",
            status: "Common",
            complexity: "Medium",
            startingMoves: "1.e4 c5",
        },
        {
            opening: "King's Gambit",
            status: "Aggressive",
            complexity: "High",
            startingMoves: "1.e4 e5 2.f4",
        },
        {
            opening: "French Defense",
            status: "Solid",
            complexity: "Medium",
            startingMoves: "1.e4 e6",
        },
        {
            opening: "Caro-Kann Defense",
            status: "Solid",
            complexity: "Medium",
            startingMoves: "1.e4 c6",
        },
        {
            opening: "English Opening",
            status: "Versatile",
            complexity: "Medium",
            startingMoves: "1.c4",
        },
        {
            opening: "Italian Game",
            status: "Popular",
            complexity: "Medium",
            startingMoves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
        },
        {
            opening: "Pirc Defense",
            status: "Solid",
            complexity: "High",
            startingMoves: "1.e4 d6",
        },
        {
            opening: "Nimzo-Indian Defense",
            status: "Strategic",
            complexity: "High",
            startingMoves: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
        },
        {
            opening: "Grünfeld Defense",
            status: "Dynamic",
            complexity: "High",
            startingMoves: "1.d4 Nf6 2.c4 g6 3.Nc3 d5",
        },
        {
            opening: "Scandinavian Defense",
            status: "Uncommon",
            complexity: "Medium",
            startingMoves: "1.e4 d5",
        },
    ];

    const countryStatistics = [
        {
            country: "United States",
            population: "331 million",
            gdp: "$22.675 trillion",
            unemploymentRate: "6.0%",
            medianAge: 38,
            officialLanguage: "English",
        },
        {
            country: "China",
            population: "1.404 billion",
            gdp: "$17.720 trillion",
            unemploymentRate: "5.1%",
            medianAge: 38,
            officialLanguage: "Mandarin",
        },
        {
            country: "India",
            population: "1.393 billion",
            gdp: "$2.875 trillion",
            unemploymentRate: "6.7%",
            medianAge: 28,
            officialLanguage: "Hindi, English",
        },
        {
            country: "Japan",
            population: "126 million",
            gdp: "$6.140 trillion",
            unemploymentRate: "2.9%",
            medianAge: 48,
            officialLanguage: "Japanese",
        },
        {
            country: "Germany",
            population: "83 million",
            gdp: "$4.238 trillion",
            unemploymentRate: "3.9%",
            medianAge: 45,
            officialLanguage: "German",
        },
        {
            country: "United Kingdom",
            population: "68 million",
            gdp: "$2.990 trillion",
            unemploymentRate: "4.8%",
            medianAge: 40,
            officialLanguage: "English",
        },
        {
            country: "France",
            population: "65 million",
            gdp: "$2.806 trillion",
            unemploymentRate: "7.8%",
            medianAge: 42,
            officialLanguage: "French",
        },
        {
            country: "Italy",
            population: "60 million",
            gdp: "$2.218 trillion",
            unemploymentRate: "9.2%",
            medianAge: 47,
            officialLanguage: "Italian",
        },
        {
            country: "Brazil",
            population: "213 million",
            gdp: "$2.469 trillion",
            unemploymentRate: "14.1%",
            medianAge: 33,
            officialLanguage: "Portuguese",
        },
        {
            country: "Russia",
            population: "144 million",
            gdp: "$1.778 trillion",
            unemploymentRate: "4.5%",
            medianAge: 40,
            officialLanguage: "Russian",
        },
    ];

    const tsxCode = `import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import './Table.css'

type TableProps = {
    darkMode?: boolean
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;


const Table: React.FC<TableProps> & { Header: React.FC<TableHeaderProps>, Head: React.FC<TableHeadProps>, Body: React.FC<TableBodyProps>, Row: React.FC<TableRowProps>, Cell: React.FC<TableCellProps> } = ({ darkMode = false, children, ...props }) => {

    return (
        <table {...props} className={\`table \${darkMode ? 'darkMode' : ''} \${props.className ? props.className : ''}\`}>
            {children}
        </table>
    );
};

type TableHeaderProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableHeader: React.FC<TableHeaderProps> = ({ children, ...props }) => {
    return (
        <thead {...props} className={\`thead \${props.className ? props.className : ''}\`}>
            {children}
        </thead>
    )
}

type TableHeadProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
    return (
        <th {...props} className={\`th \${props.className ? props.className : ''}\`}>
            {children}
        </th>
    )
}

type TableBodyProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
    return (
        <tbody {...props} className={\`tbody \${props.className ? props.className : ''}\`}>
            {children}
        </tbody>
    )
}

type TableRowProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
    return (
        <tr {...props} className={\`tr \${props.className ? props.className : ''}\`}>
            {children}
        </tr>
    )
}

type TableCellProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => {
    return (
        <td {...props} className={\`td \${props.className ? props.className : ''}\`}>
            {children}
        </td>
    )
}

Table.Cell = TableCell
Table.Body = TableBody
Table.Row = TableRow
Table.Head = TableHead
Table.Header = TableHeader
export default Table`

    const cssCode = `.table {
    background-color: white;
    width: 100%;
    border-collapse: collapse;
}

.thead>.tr {
    border-top: none;
}

.th {
    padding: 16px;
    text-align: left;
    font-size: 14px;
}


.tr {
    border-top: 1px solid #f3f3f3;
    transition: all 350ms cubic-bezier(0.32, 0.72, 0, 1);
}


.tr:hover {
    background-color: #f8f8f8;
}

.td {
    font-size: 14px;
    padding: 12px;
    text-align: left;
}

/* Dark Mode Styles */
.darkMode.table {
    background-color: black;
}
.darkMode.table * {
    color: white;
}

.darkMode.table .tr {
    border-top: 1px solid #313131;
}

.darkMode.table .tr:hover {
    background-color: #313131;
}`


    const unitTestCode = `import React from 'react';
import { render } from '@testing-library/react';
import Table from '@/components/Table/Table';

describe('Table components', () => {
    it('renders Table component', () => {
    const { getByText } = render(<Table>Table Content</Table>);
    const tableElement = getByText('Table Content');
    expect(tableElement).toBeInTheDocument();
    });

    it('renders TableHeader component', () => {
    const { getByText } = render(<Table.Header>Header Content</Table.Header>);
    const headerElement = getByText('Header Content');
    expect(headerElement).toBeInTheDocument();
    });

    it('renders TableHead component', () => {
    const { getByText } = render(<Table.Head>Head Content</Table.Head>);
    const headElement = getByText('Head Content');
    expect(headElement).toBeInTheDocument();
    });

    it('renders TableBody component', () => {
    const { getByText } = render(<Table.Body>Body Content</Table.Body>);
    const bodyElement = getByText('Body Content');
    expect(bodyElement).toBeInTheDocument();
    });

    it('renders TableRow component', () => {
    const { getByText } = render(<Table.Row>Row Content</Table.Row>);
    const rowElement = getByText('Row Content');
    expect(rowElement).toBeInTheDocument();
    });

    it('renders TableCell component', () => {
    const { getByText } = render(<Table.Cell>Cell Content</Table.Cell>);
    const cellElement = getByText('Cell Content');
    expect(cellElement).toBeInTheDocument();
    });
});
`

    return (
        <React.Fragment>

            <h4>Day 40 / 50</h4>
            <Spacer y={2} />
            <h1>Table component</h1>
            <Spacer y={4} />
            <p>The table component is a versatile solution for systematically arranging and displaying data, proving particularly advantageous in scenarios like financial portfolio tracking, academic result summaries, and e-commerce product listings, where organized data presentation aids in easy comparison, assessment, and informed decision-making.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/Table' text='Documentation' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=VtWweL7ZNb0' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Chess Openings</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Country Data (2021 Q3)</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Table darkMode={isDarkMode}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Head>Opening</Table.Head>
                                    <Table.Head>Status</Table.Head>
                                    <Table.Head>Complexity</Table.Head>
                                    <Table.Head>Starting Moves</Table.Head>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {chessOpenings.map((opening) => (
                                    <Table.Row key={opening.opening}>
                                        <Table.Cell>{opening.opening}</Table.Cell>
                                        <Table.Cell>{opening.status}</Table.Cell>
                                        <Table.Cell>{opening.complexity}</Table.Cell>
                                        <Table.Cell>{opening.startingMoves}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <Table darkMode={isDarkMode}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Head>Country</Table.Head>
                                    <Table.Head>Official Language</Table.Head>
                                    <Table.Head style={{ textAlign: 'right' }}>Population</Table.Head>
                                    <Table.Head style={{ textAlign: 'right' }}>GDP</Table.Head>
                                    <Table.Head style={{ textAlign: 'right' }}>Unemployment Rate</Table.Head>
                                    <Table.Head style={{ textAlign: 'right' }}>Median Age</Table.Head>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {countryStatistics.map((countryStat) => (
                                    <Table.Row key={countryStat.country}>
                                        <Table.Cell>{countryStat.country}</Table.Cell>
                                        <Table.Cell>{countryStat.officialLanguage}</Table.Cell>
                                        <Table.Cell style={{ textAlign: 'right' }}>{countryStat.population}</Table.Cell>
                                        <Table.Cell style={{ textAlign: 'right' }}>{countryStat.gdp}</Table.Cell>
                                        <Table.Cell style={{ textAlign: 'right' }}>{countryStat.unemploymentRate}</Table.Cell>
                                        <Table.Cell style={{ textAlign: 'right' }}>{countryStat.medianAge}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>

                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' darkMode={isDarkMode}>
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
                <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

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

                <TabsContent value='test'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={unitTestCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    );
};

export default TableDemo;
