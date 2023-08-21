'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Select from '@/components/Select/Select';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [selected1, setSelected1] = useState<string>('')

    const reactCode = `const animals = [
    'Cat',
    'Dolphin',
    'Panda',
    'Koala',
    'Horse',
    'Owl',
    'Squirrel',
    'Rabbit',
    'Gorilla',
    'Zebra',
    'Crocodile'
];

const [selected1, setSelected1] = useState<string>('')

<Select style={{ minWidth: '200px' }} queries={animals} selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} />`;

    const animals = [
        'Cat',
        'Dolphin',
        'Panda',
        'Koala',
        'Horse',
        'Owl',
        'Squirrel',
        'Rabbit',
        'Gorilla',
        'Zebra',
        'Crocodile'
    ];



    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Select component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Select style={{ minWidth: '200px' }} queries={animals} selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} />
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

export default CarouselDemo; 