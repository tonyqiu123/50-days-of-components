# Day 11/100

July 18th / October 16th

# Checkbox Component for React 
<a href="https://youtu.be/cXnAICsWmyA" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/checkbox" target="_blank">Demo it yourself</a>

<a href="https://youtu.be/cXnAICsWmyA" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1130897523393970336/image.png"/></a>  

# Description 

A Next.js checkbox component. Checkboxes are often used in forms to get consent from users. I implemented custom styling on the checkbox, so feel free to add further customization in your project!

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

To use the Checkbox component in your project, follow these steps:

1. Create a new folder called 'Checkbox' in your project's components directory.
2. Copy the `Checkbox.tsx` and `Checkbox.css` files into the newly created 'Checkbox' folder.

# Props 

1. `primaryText` (required string): Main text for the checkbox.

2. `subText` (optional string): Text below the `primaryText`.
3. `onChange` (optional void function that takes in 1 boolean): Add logic whenever the checkbox's status changes.
4. `darkMode` (optional boolean): Select darkMode styling if true, lightMode styling if omitted. 

# Example Usage
```jsx
'use client'

import React from 'react';
import Checkbox from '@/components/Checkbox/Checkbox';

export default function CheckboxDemo() {

  const handleCheckboxChange = (checked: any) => {
    console.log('Accept terms and conditions:', checked);
  };

  return (
    <div>
      <Checkbox
        primaryText="Accept terms and conditions"
        subText="You agree to our Terms of Service and Privacy Policy."
        onChange={handleCheckboxChange}
        darkMode={true}
      />
      </div>
  );
};


```
In this example, the Checkbox component console.logs its status. It is also in  `darkMode`.

# Component Code 

## Checkbox.tsx
```jsx
import React, { useState } from 'react';
import './Checkbox.css';
import Image from 'next/image';

type CheckboxProps = {
    primaryText: string;
    subText?: string;
    onChange?: (checked: boolean) => void;
    darkMode?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
    primaryText,
    subText = '',
    onChange = () => { },
    darkMode = false,
}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(!isChecked);
        onChange(newCheckedState);
    };

    return (
        <label className={`${darkMode && 'darkMode'} checkbox-container`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className='checkmark'>
                <Image width={10} height={10} src='/checkmark.svg' alt='checkmark' />
            </div>
            <div className="text-container">
                <p className="primary-text">{primaryText}</p>
                {subText && <p className="sub-text">{subText}</p>}
            </div>
        </label>

    );
};

export default Checkbox;
```
 