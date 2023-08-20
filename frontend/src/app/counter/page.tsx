'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Counter from '@/components/Counter/Counter';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Use the global state


    const reactCode = `<Counter target={110} increment={2} duration={750} />`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Command component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Counter target={110} increment={2} duration={750} />
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo;
