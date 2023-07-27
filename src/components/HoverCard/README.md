# Day 17/100

July 24th / October 16th

# HoverCard
<a href="https://www.youtube.com/watch?v=QVJPWRHIs-8" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/HoverCard" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/HoverCard" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1133469502957420605/image.png"/></a>  

# Description 

Ahh, already running out of component ideas. The HoverCard component is essentially a Popover component that toggles on hover after a certain delay except with 1 big change: a short 750ms delay. The thing is that HoverCards are used much more often than Popovers. For example, Spotify implements HoverCards over the 'like' and 'download' icons in their desktop app. Instagram also uses delayed HoverCards to show user profiles when you hover over comments.

# Installation 

To use the HoverCard component in your project, follow these steps:

1. Create a new folder called 'HoverCard' in your project's components directory.
2. Copy the `HoverCard.tsx` and `HoverCard.css` files into the newly created 'HoverCard' folder.

# Props 

1. `children` (required element): The children MUST consist of 2 unqiue elements: trigger and popover. The trigger will toggle the popover.
2. `darkMode` (optional boolean): Select darkMode styling if true, lightMode styling if omitted. 

 

# Example Usage
### page.tsx
```jsx
'use client'

import React, { useState } from 'react';
import HoverCard from '@/components/HoverCard/HoverCard';
import Image from 'next/image';

const HoverCardDemo: React.FC = () => {

    return (
        <div>
            <HoverCard>
                {/* First child is the trigger */}
                <Image width={24} height={24} src='/HoverCard/Heart.svg' alt='heart' />
                {/* Second child is the popover content */}
                <div>
                    <p>Add to liked songs</p>
                </div>
            </HoverCard>
        </div>
    );
};

export default HoverCardDemo;
```

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