# Day 18/100

July 25th / October 16th

# PrettyCode
<a href="https://www.youtube.com/watch?v=vE99eu9BC9Y" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/PrettyCode" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/PrettyCode" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1133874301892841543/image.png"/></a>  

# Description 

The "PrettyCode" component serves to display code snippets in a clean and appealing way. It employs the "react-syntax-highlighter" library to bring syntax-highlighted code to life, making it a key player in a coding tutorial site, blog post, or documentation.

# Installation 

To use the PrettyCode component in your project, follow these steps:

1. Create a new folder called 'PrettyCode' in your project's components directory.
2. Copy the `PrettyCode.tsx` and `PrettyCode.css` files into the newly created 'PrettyCode' folder.

# Props 

1. `code` (required string): The code string that needs to be highlighted and optionally copied.

2. `darkMode` (optional boolean): Enables dark mode styling if true. Uses light mode styling if false or omitted.

3. `language` (required string): A string denoting the language of the code for the syntax highlighter.

4. `copy` (optional boolean): If true, it enables the copying of the code functionality. It is false by default.

5. `className` (optional string): A string representing the CSS class name to apply additional styling to the component.
 

# Example Usage
### page.tsx
```jsx
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './PrettyCode.css'

interface PrettyCodeProps {
  code: string;
  darkMode?: boolean;
  language: string;
  copy?: boolean;
  className?: string;
}

const PrettyCode: React.FC<PrettyCodeProps> = ({ code, darkMode = false, language, copy = false, className }) => {

  const [copied, setCopied] = useState('Copy code 📋');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied('Copied ✅');

      setTimeout(() => {
        setCopied('Copy code 📋');
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopied('Failed to copy ❌');
    }
  };

  return (
    <div className={`prettycodeContainer ${darkMode && 'darkMode'} ${className}`}>
      <div className='prettycodeHeader'>
        {language}
        {copy && <p onClick={handleCopy} style={{ cursor: 'pointer' }}>{copied}</p>}
      </div>
      <SyntaxHighlighter className='prettycode' language={language} style={darkMode ? vscDarkPlus : prism}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default PrettyCode;

```

# Prerequisites
This component requires `react-syntax-highlighter` and Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used for this component:
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"
8. "react-syntax-highlighter": "^15.5.0"