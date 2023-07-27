# Day 19/100

July 26th / October 16th

# Sheet
<a href="https://www.youtube.com/watch?v=q2HqHt8Bcmc" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Sheet" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Sheet" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1134152788717359144/image.png"/></a>  

# Description 

The "Sheet" component serves to display a jsx element on demand. The visual design is borrowed from shadcn while the developer experience is enhanced by eliminating unnecessary nested components. I highly recommend using this component in your next.js projects. Enjoy.

# Installation 

To use the Sheet component in your project, follow these steps:

1. Create a new folder called 'Sheet' in your project's components directory.
2. Copy the `Sheet.tsx` and `Sheet.css` files into the newly created 'Sheet' folder.

# Props 
### Sheet
`children` (required jsx): These are the child elements or components that the Sheet component wraps around. They usually consist of a combination of SheetTrigger and SheetContent components.

`darkMode` (optional boolean): This property controls the display mode of the tabs. If true, it switches the tabs to a dark theme. The default is a light theme if this prop is false or not provided.

### SheetTrigger
`value` (required string): This is a unique identifier for a particular tab. It's used to determine which tab is currently active and when clicked, it will change the active tab state in the parent Sheet component.

`children` (required ReactNode): This property represents the content of the SheetTrigger component, which is usually the label of the tab.

### SheetContent
`value` (required string): This is a unique identifier for a specific tab's content. It should match the value of the corresponding SheetTrigger to ensure correct display of content when that tab is active.

`children` (required ReactNode): This property represents the actual content of the tab that gets displayed when the tab is active.

# Example Usage
### page.tsx
```jsx
'use client'

import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/Sheet/Sheet';
import PrettyCode from '@/components/PrettyCode/PrettyCode';

const SheetDemo: React.FC = () => {

  const reactCode = `console.log('hi')`;

  return (
      <Sheet>

        <SheetTrigger value='preview'><p>Preview</p></SheetTrigger>
        <SheetTrigger value='code'><p>Code</p></SheetTrigger>

        <SheetContent value='preview'><div className='demoBox'></div></SheetContent>
        <SheetContent value='code'><PrettyCode language='jsx' code={reactCode} /></SheetContent>

      </Sheet>
  );
};

export default SheetDemo;
```

# Prerequisites
This component requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used for this component:
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"