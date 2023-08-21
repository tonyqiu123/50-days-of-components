'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Icon from '@/components/Icon/Icon';
import ShowMore from '@/components/ShowMore/ShowMore';
import { NavBar, NavBarLeft, NavBarRight } from '@/components/NavBar/NavBar'
import Image from 'next/image';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `<NavBar darkMode={isDarkMode}>
    <NavBarLeft>
        <Image alt='' src='/Home/logo.png' width={140} height={24} />
        <a href=''><p>Examples</p></a>
        <a href=''><p>Components</p></a>
        <a href=''><p>Documentation</p></a>
    </NavBarLeft>
    <NavBarRight>
        <Icon href='https://github.com/tonyqiu123/100-days-of-components' invert={isDarkMode} image='/Icon/githubIcon.png' />
        <Icon handleClick={() => setIsDarkMode(prevDarkMode => !prevDarkMode)} invert={isDarkMode} image={isDarkMode ? '/Home/moon.svg' : '/Home/sun.svg'} />
    </NavBarRight>
</NavBar>`;


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>NavBar component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                         
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal'  darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 