'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';
import { useGlobal } from '../layout'; // Add this import
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const CarouselDemo: React.FC = () => {

    const { isDarkMode, setIsDarkMode } = useGlobal(); // Use the global state

    const reactCode = `<Carousel className='carouselDemo'>
    <Image src='/Carousel/dorm.png' alt='dorm' layout="fill" objectFit="cover" />
    <Image src='/Carousel/floorLounge.png' alt='floorLounge' layout="fill" objectFit="cover" />
    <Image src='/Carousel/gym.png' alt='gym' layout="fill" objectFit="cover" />
    <Image src='/Carousel/mainFloor.png' alt='mainFloor' layout="fill" objectFit="cover" />
    <Image src='/Carousel/outside.png' alt='outside' layout="fill" objectFit="cover" />
    <Image src='/Carousel/pianoRoom.png' alt='pianoRoom' layout="fill" objectFit="cover" />
    <Image src='/Carousel/poolTable.png' alt='poolTable' layout="fill" objectFit="cover" />
</Carousel>`;

    return (
        <React.Fragment >

            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Carousel component</h1>
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <Carousel className='carouselDemo'>
                            <Image src='/Carousel/dorm.png' alt='dorm' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/floorLounge.png' alt='floorLounge' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/gym.png' alt='gym' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/mainFloor.png' alt='mainFloor' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/outside.png' alt='outside' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/pianoRoom.png' alt='pianoRoom' layout="fill" objectFit="cover" />
                            <Image src='/Carousel/poolTable.png' alt='poolTable' layout="fill" objectFit="cover" />
                        </Carousel>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>

        </React.Fragment>
    );
};

export default CarouselDemo;
