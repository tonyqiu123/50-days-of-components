# Day 13/100

July 20th / October 16th

# TextArea
<a href="https://youtu.be/1alfhsya4II" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/textarea" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/textarea" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1131614950763286568/image.png"/></a>  

# Description 

Textareas are frequently utilized in settings and preferences. Due to their ability to handle multi-line text input, they offer a versatile choice for enhancing the user experience. An interesting fact about textareas is that they can be resized by the user in most modern browsers, providing a dynamic and interactive element to form inputs.

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

To use the TextArea component in your project, follow these steps:

1. Create a new folder called 'TextArea' in your project's components directory.
2. Copy the `TextArea.tsx` and `TextArea.css` files into the newly created 'TextArea' folder.

# Props 

1. `placeholder` (required string): placeholder.

2. `onChange ` (optional void function that takes in a string): Handle logic whenever text in the textarea changes.

3. `width` (optional string or number): Set the width of the textarea. If a number, the width will be by default set to a percentage. 

4. `height` (optional string or number): This prop sets the height of the textarea. If a number, the height will be by default set to a percentage. 

5. `darkMode` (optional boolean): Select darkMode styling if true, lightMode styling if omitted. 

# Example Usage
### page.tsx
```jsx
'use client'

import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Tooltip from '@/components/Tooltip/Tooltip';
import TextArea from '@/components/TextArea/TextArea';


export default function TextAreaDemo() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className={`page ${isDarkMode && 'darkMode'}`}>

            <Tooltip darkMode={isDarkMode} toolTipText='Enter text into a textfield.'>
                <h1>TextArea Component</h1>
            </Tooltip>
            

            <TextArea darkMode={isDarkMode} placeholder='Enter a message here.' />
        </div>
    )
};
```
In this example, my TextArea component has its `darkMode` prop toggled by my button component. Just a simple implementation.

# Component Code 

### TextArea.tsx
```jsx
import { ChangeEvent, CSSProperties, useState } from 'react';
import './TextArea.css';

type TextAreaProps = {
    placeholder: string;
    onChange?: (placeholder: string) => void;
    width?: string | number;
    height?: string | number;
    darkMode?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({ placeholder, onChange = () => { }, width = '100%', height = '150px', darkMode }) => {
    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    const textareaStyle: CSSProperties = {
        width: typeof width === 'number' ? `${width}%` : width,
        height: typeof height === 'number' ? `${height}%` : height,
    };

    return (
        <textarea
            placeholder={placeholder}
            onChange={handleInputChange}
            style={textareaStyle}
            className={`textarea ${darkMode && 'darkMode'}`}
        />
    );
};

export default TextArea;
```
 