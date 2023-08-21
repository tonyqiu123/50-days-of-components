'use client'

import React, { useState, useEffect } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

import { useGlobal } from '../layout'; // Assuming the correct path to useGlobal

const BreadcrumbDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Assuming useGlobal returns isDarkMode and setIsDarkMode


    const reactCode = ` <Tabs darkMode={isDarkMode}>

    <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
    <TabsTrigger value='code'><p>Code</p></TabsTrigger>

    <TabsContent value='preview'><div className='demoBox'></div></TabsContent>
    <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

</Tabs>`

    return (
        <React.Fragment  >
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Tabs component</h1>

            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'><div className='demoBox'></div></TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>
        </React.Fragment>
    );
};

export default BreadcrumbDemo;
