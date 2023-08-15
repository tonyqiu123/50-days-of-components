# Day 38/100

August 14th / October 16th

# MultiSelect
<a href="https://youtu.be/HLqfz7WPbsw" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/MultiSelect" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/MultiSelect" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1140725960501637271/image.png"/></a>  

## Description 

###### The multiselect component offers an intuitive user experience by presenting a dynamic interface that permits the simultaneous selection of multiple items from a comprehensive list. This feature not only simplifies data input and filtering for users but also enhances the flexibility of interaction by accommodating various selection scenarios, making it a valuable addition to applications that require efficient and user-friendly data management.

The multiselect component streamlines user interaction by allowing them to effortlessly pick multiple choices from a list, enhancing versatility in data selection.

## Installation 

To use the MultiSelect component in your project, follow these steps:

1. Create a new folder called 'MultiSelect' in your project's components directory.
2. Copy the `MultiSelect.tsx` and `MultiSelect.css` file into the newly created 'MultiSelect' folder.

## Props 
### MultiSelect:
`darkMode` (optional boolean): Indicates whether the component should be displayed in a dark mode theme.

`queries` (optional string array): Provides a predefined list of options for selection within the component.

`placeholder` (optional string): Specifies the placeholder text for the search input.

`selected` (required string array): Manages the array of currently selected items.

`setSelected` (required React.Dispatch<React.SetStateAction<string[]>>): A state setter function to update the selected array.

## Example Usage
### page.tsx
```jsx
const [selected2, setSelected2] = useState<string[]>([])
    
const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
    "PHP",
    "C#",
    "TypeScript",
    "Go",
    "Rust",
    "Kotlin"
];

<MultiSelect selected={selected2} setSelected={setSelected2} queries={languages} darkMode={isDarkMode} />
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

