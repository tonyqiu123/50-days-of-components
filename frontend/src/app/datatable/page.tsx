'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import DataTable from '@/components/DataTable/DataTable';
import ShowMore from '@/components/ShowMore/ShowMore';

const CarouselDemo: React.FC = () => {

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


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>DataTable component</h1>
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



        </React.Fragment>
    );
};

export default CarouselDemo;

