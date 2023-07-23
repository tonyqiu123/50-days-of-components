# Day 16/100

July 23th / October 16th

# Popover
<a href="https://www.youtube.com/watch?v=M7FKxklNTOU" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Popover" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Popover" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1132791609730273390/image.png"/></a>  

# Description 

This has got to be the 10th modal I've built. Besides that, what makes popovers unique is that you can attach a modal to a component. You will find this particularily useful when building shopping carts in ecommerce sites, adding language selection, or when developing user settings preferences.

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

To use the Popover component in your project, follow these steps:

1. Create a new folder called 'Popover' in your project's components directory.
2. Copy the `Popover.tsx` and `Popover.css` files into the newly created 'Popover' folder.

# Props 

1. `children` (required element): The children MUST consist of 2 unqiue elements: trigger and popover. The trigger will toggle the popover.
 

# Example Usage
### page.tsx
```jsx
'use client'

import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Popover from '@/components/Popover/Popover';
import Image from 'next/image';

const PopoverDemo: React.FC = () => {
    return (
        <Popover>
            {/* First child is the trigger */}
            <Button text='Toggle popover' variant='primary' />
            {/* Second child is the popover content */}
            <div>
                <h4>This is the content of the popover.</h4>
                <Image src='/Popover/losangeles.jpg' alt='los angeles' width={400} height={200} />
            </div>
        </Popover>
    );
};

export default PopoverDemo;
```

# Component Code 

### Popover.tsx
```jsx
import React, { useState } from 'react';
import './Popover.css'


type PopoverProps = {
    children: React.ReactElement[];
};

const Popover: React.FC<PopoverProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const trigger = React.cloneElement(children[0], {
        onClick: () => setIsOpen(!isOpen),
    });

    // Check if children[1] is valid before using it as content
    const content = children[1]
        ? React.cloneElement(children[1], {
            className: `popoverContent ${isOpen ? 'showPopoverContent' : ''}`
        })
        : null;

    return (
        <div className='popover'>
            {trigger}
            {content}
        </div>
    );
};

export default Popover
```
 