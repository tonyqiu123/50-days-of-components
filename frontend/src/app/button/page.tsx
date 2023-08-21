'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Backdrop from '@/components/Backdrop/Backdrop';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'; // Import the Breadcrumb component

import { useGlobal } from '../layout'; // Import the useGlobal hook
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import ShowMore from '@/components/ShowMore/ShowMore';



const ButtonDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `<Button variant='default' text='Example' />
    <Button variant='secondary' text='Example' />
    <Button variant='outline' text='Example' />
    <Button variant='success' text='Example' />
    <Button variant='destructive' text='Example' />`;

    return (
        <React.Fragment >
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} /> {/* Add the Breadcrumb component */}
            <h1>Button component</h1> {/* Add the h1 element */}
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Button variant='primary' text='Example' />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </React.Fragment >
    );
};

export default ButtonDemo;
