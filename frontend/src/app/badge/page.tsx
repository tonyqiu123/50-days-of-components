'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Badge from '@/components/Badge/Badge';


export default function ToastDemo() {


    const [isDarkMode, setIsDarkMode] = useState(false)


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
            <Badge text='Default' darkMode={isDarkMode} variant='default' />
            <Badge text='Secondary' darkMode={isDarkMode} variant='secondary' />
            <Badge text='Outline' darkMode={isDarkMode} variant='outline' />
            <Badge text='Destructive' darkMode={isDarkMode} variant='destructive' />
        </div>
    );
};
