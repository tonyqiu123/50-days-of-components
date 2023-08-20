## Day 9/100

July 16th / October 16th

# Toast Component for React 
<a href="https://www.youtube.com/watch?v=O49qJP5IMbQ" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/toast" target="_blank">Demo it yourself</a>

<a href="https://www.youtube.com/watch?v=O49qJP5IMbQ" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1130571213870223492/image.png"/></a>  

## Description 

The Toast component provides a toast notification feature. It allows you to display brief messages or notifications to the user in a non-intrusive way. What makes this toast unique among ones developed by shadcn or mantine, is that you can have multiple toasts at the same time that will stack on top of each other in the correct order as you activate them. Really cool stuff.

## Prerequisites
This package requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies are required by this package :
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"


## Installation 

To use the Toast component in your project, follow these steps:

1. Create a new folder called 'Toast' in your project's components directory.
2. Copy the `Toast.tsx`, `ToastProvider.tsx` and `Badge.css` files into the newly created 'Toast' folder.

## Props

# Toast.tsx

1. `setShowToast` (required): A function that updates the state to control the visibility of the toast. It is typically used to show or hide the toast based on user interactions or other events.

2. `showToast` (required): A boolean value that determines whether the toast should be displayed or hidden. When set to true, the toast will be shown, and when set to false, it will be hidden.

3. `darkMode` (optional): A boolean value that indicates whether the toast should be displayed in dark mode. When set to true, the toast will apply styles for dark mode, and when set to false or omitted, the default styles will be applied.

4. `children` (optional): Content to be rendered inside the toast component. It can be any valid React node or component.

# ToastProvider.tsx

1. `children` (optional): Insert `Toast.tsx` inside the `ToastProvider.tsx` component.

## Example Usage
```jsx
'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import Toast from '@/components/Toast/Toast';
import ToastProvider from '@/components/Toast/ToastProvider';


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)

  return (
    <>
      
      <Button variant='secondary' darkMode={isDarkMode} text='Schedule meeting' handleClick={async () => setShowToast1(true)} />
      <Button variant='secondary' darkMode={isDarkMode} text='Schedule webinar' handleClick={async () => setShowToast2(true)} />

      <ToastProvider>

        <Toast showToast={showToast1} setShowToast={setShowToast1} darkMode={isDarkMode} >
          <h4>Meeting Scheduled: Project Update</h4>
          <p>Thursday, September 15, 2022 at 10:00 AM</p>
        </Toast>

        <Toast showToast={showToast2} setShowToast={setShowToast2} darkMode={isDarkMode} >
          <h4>Webinar Scheduled: Digital Marketing Strategies</h4>
          <p>Wednesday, October 5, 2022 at 2:30 PM</p>
        </Toast>

      </ToastProvider>
    </>
  );
};

```
In this example, I have three buttons. The first button toggles dark mode, the second and third buttons trigger seperate Toast.tsx components. 

## Component Code 

# Toast.tsx
```jsx
import React, { useEffect, useState } from 'react';
import './Toast.css';
import Image from 'next/image';

interface ToastProps {
    children?: React.ReactNode;
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
    showToast: boolean;
    darkMode?: boolean;
}

const Toast: React.FC<ToastProps> = ({
    children,
    setShowToast,
    showToast,
    darkMode = false,
}) => {
    const [shouldRender, setShouldRender] = useState(showToast);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (showToast) {
            setShouldRender(true);
            if (timeout) {
                clearTimeout(timeout);
            }
        } else {
            timeout = setTimeout(() => {
                setShouldRender(false);
            }, 200);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [showToast]);

    useEffect(() => {
        if (showToast) {
            const timeout = setTimeout(() => {
                setShowToast(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [showToast, setShowToast]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div className={`${darkMode && 'darkMode'} toast ${showToast && 'showToast'}`}>
            <Image
                onMouseDown={() => setShowToast(false)}
                width={12}
                height={12}
                alt="close toast"
                src="/closeIcon.svg"
            />
            {children}
        </div>
    );
};

export default Toast;

```

# ToastProvider.tsx
```jsx
import React, { useEffect, useState, useRef } from 'react';
import './Toast.css'

interface ToastProviderProps {
    children?: React.ReactNode
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

    return (
        <div className='toastProvider'>
            {children}
        </div>
    );
};

export default ToastProvider;

```