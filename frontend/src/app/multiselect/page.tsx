'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Icon from '@/components/Icon/Icon';
import ShowMore from '@/components/ShowMore/ShowMore';
import MultiSelect from '@/components/MultiSelect/MultiSelect';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();

    const [selected1, setSelected1] = useState<string[]>([])
    const [selected2, setSelected2] = useState<string[]>([])

    const reactCode = `<Icon text='Github' image='/Icon/githubIcon.png' invert={isDarkMode && true} />
    <Icon text='Twitter' image='/Icon/twitterIcon.png' invert={isDarkMode && true} />
    <Icon text='Threads' image='/Icon/threadsIcon.png' invert={isDarkMode && true} />`;

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
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>MultiSelect component</h1>
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

        </React.Fragment>
    );
};

export default CarouselDemo; 