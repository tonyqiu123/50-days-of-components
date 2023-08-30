'use client'

import React, { useState, useEffect } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Table from '@/components/Table/Table';
import { useGlobal } from '../layout'; // Assuming the correct path to useGlobal 
import ShowMore from '@/components/ShowMore/ShowMore';

const BreadcrumbDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Assuming useGlobal returns isDarkMode and setIsDarkMode
    const reactCode = `const chessOpenings = [
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



    return (
        <React.Fragment  >
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Table component</h1>

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
        </React.Fragment>
    );
};

export default BreadcrumbDemo;
