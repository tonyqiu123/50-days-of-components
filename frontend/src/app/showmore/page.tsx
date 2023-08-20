'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import ShowMore from '@/components/ShowMore/ShowMore';
import Image from 'next/image';

const ShowMoreDemo: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const reactCode = `<ShowMore height={400} darkMode={isDarkMode}>
    <Image src='/ShowMore/california.jpg' alt='' height={750} width={750} />
</ShowMore>

<ShowMore height={300} darkMode={isDarkMode}>
    <Image src='/ShowMore/mcBuilding.png' alt='' height={550} width={700} />
</ShowMore>`;




    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            
            <Tooltip darkMode={isDarkMode} toolTipText="The ShowMore.tsx component enables you to implement a 'Show more' effect found in Medium and Reddit.">
                <p>ShowMore component</p>
            </Tooltip>

          

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
        </div>
    );
};

export default ShowMoreDemo;
