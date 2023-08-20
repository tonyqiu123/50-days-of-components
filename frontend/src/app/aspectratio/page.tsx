'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import AspectRatio from '@/components/AspectRatio/AspectRatio';
import ShowMore from '@/components/ShowMore/ShowMore';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useGlobal } from '../layout';

const AspectRatioDemo: React.FC = () => {

    const reactCode = `// Do not specify maxWidth, only maxHeight
    <AspectRatio style={{ border: '1px solid red' }} maxHeight={700} ratio={1 / 1}>
    <img
        src="https://cdn.discordapp.com/attachments/715319623637270638/1141796329564147772/image.png"
        alt="Photo by Drew Beamer"
    />
</AspectRatio>

<AspectRatio style={{ border: '1px solid red' }} ratio={3 / 1}>
    <img
        src="https://media.tacdn.com/media/attractions-content--1x-1/10/5a/80/a6.jpg"
        alt="Photo by Drew Beamer"
    />
</AspectRatio>

<AspectRatio style={{ border: '1px solid red' }} ratio={2 / 1}>
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg"
        alt="Photo by Drew Beamer"
    />
</AspectRatio>`;

    const { isDarkMode, setIsDarkMode } = useGlobal();

    return (
        <React.Fragment>
            <Breadcrumb darkMode={isDarkMode} start={2} end={4} />
            <h1>Aspect Ratio component</h1>

            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='preview1'><p>1 / 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>3 / 1</p></TabsTrigger>
                <TabsTrigger value='preview3'><p>2 / 1</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <AspectRatio maxHeight={700} ratio={1 / 1}>
                            <img
                                src="https://cdn.discordapp.com/attachments/715319623637270638/1141796329564147772/image.png"
                                alt="Photo by Drew Beamer"
                            />
                        </AspectRatio>
                    </div>
                </TabsContent>

                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <AspectRatio ratio={3 / 1}>
                            <img
                                src="https://media.tacdn.com/media/attractions-content--1x-1/10/5a/80/a6.jpg"
                                alt="Photo by Drew Beamer"
                            />
                        </AspectRatio>
                    </div>
                </TabsContent>

                <TabsContent value='preview3'>
                    <div className='demoBox'>
                        <AspectRatio ratio={2 / 1}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg"
                                alt="Photo by Drew Beamer"
                            />
                        </AspectRatio>
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

export default AspectRatioDemo;
