# Day 20/100

July 27th / October 16th

# Backdrop
<a href="https://youtu.be/N4yV-UQnAFA" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Backdrop" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Backdrop" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1134247172527902850/image.png"/></a>  

# Description 

Day 20, one fifth complete of the journey! 
The "Backdrop" component serves to display a blurred, 'pointer-event-less' overlap on the web. Used in nearly all applications, and used in many components including modals, sheets, alerts, and dialogs.

# Installation 

To use the Backdrop component in your project, follow these steps:

1. Create a new folder called 'Backdrop' in your project's components directory.
2. Copy the `Backdrop.tsx` and `Backdrop.css` files into the newly created 'Backdrop' folder.

# Props 
### Backdrop
`showBackdrop` (required boolean): This property dictates whether the backdrop component should be displayed or not. If true, the backdrop is visible.

`setShowBackdrop` (required function): This is a function that sets the state of the showBackdrop property. It takes a boolean value as argument to toggle the visibility of the Backdrop component.

`darkMode` (optional boolean): This prop controls the theme mode of the backdrop. If set to true, the backdrop will display a dark theme. The default theme is light if this property is set to false or not provided.


# Example Usage
### page.tsx
```jsx
'use client'

import Button from '@/components/Button/Button';
import Backdrop from '@/components/Backdrop/Backdrop';

const BackdropDemo: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)

    return (
        <>
            
            <Button handleClick={async () => setShowBackdrop(true)} variant='secondary' darkMode={isDarkMode} text='Open Backdrop' />
            <Backdrop darkMode={isDarkMode} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />;
        </>
)}

export default BackdropDemo;
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