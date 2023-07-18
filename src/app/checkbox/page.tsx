'use client'

import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import Checkbox from '@/components/Checkbox/Checkbox';


export default function CheckboxDemo() {


  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleCheckboxChange1 = (checked: any) => {
    console.log('Accept terms and conditions:', checked);
  };

  const handleCheckboxChange2 = (checked: any) => {
    console.log('Enable notifications:', checked);
  };

  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <Button variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Tooltip darkMode={isDarkMode} toolTipText='Collect consent digitally.'>
        <p>Checkbox Component</p>
      </Tooltip>
      <Checkbox
        primaryText="Accept terms and conditions"
        subText="You agree to our Terms of Service and Privacy Policy."
        onChange={handleCheckboxChange1}
        darkMode={isDarkMode}
      />
      <Checkbox
        primaryText="Enable notifications"
        onChange={handleCheckboxChange2}
        darkMode={isDarkMode}
      />

    </div>
  );
};
