'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ShowMore from '@/components/ShowMore/ShowMore';
import Image from 'next/image';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal();
    const reactCode = `<ShowMore height={400} darkMode={isDarkMode}>
    <Image src='/ShowMore/california.jpg' alt='' height={750} width={750} />
</ShowMore>

<ShowMore height={300} darkMode={isDarkMode}>
    <Image src='/ShowMore/mcBuilding.png' alt='' height={550} width={700} />
</ShowMore>`;


    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>ShowMore component</h1>
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>
                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <ShowMore height={300} darkMode={isDarkMode}>
                            <Image src='/ShowMore/e7.jpg' alt='' height={429} width={750} />
                        </ShowMore>
                    </div>

                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <ShowMore height={300} darkMode={isDarkMode}>
                            <Image src='/ShowMore/mcBuilding.png' alt='' height={550} width={700} />
                        </ShowMore>
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore darkMode={isDarkMode} text='Reveal code' height={200}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo; 