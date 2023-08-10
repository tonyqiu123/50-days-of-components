# Day 34/100

August 10th / October 16th

# Pagination
<a href="https://youtu.be/FK7lXagTPp4" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Pagination" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Pagination" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1139266077185036338/image.png"/></a>  

## Description 

###### The pagination component in web development facilitates the organization and navigation of large sets of content by dividing it into manageable pages, enhancing user experience. It typically includes controls like "Previous" and "Next" buttons, enabling users to navigate through the content sequentially.

Show the currently active page and enable navigation among multiple pages.

# Installation 

To use the Pagination component in your project, follow these steps:

1. Create a new folder called 'Pagination' in your project's components directory.
2. Copy the `Pagination.tsx` and `Pagination.css` file into the newly created 'Pagination' folder.

# Props 
### Pagination:
`totalQueries` (required number): Specifies the overall count of queries available for pagination.

`queriesPerPage` (required number): Sets the quantity of queries displayed on each pagination page.

`darkMode` (optional boolean): Enables the pagination component to adapt to a dark mode theme if set to true.

`handleClick` (optional function): Provides an optional callback function to handle click events within the pagination component, allowing interaction with specific page indices and query ranges.

## Example Usage
### page.tsx
```jsx
<Pagination handleClick={(index, start, end, numberOfQueries) => exampleFunction(index, numberOfQueries)} totalQueries={25} queriesPerPage={5} />
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

