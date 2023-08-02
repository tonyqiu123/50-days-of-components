'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import { NavBar, NavBarLeft, NavBarRight } from '@/components/NavBar/NavBar';
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import SearchBar from '@/components/SearchBar/SearchBar';
import Input from '@/components/Input/Input';


export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(true)
  const [componentIdea, setComponentIdea] = useState('')

  const components = ['1']

  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>

      <NavBar darkMode={isDarkMode}>
        <NavBarLeft>
          <Image alt='' src='/Home/logo.png' width={140} height={24} />
          <a href=''><p>Examples</p></a>
          <a href=''><p>Components</p></a>
          <a href=''><p>Documentation</p></a>
        </NavBarLeft>
        <NavBarRight>
          <SearchBar className='homeSearchbar' darkMode={isDarkMode} queries={components} />
          <Icon href='https://github.com/tonyqiu123/100-days-of-components' invert={isDarkMode} image='/Icon/githubIcon.png' />
          <Icon handleClick={async () => setIsDarkMode(!isDarkMode)} invert={isDarkMode} image={isDarkMode ? '/Home/moon.svg' : '/Home/sun.svg'} />
        </NavBarRight>
      </NavBar>
      <div className='dummy'></div>

      <div className='shareidea'>
        <Input placeHolder='Share your idea' darkMode={isDarkMode} search={componentIdea} setSearch={setComponentIdea} />
        <Button variant='primary' text='Submit' handleClick={async () => setIsDarkMode(!isDarkMode)} />
      </div>

      <div className='catalog'>
        
      </div>

    </div>
  );
};
