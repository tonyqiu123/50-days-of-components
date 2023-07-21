'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function IconDemo() {

    const [isDarkMode, setIsDarkMode] = useState(false)


    return (

        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Tooltip darkMode={isDarkMode} toolTipText='A flexible image icon component.'>
                <p>Icon Component</p>
            </Tooltip>
            <div style={{ display: 'flex', gap: '2px' }}>
                <Icon text='Github' image='/githubIcon.png' invert={isDarkMode && true} />
                <Icon text='Twitter' image='/twitterIcon.png' invert={isDarkMode && true} />
                <Icon text='Threads' image='/threadsIcon.png' invert={isDarkMode && true} />
            </div>
        </div>
    );
};