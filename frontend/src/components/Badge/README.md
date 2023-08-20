# Day 10/100

July 17th / October 16th

# Toast Component for React 
<a href="https://www.youtube.com/watch?v=xHjMM87AXGw" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/badge" target="_blank">Demo it yourself</a>

<a href="https://www.youtube.com/watch?v=xHjMM87AXGw" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1130640257830899802/image.png"/></a>  

# Description 

Can't believe it's already been 10 days! I have to say, it's super rewarding to see this project gradually grow in terms of quality and features. For example, in Day 1, I created a basic button component and a shitty AI-generated readme haha. Now, each component has its own video, polished readme, demo, and much more practicality. Anyways, today is going to end the streak of complex components: a badge component. Badge components are often used to indicate status or an element's category.

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

To use the Badge component in your project, follow these steps:

1. Create a new folder called 'Badge' in your project's components directory.
2. Copy the `Badge.tsx` and `Badge.css` files into the newly created 'Badge' folder.

# Props 

1. `text` (required string): Text for the badge.

2. `darkMode` (optional boolean): Select darkMode styling if true, lightMode styling if omitted. 
3. `variant` (required string): Select which variant of the badge you want from `default`, `secondary`, `outline`, or `destructive`

# Example Usage
```jsx
'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Badge from '@/components/Badge/Badge';


export default function ToastDemo() {


    const [isDarkMode, setIsDarkMode] = useState(false)


    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            
            <Badge text='Default' darkMode={isDarkMode} variant='default' />
            <Badge text='Secondary' darkMode={isDarkMode} variant='secondary' darkMode={isDarkMode} />
            <Badge text='Outline' darkMode={isDarkMode} variant='outline' />
            <Badge text='Destructive' darkMode={isDarkMode} variant='destructive' />
        </div>
    );
};

```
In this example, I have the classic button to toggle `darkMode` on my Badge components. There are 4 total Badges, representing all the unique variants.

# Component Code 

## Badge.tsx
```jsx
import './Badge.css'
interface BadgeProps {
    text: string
    darkMode?: boolean
    variant: 'default' | 'secondary' | 'outline' | 'destructive'
}

const Badge: React.FC<BadgeProps> = ({ text, darkMode, variant }) => {

    return (
        <p className={`badge ${darkMode && 'darkMode'} ${variant}`}>{text}</p>
    )
}

export default Badge
```
 