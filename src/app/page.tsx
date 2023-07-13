'use client'

import React, { useState } from 'react';
// import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import Input from '@/components/Input/Input';


export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(false)
  const [inputText, setInputText] = useState('')

  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <Button style={{ marginBottom: '24px' }} variant='primary' text={isDarkMode ? 'Untoggle dark mode' : 'Toggle dark mode'} handleClick={async () => setIsDarkMode(!isDarkMode)} />
      <Input darkMode={isDarkMode} placeHolder='Search' text={inputText} setText={setInputText} />
    </div>
  );
};
