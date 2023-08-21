'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Tooltip from '@/components/Tooltip/Tooltip';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const reactCode = `<Tooltip darkMode={isDarkMode} toolTipText='By strategically combining different EC2 purchase options within a single EC2 Auto Scaling Group (ASG), you can achieve an optimal balance between cost savings and performance for your infrastructure.'>
    <p>Combine EC2 purchase options in a single EC2 ASG</p>
</Tooltip>`;


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Tooltip component</h1>
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>
                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Tooltip darkMode={isDarkMode} toolTipText='By strategically combining different EC2 purchase options within a single EC2 Auto Scaling Group (ASG), you can achieve an optimal balance between cost savings and performance for your infrastructure.'>
                            <p>Combine EC2 purchase options in a single EC2 ASG</p>
                        </Tooltip>
                    </div>

                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode} text='Reveal code'  >
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 