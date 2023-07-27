'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { Sheet, SheetContent, SheetTrigger } from '@/components/Sheet/Sheet';

const SheetDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

    const reactCode = `console.log('hi)`;



    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText='A stack of content sections, referred to as tab panels, that are displayed individually, one after the other.'><p>Tabs component</p></Tooltip>

            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Sheet darkMode={isDarkMode}>
                            <SheetTrigger><Button variant='secondary' text='Open sheet' /></SheetTrigger>
                            <SheetContent>
                                <p>This is the content of the sheet</p>
                            </SheetContent>
                        </Sheet>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </div>
    );
};

export default SheetDemo;
