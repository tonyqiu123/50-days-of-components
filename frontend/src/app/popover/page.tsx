'use client'

import React, { useState } from 'react';
import Popover from '@/components/Popover/Popover';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Tooltip from '@/components/Tooltip/Tooltip';

const PopoverDemo: React.FC = () => {


    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Button variant='secondary' darkMode={isDarkMode} text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip toolTipText='Add a modal to a component'><p>Popover component</p></Tooltip>
            <div className='demoBox'>



                <Popover isOpen={isOpen} setIsOpen={setIsOpen}>
                    {/* First child is the trigger */}
                    <Button text='Toggle popover' variant='primary' />
                    {/* Second child is the popover content */}
                    <div className='column'>
                        <h4>This is the content of the popover.</h4>
                        <Image style={{ marginTop: '16px' }} src='/Popover/losangeles.webp' alt='los angeles' width={400} height={200} />
                    </div>
                </Popover>



            </div>
        </div>
    );
};

export default PopoverDemo;
