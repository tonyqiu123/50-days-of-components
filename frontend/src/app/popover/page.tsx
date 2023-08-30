'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Icon from '@/components/Icon/Icon';
import ShowMore from '@/components/ShowMore/ShowMore';
import MultiSelect from '@/components/MultiSelect/MultiSelect';
import Popover from '@/components/Popover/Popover';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();

    const reactCode = `<Popover isOpen={isOpen} setIsOpen={setIsOpen}>
    {/* First child is the trigger  */}
    <Button text='Toggle popover' variant='primary' />
    {/* Second child is the popover content */}
    <div className='column'>
        <h4>This is the content of the popover.</h4>
        <Image style={{ marginTop: '16px' }} src='/Popover/losangeles.webp' alt='los angeles' width={400} height={200} />
    </div>
</Popover>`;



    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Popover component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <Popover >
                            {/* First child is the trigger  */}
                            <Button text='Toggle popover' variant='primary' />
                            {/* Second child is the popover content */}
                            <div className='column'>
                                <h4>This is the content of the popover.</h4>
                                <Image style={{ marginTop: '16px' }} src='/Popover/losangeles.webp' alt='los angeles' width={400} height={200} />
                            </div>
                        </Popover>
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 