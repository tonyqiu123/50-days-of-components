## Day 5/100

July 12th / October 16th

# Tooltip Component for React 
<a href="https://www.youtube.com/watch?v=nGdD2W0BxUc">Watch live demo on youtube</a>

<a href="https://www.youtube.com/watch?v=nGdD2W0BxUc"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1128703602085605506/image.png"/></a> 


This is a customizable Tooltip component that can be easily integrated into any React project. It supports dark and light modes and provides a tooltip with hover functionality.

## Features

1. **Dark and Light Modes**: The Tooltip component supports an optional darkMode prop, which defaults to false. When set to true, it displays the tooltip in dark mode.

2. **Customizable Tooltip Content**: You can customize the tooltip content by providing the toolTipText prop, which accepts a string.

3. **Hover Functionality**: The tooltip is displayed when the user hovers over the wrapped content and disappears when the mouse cursor is moved away.


## Installation 

Create a new folder called 'Tooltip' and copy the Tooltip.tsx and Tooltip.css into that folder.

## Usage 

Here is an example of how I used the Tooltip component with real-world purpose. 

```jsx
'use client'

import React, { useState } from 'react'; 
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function AdminDashboard() {
 
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div> 
      
      <Tooltip darkMode={isDarkMode} toolTipText='By strategically combining different EC2 purchase options within a single EC2 Auto Scaling Group (ASG), you can achieve an optimal balance between cost savings and performance for your infrastructure.'>
        <p>Combine EC2 purchase options in a single EC2 ASG</p>
      </Tooltip>
    </div>
  );
};

```

In this example, I created a button to toggle the ```darkMode``` prop in the Tooltip component. You can see that the Tooltip requires no extra styling, just simply wrap any text you want to add a tooltip to, light or dark!

## Props

1. **toolTipText**: The text to be displayed in the tooltip.

2. **children**: The text accompanied with the tooltip.

3. **darkMode**: An optional boolean prop that defaults to false. If set to true, the tooltip will be displayed in dark mode.


## CSS 

The Tooltip component comes with its own CSS, which can be found in the Tooltip.css file. Make sure to include this CSS file in your project for the tooltip to appear correctly.

## Full Code 

```jsx
import React, { useState, ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  toolTipText: string;
  children?: ReactNode;
  darkMode?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ toolTipText, children, darkMode = false }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className={`tooltip ${darkMode && 'darkMode'}`}>
      {children}
      <img
        src="/Tooltip/tooltipIcon.svg"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
      <p className={`tooltip-hoverBox ${hovering && 'active'}`}>{toolTipText}</p>
    </div>
  );
};

export default Tooltip;
```