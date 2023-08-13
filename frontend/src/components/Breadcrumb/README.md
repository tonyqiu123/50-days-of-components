# Day 37/100

August 13th / October 16th

# Breadcrumb
<a href="https://www.youtube.com/watch?v=BPU72Nlz4pM" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Breadcrumb" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Breadcrumb" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1140407148275302510/image.png"/></a>  

## Description 

###### The breadcrumb component is a navigational aid that displays the hierarchical path of a user's current location within a website, enhancing user experience and providing easy access to previous pages. By showing the user's journey through various levels of content, breadcrumbs improve website usability and simplify navigation.

The breadcrumb component generates a navigation trail reflecting the current page's URL segments.

## Installation 

To use the Breadcrumb component in your project, follow these steps:

1. Create a new folder called 'Breadcrumb' in your project's components directory.
2. Copy the `Breadcrumb.tsx` file into the newly created 'Breadcrumb' folder.

## Props 
### Breadcrumb:
`darkMode` (optional boolean): Switch to dark mode for better visibility.

`start` (optional number): Choose where rendering begins.

`end` (optional number): Set the last displayed index.

`className` (optional string): Customize CSS classes for styling.

## Example Usage
###$ page.tsx
```jsx
<Breadcrumb darkMode={isDarkMode} />
<Breadcrumb darkMode={isDarkMode} start={3} end={4} />
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

