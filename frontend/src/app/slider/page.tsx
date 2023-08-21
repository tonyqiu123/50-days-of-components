'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Image from 'next/image';
import Slider from '@/components/Slider/Slider';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const reactCode = `<Slider
    min={0}
    max={100}
    defaultValue={50}
    darkMode={isDarkMode}
    onChange={(value) => console.log(value)}
/>`;


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Slider component</h1>
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>

                <TabsTrigger value='code'><p>Code</p></TabsTrigger>
                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Slider
                            min={0}
                            max={100}
                            defaultValue={50}
                            darkMode={isDarkMode}
                            onChange={(value) => console.log(value)}
                        />
                    </div>

                </TabsContent>

                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode} text='Reveal code' height={200}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 