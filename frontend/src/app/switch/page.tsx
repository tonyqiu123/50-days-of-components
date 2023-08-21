'use client'

import React, { useState, useEffect } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

import { useGlobal } from '../layout'; // Assuming the correct path to useGlobal
import Switch from '@/components/Switch/Switch';

const BreadcrumbDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Assuming useGlobal returns isDarkMode and setIsDarkMode

    const [isChecked, setIsChecked] = useState(false)

    const reactCode = `<Switch isChecked={isChecked} setIsChecked={setIsChecked} darkMode={isDarkMode} />`

    useEffect(() => {
        setIsDarkMode(isChecked)
    }, [isChecked])


    return (
        <React.Fragment  >
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Switch component</h1>

            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Switch isChecked={isChecked} setIsChecked={setIsChecked} darkMode={isDarkMode} />
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>
        </React.Fragment>
    );
};

export default BreadcrumbDemo;
