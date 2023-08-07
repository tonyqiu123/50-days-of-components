# Day 28/100

August 4th / October 16th

# Swipeable
<a href="https://youtu.be/z5tCuBnRNTg" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Swipeable" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Swipeable" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1137962714313007154/image.png"/></a>  

## Description 

###### The swipeable component enhances user experience by enabling developers to effortlessly integrate a drag-to-close functionality into any element. This intuitive feature empowers users to conveniently dismiss elements with a simple swipe gesture, adding a layer of interactivity and fluidity to the interface.

Another component again to help you build custom components. The Swipeable.tsx component makes it easy to implement a 'drag-to-close' feature on any component in your React/Next project. Have fun.

## Installation 

To use the Swipeable component in your project, follow these steps:

1. Create a new folder called 'Swipeable' in your project's components directory.
2. Copy the `Swipeable.tsx` and `Swipeable.css` file into the newly created 'Swipeable' folder.

# Props 
### Swipeable:
`visible` (required boolean): Controls the visibility of the Swipeable container. When set to true, the container is displayed; when set to false, it's hidden.

`setVisible` (required React Dispatch function): Used to update the visible state of the Swipeable container.

`closeDirection` (optional string): Determines the direction from which the container is closed (e.g., 'up', 'down', 'left', 'right').

`closeTravel` (optional number): Represents the distance (in pixels) the container must be dragged to trigger a close action. Default value is 150 pixels.

`children` (required ReactNode): Only a single child component is allowed.

`transition` (optional string): Specifies the CSS transition for the container's animation. Default value is 'transform 500ms cubic-bezier(0.32, 0.72, 0, 1)'.

`className` (optional string): Additional CSS class to style the Swipeable container.

## Example Usage
### page.tsx
```jsx
'use client'

import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Swipeable from '@/components/Swipeable/Swipeable';
import Backdrop from '@/components/Backdrop/Backdrop';

const DrawerDemo: React.FC = () => {

    const [drawerVisible, setDrawerVisible] = useState(false)

    return (
        <>
            <Backdrop showBackdrop={drawerVisible} setShowBackdrop={setDrawerVisible}/> 
            <Button variant='primary' text='Show drawer' handleClick={async () => setDrawerVisible(true)} />
            <Swipeable closeDirection='down' visible={drawerVisible} setVisible={setDrawerVisible}>
                <h1>Drawer component</h1>
            </Swipeable>
        </>
    )
};

export default DrawerDemo;
```

## Prerequisites
This component requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used for this component:
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"

