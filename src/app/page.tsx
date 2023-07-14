'use client'

import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Slider from '@/components/Slider/Slider';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isFullWidth, setIsFullWidth] = useState(false)

  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Button variant='secondary' text={isFullWidth ? 'Untoggle full width' : 'Toggle full width'} handleClick={async () => setIsFullWidth(!isFullWidth)} />
      <Tooltip darkMode={isDarkMode} toolTipText='Drag the slider component to update a custom value from a custom range.'>
        <p>Slider Component</p>
      </Tooltip>
      <Slider
        min={0}
        max={100}
        defaultValue={50}
        darkMode={isDarkMode}
        fullWidth={isFullWidth}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
};
