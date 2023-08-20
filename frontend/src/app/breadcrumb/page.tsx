'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';

import { useGlobal } from '../layout'; // Assuming the correct path to useGlobal

const BreadcrumbDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Assuming useGlobal returns isDarkMode and setIsDarkMode

    const reactCode = `<Breadcrumb darkMode={isDarkMode} />
<Breadcrumb darkMode={isDarkMode} start={3} end={4} />`;

    return (
        <React.Fragment  >
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Breadcrumb component</h1>

            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Breadcrumb darkMode={isDarkMode} />
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <Breadcrumb darkMode={isDarkMode} start={3} end={4} />
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

export default BreadcrumbDemo;
