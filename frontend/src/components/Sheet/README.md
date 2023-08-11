# Day 20/100

July 28th / October 16th

# Sheet
<a href="https://youtu.be/pUb4ClANeB8" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Sheet" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Sheet" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1134520983810736200/image.png"/></a>  

# Description 

The sheet component is a crucial user interface design element widely utilized in popular software applications such as Google Sheets for data management, Microsoft Excel for financial analysis, and Adobe XD for planning and prototyping user interfaces. In these varied contexts, it provides a structured, flexible canvas where users can input, modify, and visualize information. 

# Installation 

To use the Sheet component in your project, follow these steps:

1. Create a new folder called 'Sheet' in your project's components directory.
2. Copy the `Sheet.tsx` and `Sheet.css` files into the newly created 'Sheet' folder.

# Props 
### Sheet
`children` (required jsx): These are the child elements or components that the Sheet component wraps around. They usually consist of a combination of SheetTrigger and SheetContent components.

`darkMode` (optional boolean): This property controls the display mode of the tabs. If true, it switches the tabs to a dark theme. The default is a light theme if this prop is false or not provided.

`showSheet` (required boolean): This property controls the visibility of the Sheet component. If true, the Sheet component is displayed. If false or not provided, the Sheet component is hidden.

`setShowSheet` (required function): This is a function, typically a state setter function from the useState hook in React, that is used to change the visibility of the Sheet component. It accepts a boolean value - true to show the Sheet component, and false to hide it.

`className` (optional string): This property allows the user to add additional CSS classes to the Sheet component. It's useful for customizing the appearance of the component beyond the basic styling provided by default. If this prop is not provided, no additional classes are added.

# Example Usage
### page.tsx
```jsx
import Button from '@/components/Button/Button';
import Sheet from '@/components/Sheet/Sheet';
import Input from '@/components/Input/Input';
import Checkbox from '@/components/Checkbox/Checkbox';
import SearchBar from '@/components/SearchBar/SearchBar';
    
const SheetDemo: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showSheet, setShowSheet] = useState(false)
    
    return (
        <>
            <Button handleClick={async () => setShowSheet(true)} variant='secondary' darkMode={isDarkMode} text='Open sheet' />
            <Sheet setShowSheet={setShowSheet} showSheet={showSheet} darkMode={isDarkMode}>
                <h3>Example Sheet</h3>
                <Input title='First Name' darkMode={isDarkMode} placeHolder='First Name' />
                <Input title='Last Name' darkMode={isDarkMode} placeHolder='Last Name' />
                <SearchBar
                title='Birth Year'
                placeholder='Select Year'
                fullWidth={true}
                darkMode={isDarkMode}
                queries={years}
                maxHeight='500px'
                />
                <Checkbox className='checkbox' darkMode={isDarkMode} primaryText='Accept terms and conditions' subText='Agree to our Terms of Service and Privacy Policy.' />
                <Button handleClick={async () => setShowSheet(false)} variant='primary' text='submit' />
            </Sheet>
        </>
    )
}
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