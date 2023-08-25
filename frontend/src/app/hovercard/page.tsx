'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import HoverCard from '@/components/HoverCard/HoverCard';
import Image from 'next/image';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `<HoverCard darkMode={isDarkMode}>
    {/* First child is the trigger */}
    <Image width={24} height={24} src='/HoverCard/Heart.svg' alt='heart' />
    {/* Second child is the popover content */}
    <div className='column'>
        <p>Add to liked songs</p>
    </div>
</HoverCard>`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>HoverCard component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <HoverCard darkMode={isDarkMode}>
                            {/* First child is the trigger */}
                            <Image style={{ filter: `${isDarkMode ? 'invert(1)' : 'unset'}` }} width={24} height={24} src='/HoverCard/Heart.svg' alt='heart' />
                            {/* Second child is the popover content */}
                            <div className='column'>
                                <p>Add to liked songs</p>
                            </div>
                        </HoverCard>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo;


