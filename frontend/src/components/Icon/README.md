# Day 14/100

July 21th / October 16th

# Icon
<a href="https://www.youtube.com/watch?v=sVRQp1Cxd-w" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/icon" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/icon" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1132007688990117998/image.png"/></a>  

# Description 

Icons are often used for social media and in tabs. They are vital to building modern UI. Github uses them everywhere in their interface to represent different actions, Slack uses icons for emojis, reactions, and interactive elements in its team collaboration platform, and  Google's productivity tools, such as Google Docs and Sheets, incorporate icons for formatting options and file management.

# Prerequisites
This package requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used in this project :
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"


# Installation 

To use the Icon component in your project, follow these steps:

1. Create a new folder called 'Icon' in your project's components directory.
2. Copy the `Icon.tsx` and `Icon.css` files into the newly created 'Icon' folder.

# Props 

1. `image` (required string): This is the source of the image that will be displayed.

2. `alt` (optional string): This is the alternative text that describes the image. If not provided, the default value will be 'icon'.

3. `width` (optional number): This sets the width of the icon image. If not specified, the default value will be 20.

4. `height` (optional number): This prop sets the height of the icon image. If not provided, the default value will be 20.

5. `href` (optional string): This is the hyperlink reference that the icon image will redirect to when clicked. If not specified, no redirection will occur.
6. `invert` (optional boolean): This prop indicates whether the colors of the icon image should be inverted. If true, the inversion will take place, otherwise, the image will be displayed as is.
7. `text` (optional string): This is the text that will be displayed below the icon image. If not specified, no text will be displayed.

# Example Usage
### page.tsx
```jsx
'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function IconDemo() {

    const [isDarkMode, setIsDarkMode] = useState(false)


    return (

        <div className={`page ${isDarkMode && 'darkMode'}`}>
            
            <Tooltip darkMode={isDarkMode} toolTipText='A flexible image icon component.'>
                <p>Icon Component</p>
            </Tooltip>
            <div style={{ display: 'flex', gap: '2px' }}>
                <Icon text='Github' image='/githubIcon.png' invert={isDarkMode && true} />
                <Icon text='Twitter' image='/twitterIcon.png' invert={isDarkMode && true} />
                <Icon text='Threads' image='/threadsIcon.png' invert={isDarkMode && true} />
            </div>
        </div>
    );
};
```
In this example, the invert property of my Icon component is being toggled by the Button component.  

# Component Code 

### Icon.tsx
```jsx
import React, { useState } from 'react';
import './Icon.css';
import Image from 'next/image';

interface IconProps {
    image: string
    alt?: string
    width?: number
    height?: number
    href?: string
    invert?: boolean
    text?: string
}

const Icon: React.FC<IconProps> = ({ image, alt = 'icon', width = 20, height = 20, href = '', invert = false, text = '', ...props }) => {

    return (
        <a href={href}  className={`${invert && 'inverted'} icon`} style={{ height: `${height + 20}px` }}>
            <Image  width={width} height={height} alt={alt} src={image} />
            {text && <p>{text}</p>}
        </a>
    );
};

export default Icon;
```
 