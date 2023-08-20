'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Backdrop from '@/components/Backdrop/Backdrop';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'; // Import the Breadcrumb component

import { useGlobal } from '../layout'; // Import the useGlobal hook
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import ShowMore from '@/components/ShowMore/ShowMore';


const BackdropDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();
    const [showBackdrop, setShowBackdrop] = useState(false);

    const reactCode = `'use client'

import Button from '@/components/Button/Button';
import Backdrop from '@/components/Backdrop/Backdrop';

const BackdropDemo: React.FC = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);

    return (
        <>
            <Button handleClick={async () => setShowBackdrop(true)} variant='secondary' darkMode={isDarkMode} text='Open Backdrop' />
            <Backdrop darkMode={isDarkMode} showBackdrop={showBackdrop} />;
        </>
    )
}

export default BackdropDemo;`;

    return (
        <React.Fragment>
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} /> {/* Add the Breadcrumb component */}
            <h1>Backdrop component</h1> {/* Add the h1 element */}
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Button handleClick={async () => setShowBackdrop(true)} variant='secondary' darkMode={isDarkMode} text='Open Backdrop' />
                        <Backdrop darkMode={isDarkMode} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />
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
