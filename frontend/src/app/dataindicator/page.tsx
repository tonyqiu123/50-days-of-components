'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import DataIndicator from '@/components/DataIndicator/DataIndicator';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `<DataIndicator currentData={50} previousData={20} text='from last month' />
<DataIndicator currentData={5} previousData={20} text='from last month' />`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>DataIndicator component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Positive</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Negative</p></TabsTrigger>
                <TabsTrigger value='preview3'><p>Neutral</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <DataIndicator currentData={50} previousData={20} text='from last month' />
                    </div>
                </TabsContent>

                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <DataIndicator currentData={5} previousData={20} text='from last month' />
                    </div>
                </TabsContent>

                <TabsContent value='preview3'>
                    <div className='demoBox'>
                        <DataIndicator currentData={20} previousData={20} text='from last month' />
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>



        </React.Fragment>
    );
};

export default CarouselDemo;

