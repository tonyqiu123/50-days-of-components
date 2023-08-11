'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Backdrop from '@/components/Backdrop/Backdrop';


const BackdropDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

    const [showBackdrop, setShowBackdrop] = useState(false)

    const reactCode = `'use client'

import Button from '@/components/Button/Button';
import Backdrop from '@/components/Backdrop/Backdrop';

const BackdropDemo: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)

    return (
        <>
            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Button handleClick={async () => setShowBackdrop(true)} variant='secondary' darkMode={isDarkMode} text='Open Backdrop' />
            <Backdrop darkMode={isDarkMode} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />;
        </>
)}

export default BackdropDemo;`



    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText='Display a blurred, "pointer-event-less" overlay.'><p>Backdrop component</p></Tooltip>

            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Button handleClick={async () => setShowBackdrop(true)} variant='secondary' darkMode={isDarkMode} text='Open Backdrop' />
                        <Backdrop darkMode={isDarkMode} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </div>
    );
};

export default BackdropDemo;
