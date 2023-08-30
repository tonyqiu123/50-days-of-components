# Day 50/100

August 26th / October 16th

# DataTable
<a href="https://youtu.be/z-UiOh0E-fM" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/DataTable" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/DataTable" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1146530634530033784/image.png"/></a>  

## Description 

###### The DataTable component is a versatile React component that facilitates dynamic sorting and display of tabular data, complete with optional action buttons. It utilizes state management for sorting, offers customizable actions, and dynamically determines cell alignment based on data types, providing a user-friendly and adaptable data presentation solution.


A highly-abstracted table that requires 1 line to implement. Includes sorting (asc and desc) and ability to run asynchronous functions on each row.

## Installation 

To use the DataTable component in your project, follow these steps:

1. Create a new folder called 'DataTable' in your project's components directory.
2. Copy the `DataTable.tsx` and `DataTable.css` file into the newly created 'DataTable' folder.

## Props 
### DataTable

`data` (required array of objects): An array of objects representing the data to be displayed in the table. Each object represents a row in the table.

`actions` (optional array of objects): An array of action objects that define custom actions associated with each row in the table. Each action object should have a name property (string) representing the action's name and an action property (function) that is executed when the action is triggered.

`darkMode` (optional boolean): A boolean indicating whether the table should be displayed in dark mode. When set to true, the table will apply styles for dark mode.

## Example Usage
### page.tsx
```jsx
import DataTable from '@/components/DataTable/DataTable';

const actions = [
    {
        name: "Edit job",
        action: async () => { }
    },
    {
        name: "Delete job",
        action: async () => { }
    }
]

const jobs = [
    {
        jobTitle: "Software Engineer",
        salary: 90000,
        yoeRequired: 2,
        location: "San Francisco",
        jobDescription: "Develop and maintain software applications.",
    },
    {
        jobTitle: "Data Scientist",
        salary: 85000,
        yoeRequired: 3,
        location: "New York",
        jobDescription: "Analyze and interpret complex data to inform business decisions.",
    }
];

<DataTable darkMode={isDarkMode} data={jobs} actions={actions} />
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

