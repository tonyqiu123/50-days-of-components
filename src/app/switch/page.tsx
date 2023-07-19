'use client'

import React, { useState } from 'react';
import Switch from '@/components/Switch/Switch';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function SwitchDemo() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleSwitchChange = (checked: boolean) => {
        setIsDarkMode(!isDarkMode)
    };

    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Tooltip darkMode={isDarkMode} toolTipText='Toggle a boolean value.'>
                <p>Switch Component</p>
            </Tooltip>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center'}}>
                <Switch onChange={handleSwitchChange} darkMode={isDarkMode} />
                <p>Toggle dark mode</p>
            </div>
        </div>
    );
};

