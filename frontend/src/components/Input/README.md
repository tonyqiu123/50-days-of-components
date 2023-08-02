## Day 6/100

July 13th / October 16th

# Input Component for React 
<a href="https://www.youtube.com/watch?v=Al1uSRnARyQ">Watch live demo on youtube</a>

<a href="https://www.youtube.com/watch?v=Al1uSRnARyQ"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1129134774666137620/Frame_454.png"/></a> 


This is a customizable Input component that can be easily integrated into any React project. It provides an input field with the ability to toggle between dark and light modes.

## Features

1. **Dark and Light Modes**: The Input component supports an optional darkMode prop, which defaults to false. When set to true, it displays the input field in dark mode.

2. **Customizable Placeholder**: You can customize the input field's placeholder text by providing the placeHolder prop, which accepts a string.

3. **Text Handling**: The Input component handles user input by accepting a text prop and a setText prop. The text prop represents the current value of the input field, and the setText prop allows updating the text value.

## Installation 

Create a new folder called 'Input' and copy the Input.tsx and Input.css files into that folder.

## Usage 

Here is an example of how to use the Input component:

```jsx
'use client'

import React, { useState } from 'react';  
import Input from '@/components/Input/Input';


export default function AdminDashboard() {
 const [inputText, setInputText] = useState('');

  return (  
     <Input
        darkMode={true}
        placeHolder='Search'
        text={inputText}
        setText={setInputText}
      /> 
  );
};

```

In this example, the Input component is used to create a search input field. The component receives the darkMode prop set to true. The text prop represents the current value of the input field, and the setText prop allows updating the text value.

## Props

1. **text**: The current value of the input field.

2. **setText**: A function to update the value of the input field.

3. **placeHolder**: An optional prop that represents the placeholder text of the input field. Defaults to an empty string.

4. **darkMode**: An optional boolean prop that defaults to false. If set to true, the input field will be displayed in dark mode.


## CSS 

The Input component comes with its own CSS, which can be found in the Input.css file. Make sure to include this CSS file in your project for the input field to appear correctly.

## Full Code 

```jsx
import React, { useState, ReactNode } from 'react';
import './Input.css';

interface InputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeHolder?: string;
  darkMode?: boolean;
}

const Input: React.FC<InputProps> = ({ text, setText, placeHolder = '', darkMode = false }) => {
  return (
    <input
      placeholder={placeHolder}
      className={`${darkMode && 'darkMode'}`}
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default Input;

```

The CSS code for the Input component:

```css
input {
  font-size: var(--font-size-sm);
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 8px 12px;
  min-width: 320px;
}

input:focus {
  outline: 1px solid #cccccc;
}

input.darkMode {
  color: white;
  border: 1px solid #333333;
}

input.darkMode:focus {
  color: white;
  outline: 1px solid #333333;
}

input.darkMode::placeholder {
  color: rgb(165, 169, 177);
}
```