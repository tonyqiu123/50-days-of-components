'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Select from '@/components/Select/Select';
import ShowMore from '@/components/ShowMore/ShowMore';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const SelectDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(true)

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
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <Tooltip darkMode={isDarkMode} toolTipText="Offer a user-friendly dropdown menu for option selection.">
                <p>Select component</p>
            </Tooltip>
            


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Select style={{ minWidth: '200px' }} queries={animals} selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} />
                    </div>
                </TabsContent>

                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={450} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </div >
    );
};

export default SelectDemo;
