'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Icon from '@/components/Icon/Icon';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `<Icon text='Github' image='/Icon/githubIcon.png' invert={isDarkMode && true} />
    <Icon text='Twitter' image='/Icon/twitterIcon.png' invert={isDarkMode && true} />
    <Icon text='Threads' image='/Icon/threadsIcon.png' invert={isDarkMode && true} />`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Icon component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Icon text='Github' image='/Icon/githubIcon.png' invert={isDarkMode && true} />
                        <Icon text='Twitter' image='/Icon/twitterIcon.png' invert={isDarkMode && true} />
                        <Icon text='Threads' image='/Icon/threadsIcon.png' invert={isDarkMode && true} />
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 