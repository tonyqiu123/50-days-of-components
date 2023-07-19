# Day 12/100

July 19th / October 16th

# Switch
<a href="https://www.youtube.com/watch?v=vqeAzYbHaGY" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/switch" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/switch" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1131267975509463130/image.png"/></a>  

# Description 

 Switches are often used in settings and preferences. Because they're relatively more animated compared to other components, switches can be a solid choice to make the user experience more enjoyable.

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

To use the Switch component in your project, follow these steps:

1. Create a new folder called 'Switch' in your project's components directory.
2. Copy the `Switch.tsx` and `Switch.css` files into the newly created 'Switch' folder.

# Props 

1. `onChange` (required void function that takes in 1 boolean): Handle logic whenever the switch is toggled.

2. `darkMode` (optional boolean): Select darkMode styling if true, lightMode styling if omitted. 

# Example Usage
### page.tsx
```jsx
'use client'

import React, { useState } from 'react';
import Switch from '@/components/Switch/Switch';
import Tooltip from '@/components/Tooltip/Tooltip';


export default function SwitchDemo() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleSwitchChange = (checked: boolean) => {
        setIsDarkMode(!isDarkMode)
    };

    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>
            <Tooltip darkMode={isDarkMode} toolTipText='Toggle a boolean value.'>
                <p>Switch Component</p>
            </Tooltip>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center'}}>
                <Switch onChange={handleSwitchChange} darkMode={isDarkMode} />
                <p>Toggle dark mode</p>
            </div>
        </div>
    );
};
```
In this example, I created a Switch component that toggles `darkMode` state. I then pass the `darkMode` state as a prop into the switch. 

# Component Code 

### Switch.tsx
```jsx
import React, { useState } from 'react';
import './Switch.css';

interface SwitchProps {
    onChange: (checked: boolean) => void;
    darkMode?: boolean
}

const Switch: React.FC<SwitchProps> = ({ onChange, darkMode = false }) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked);
    };

    return (
        <div
            className={`switch ${isChecked ? 'checked' : ''} ${darkMode && 'darkMode'}`}
            onClick={handleToggle}
        >
            <div
                className={`slider ${isChecked ? 'checked' : ''}`}
            />
        </div>
    );
};

export default Switch;
```
 