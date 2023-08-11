'use client'

import React, { useState } from 'react';
import HoverCard from '@/components/HoverCard/HoverCard';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Tooltip from '@/components/Tooltip/Tooltip';

const HoverCardDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)



    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='secondary' darkMode={isDarkMode} text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText='Add a modal to a component on hover.'><p>HoverCard component</p></Tooltip>
            <div className='demoBox'>



                <HoverCard darkMode={isDarkMode}>
                    {/* First child is the trigger */}
                    <Image width={24} height={24} src='/HoverCard/Heart.svg' alt='heart' />
                    {/* Second child is the popover content */}
                    <div className='column'>
                        <p>Add to liked songs</p>
                    </div>
                </HoverCard>



            </div>
        </div>
    );
};

export default HoverCardDemo;
