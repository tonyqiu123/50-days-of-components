'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button'; 
import TextArea from '@/components/TextArea/TextArea';


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
      <div className='shareidea'>
        <p>Idea</p>
        <TextArea  placeholder='Share your idea.' darkMode={isDarkMode} />
        <Button variant='primary' text='Submit' handleClick={async () => setIsDarkMode(!isDarkMode)} />
      </div>
  );
};
