'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Drawer from '@/components/Drawer/Drawer';
import Image from 'next/image';
import Popover from '@/components/Popover/Popover';
import ShowMore from '@/components/ShowMore/ShowMore';

const DrawerDemo: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const reactCode = `<Drawer height={400} darkMode={isDarkMode}>
    <Image src='/Drawer/california.jpg' alt='' height={750} width={750} />
</Drawer>

<Drawer height={300} darkMode={isDarkMode}>
    <Image src='/Drawer/mcBuilding.png' alt='' height={550} width={700} />
</Drawer>`;




    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText="The Drawer.tsx component enables you to implement a 'Show more' effect found in Medium and Reddit.">
                <p>Drawer component</p>
            </Tooltip>

            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>
                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <button onClick={() => setDrawerVisible(true)}>Show Drawer</button>
                        <Drawer visible={drawerVisible} setVisible={setDrawerVisible} />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore  >
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default DrawerDemo;
