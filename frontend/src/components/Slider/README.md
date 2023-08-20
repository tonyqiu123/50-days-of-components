## Day 7/100

July 14th / October 16th

# Slider Component for React 
<a href="https://www.youtube.com/watch?v=t_Mkn9QZZmE">Watch live demo on youtube</a>

<a href="https://www.youtube.com/watch?v=t_Mkn9QZZmE"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1129446105776672818/Frame_455.png"/></a> 


Today, I want to introduce a Slider component that can be easily integrated into any React project. It allows users to select a value from a specified range by dragging a slider handle. Let's dive into its features, installation, usage, props, and code.

## Features

1. **Customizable Range**: The Slider component supports an optional darkMode prop, which defaults to false. When set to true, it displays the Slider in dark mode.

2. **Default Value**: You can set a default value for the slider by providing the `defaultValue` prop. The slider handle will initially be positioned at this value.

3. **Dark and Light Modes**: The Slider component supports an optional `darkMode` prop, which defaults to false. When set to true, it displays the slider in dark mode.

4. **Full Width**: The Slider component also supports an optional `fullWidth` prop, which defaults to false. When set to true, the slider will expand to fill the available width.

5. **Customizable Value Change**:  The Slider component invokes the `onChange` function whenever the slider value changes. You can provide a custom function to handle the value change event


## Installation 

To use the Slider component in your project, follow these steps:

Create a new folder called 'Slider' in your project's components directory.
Copy the `Slider.tsx` and `Slider.css` files into the newly created 'Slider' folder.

## Usage 

Here is an example of how you can use the Slider component in your React project:

```jsx 
import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Slider from '@/components/Slider/Slider';
import Tooltip from '@/components/Tooltip/Tooltip';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>
      
      <Button variant='secondary' darkMode={isDarkMode} text={isFullWidth ? 'Untoggle full width' : 'Toggle full width'} handleClick={async () => setIsFullWidth(!isFullWidth)} />
      <Tooltip darkMode={isDarkMode} toolTipText='Drag the slider component to update a custom value from a custom range.'>
        <p>Slider Component</p>
      </Tooltip>
      <Slider
        min={0}
        max={100}
        defaultValue={50}
        darkMode={isDarkMode}
        fullWidth={isFullWidth}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
};


```
In this example, two buttons toggle the dark mode and full width options. The Tooltip component is used to provide additional information about the Slider component. 

## Props

The Slider component accepts the following props:

1. **min**: The minimum value of the range (number).

2. **max**: The maximum value of the range (number).

3. **defaultValue**: The default value of the slider (number).
4. **darkMode**: An optional boolean prop that defaults to false. If set to true, the slider will be displayed in dark mode.
5. **fullWidth**: An optional boolean prop that defaults to false. If set to true, the slider will expand to fill the available width.
6. **onChange**: An optional function that will be invoked whenever the slider value changes. It receives the new value as a parameter.


## CSS 

The Slider component comes with its own CSS, which can be found in the `Slider.css` file. Make sure to include this CSS file in your project for the slider to appear correctly.

## Full Code 

```jsx
import React, { FC, ChangeEvent, useState } from 'react';
import './Slider.css';

interface SliderProps {
  min: number;
  max: number;
  defaultValue: number;
  darkMode?: boolean;
  fullWidth?: boolean;
  onChange?: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ min, max, defaultValue, onChange = () => { }, darkMode = false, fullWidth=false }) => {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
    onChange(Number(event.target.value));
  };

  return (
    <input
      type="range"
      className={`${darkMode && 'darkMode'} ${fullWidth && 'fullWidth'}`}
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;

```

You can copy and paste this code into your project's `Slider.tsx` file.

That's it for today! The Slider component provides an intuitive way for users to select values within a range. Feel free to customize it further to suit your project's needs. Happy coding!