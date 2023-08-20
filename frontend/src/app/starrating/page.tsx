'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import StarRating from '@/components/StarRating/StarRating';
import ShowMore from '@/components/ShowMore/ShowMore';

const StarRatingDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)

    const reactCode = `<StarRating handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={10} />
<StarRating handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={200} />`;


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            
            <Tooltip darkMode={isDarkMode} toolTipText="Rate and display feedback using a visually intuitive star-based system.">
                <p>StarRating component</p>
            </Tooltip>


            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview1'><p>Preview 1</p></TabsTrigger>
                <TabsTrigger value='preview2'><p>Preview 2</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview1'>
                    <div className='demoBox'>
                        <StarRating handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={10} />
                    </div>
                </TabsContent>
                <TabsContent value='preview2'>
                    <div className='demoBox'>
                        <StarRating handleClick={(numOfStars) => console.log(numOfStars)} totalStars={1000} />
                    </div>
                </TabsContent>
                <TabsContent value='code'>
                    <ShowMore text='Reveal' height={125} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

            </Tabs>

        </div >
    );
};

export default StarRatingDemo;
