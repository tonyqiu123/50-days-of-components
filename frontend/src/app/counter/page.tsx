'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Counter from '@/components/Counter/Counter';
import ShowMore from '@/components/ShowMore/ShowMore';

const CounterDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

    const reactCode = `<Counter target={110} increment={2} duration={750} />`;


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText="The Counter component counts to a target with custom increments and speed.">
                <p>Counter component</p>
            </Tooltip>


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Counter target={110} increment={2} duration={750} />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={100} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </div>
    );
};

export default CounterDemo;
