'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';

const BreadcrumbDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

    const reactCode = `<Breadcrumb handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={10} />
<Breadcrumb handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={200} />`;


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText="Rate and display feedback using a visually intuitive star-based system.">
                <p>Breadcrumb component</p>
            </Tooltip>


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Breadcrumb handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={10} />
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <Breadcrumb handleClick={(numOfStars) => console.log(numOfStars)} totalStars={1000} />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={125} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </div >
    );
};

export default BreadcrumbDemo;
