# Day 39/100

August 15th / October 16th

# Select
<a href="https://youtu.be/_eCPKuCeCGs" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Select" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Select" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1141153709259243711/image.png"/></a>  

## Description 

###### The select web development component plays a pivotal role in enhancing user interaction by presenting a dropdown menu that enables users to conveniently choose from a range of options. This intuitive interface element not only simplifies data input but also contributes to a seamless and engaging user experience, making it an indispensable tool for creating dynamic and user-centric web applications.

Offer a user-friendly dropdown menu for option selection.

## Installation 

To use the Select component in your project, follow these steps:

1. Create a new folder called 'Select' in your project's components directory.
2. Copy the `Select.tsx` and `Select.css` file into the newly created 'Select' folder.

## Props 
### Select:
`selected` (required string): Represents the currently selected option in the dropdown menu.

`setSelected` (required React.Dispatch<React.SetStateAction<string>>): A function used to update the selected state with a new value when a dropdown option is clicked.

`darkMode` (optional boolean): Determines whether the component should be displayed in a dark mode theme.

`queries` (required string[]): An array of strings containing the options to be displayed in the dropdown menu.

`placeholder` (optional string): Specifies the placeholder text to be displayed in the dropdown when no option is selected.

`...props` (optional HTMLAttributes<HTMLElement>): Additional HTML attributes that can be passed to the underlying HTML element like style or className.

## Example Usage
### page.tsx
```jsx
const animals = [
    'Cat',
    'Dolphin',
    'Panda',
    'Koala',
    'Horse',
    'Owl',
    'Squirrel',
    'Rabbit',
    'Gorilla',
    'Zebra',
    'Crocodile'
];

const [selected1, setSelected1] = useState<string>('')

<Select style={{ minWidth: '200px' }} queries={animals} selected={selected1} setSelected={setSelected1} darkMode={isDarkMode} />
```

## Prerequisites
This component requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used for this component:
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"

