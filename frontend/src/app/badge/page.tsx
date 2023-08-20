'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Backdrop from '@/components/Backdrop/Backdrop';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'; // Import the Breadcrumb component

import { useGlobal } from '../layout'; // Import the useGlobal hook
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import ShowMore from '@/components/ShowMore/ShowMore';
import Badge from '@/components/Badge/Badge';


const BackdropDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `<Badge variant='default' text='Example' />
    <Badge variant='secondary' text='Example' />
    <Badge variant='outline' text='Example' />
    <Badge variant='success' text='Example' />
    <Badge variant='destructive' text='Example' />`;

    return (
        <React.Fragment >
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} /> {/* Add the Breadcrumb component */}
            <h1>Badge component</h1> {/* Add the h1 element */}
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Badge variant='default' text='Example' />
                        <Badge variant='success' text='Example' />
                        <Badge variant='destructive' text='Example' />
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

export default BackdropDemo;
