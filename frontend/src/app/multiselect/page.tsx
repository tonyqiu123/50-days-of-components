'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import MultiSelect from '@/components/MultiSelect/MultiSelect';
import ShowMore from '@/components/ShowMore/ShowMore';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const MultiSelectDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(true)

    const [selected1, setSelected1] = useState<string[]>([])
    const [selected2, setSelected2] = useState<string[]>([])

    const reactCode = `const [selected2, setSelected2] = useState<string[]>([])
    
const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
    "PHP",
    "C#",
    "TypeScript",
    "Go",
    "Rust",
    "Kotlin"
];

<MultiSelect selected={selected2} setSelected={setSelected2} queries={languages} darkMode={isDarkMode} />`;

    const languages = [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "Ruby",
        "Swift",
        "PHP",
        "C#",
        "TypeScript",
        "Go",
        "Rust",
        "Kotlin"
    ];


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <Tooltip darkMode={isDarkMode} toolTipText="The breadcrumb component generates a navigation trail reflecting the current page's URL segments.">
                <p>MultiSelect component</p>
            </Tooltip>
            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <MultiSelect selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} />
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <MultiSelect selected={selected2} setSelected={setSelected2} queries={languages} darkMode={isDarkMode} />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={125} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </div >
    );
};

export default MultiSelectDemo;
