'use client'

import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import TextArea from '@/components/TextArea/TextArea';


export default function TextAreaDemo() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Tooltip darkMode={isDarkMode} toolTipText='Enter text into a textfield.'>
                <h1>TextArea Component</h1>
            </Tooltip>
            

            <TextArea darkMode={isDarkMode} placeholder='Enter a message here.' />
        </div>
    )
};
