'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import { NavBar, NavBarLeft, NavBarRight } from '@/components/NavBar/NavBar';
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import SearchBar from '@/components/SearchBar/SearchBar';
import Input from '@/components/Input/Input';
import TextArea from '@/components/TextArea/TextArea';


export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(true)
  const [componentIdea, setComponentIdea] = useState('')
  const [search, setSearch] = useState<string>('')

  const componentNames = [
    "Accordion",
    "Backdrop",
    "Badge",
    "Button",
    "Carousel",
    "Checkbox",
    "Command",
    "DragNDrop",
    "Dropdown",
    "HoverCard",
    "Icon",
    "Input",
    "Modal",
    "NavBar",
    "OutsideClick",
    "Popover",
    "PrettyCode",
    "SearchBar",
    "Sheet",
    "ShowMore",
    "Skeleton",
    "Slider",
    "Switch",
    "Tabs",
    "TextArea",
    "Toast",
    "Tooltip"
  ];


  return (


      <div className='shareidea'>
        <p>Idea</p>
        <TextArea  placeholder='Share your idea.' darkMode={isDarkMode} />
        <Button variant='primary' text='Submit' handleClick={async () => setIsDarkMode(!isDarkMode)} />
      </div>
  );
};
