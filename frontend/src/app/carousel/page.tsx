'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';

const CarouselDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

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
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText="Utilized for showcasing and rotating content in a visually engaging, circular sequence. Commonly used in photo galleries, product displays, and testimonials on websites.">
                <p>Carousel component</p>
            </Tooltip>


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

        </div >
    );
};

export default CarouselDemo;
