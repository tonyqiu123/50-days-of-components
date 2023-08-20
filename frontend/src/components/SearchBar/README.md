## Day 8/100

July 15th / October 16th

#  SearchBar Component for React 
<a href="https://www.youtube.com/watch?v=eiwNHE6AiKk" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/searchBar" target="_blank">Demo it yourself</a>

<a href="https://www.youtube.com/watch?v=eiwNHE6AiKk" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1130155494800101476/image.png"/></a> 


Today, I want to introduce a SearchBar component that can be easily integrated into any React project. It provides a convenient and interactive way for users to search through an array of items for quick access and retrieval. Let's dive into its features, installation, usage, props, and code.

## Features

1. **Customizable Placeholder**: The SearchBar component supports an optional `placeholder` prop which defaults to 'Search'. This can be customized according to your needs.

2. **Dark and Light Modes**: The SearchBar component supports an optional `darkMode` prop, which defaults to false. When set to true, it displays the SearchBar in dark mode.

3. **Full Width**: The SearchBar component also supports an optional `fullWidth` prop, which defaults to false. When set to true, the SearchBar will expand to fill the available width.

4. **Customizable Queries**: You can provide the queries to be searched by passing an array of strings to the `queries` prop.

5. **Max Height**:  You can set the maximum height for the dropdown list by providing a value to the `maxHeight` prop.

6. **Handle Select**:  The SearchBar component invokes the `handleSelect` function whenever an option from the dropdown is selected.

## Installation 

To use the SearchBar component in your project, follow these steps:

1. Create a new folder called 'SearchBar' in your project's components directory.
2. Copy the `SearchBar.tsx` and `SearchBar.css` files into the newly created 'SearchBar' folder.

## Usage 

Here is an example of how you can use the SearchBar component in your React project:

```jsx 
import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import SearchBar from '@/components/SearchBar/SearchBar';
import Tooltip from '@/components/Tooltip/Tooltip';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isFullWidth, setIsFullWidth] = useState(false)

  const foodProducts = [
    "Chocolate Chip Cookies",
    "Strawberry Jam"
  ];

  return (
    <div className={`page ${isDarkMode && 'darkMode'}`}>
      
      <Button variant='secondary' darkMode={isDarkMode} text={isFullWidth ? 'Untoggle full width' : 'Toggle full width'} handleClick={async () => setIsFullWidth(!isFullWidth)} />
      <Tooltip darkMode={isDarkMode} toolTipText='A versatile search bar allowing users to efficiently search through an array of items for quick access and retrieval.'>
        <p>SearchBar Component</p>
      </Tooltip>
      <SearchBar
        placeholder='Search foods'
        fullWidth={isFullWidth}
        darkMode={isDarkMode}
        queries={foodProducts}
        maxHeight='500px'
        handleSelect={(inputValue) => console.log(inputValue)}
      />
    </div>
  );
};

```
In this example, two buttons toggle the dark mode and full width options. The Tooltip component is used to provide additional information about the SearchBar component.

## Props

The  SearchBar component accepts the following props:

1. **placeholder**: An optional string prop that defaults to 'Search'. You can set this to a custom placeholder string.

2. **darkMode**: An optional boolean prop that defaults to false. If set to true, the SearchBar will be displayed in dark mode.

3. **fullWidth**: An optional boolean prop that defaults to false. If set to true, the SearchBar will expand to fill the available width.
4. **queries**: An array of strings that the SearchBar component will use for its search queries.
5. **maxHeight**: An optional string prop to set the maximum height of the dropdown. It should be provided in the format of '100px', '100%', etc.
6. **handleSelect**: An optional function that will be invoked when an option from the dropdown is selected. It receives the selected value as a parameter.

## CSS 

The SearchBar component comes with its own CSS, which can be found in the `SearchBar.css` file. Make sure to include this CSS file in your project for the SearchBar to appear correctly.

## Component Code 

```jsx
import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

type SearchBarProps = {
    placeholder?: string;
    darkMode?: boolean;
    fullWidth?: boolean;
    queries?: string[];
    maxHeight?: string;
    handleSelect?: (inputValue: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search',
    darkMode = false,
    fullWidth = false,
    queries = [],
    maxHeight = '100%',
    handleSelect = (_) => { },
}) => {
  // Your code goes here...
};

export default SearchBar;

```

You can copy and paste this code into your project's `SearchBar.tsx` file.

That's it for today! The SearchBar component provides a dynamic way for users to search items within an array. Feel free to customize it further to suit your project's needs. Happy coding!