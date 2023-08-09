# Day 33/100

August 9th / October 16th

# StarRating
<a href="https://youtu.be/YjLM6zQjXoQ" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/StarRating" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/StarRating" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1138861548849332326/image.png"/></a>  

## Description 

###### The star rating component provides a user-friendly interface for assigning and displaying ratings, making it valuable for collecting feedback in various applications. It enhances user engagement by visually representing opinions through intuitive star-based evaluations.

Rate and display feedback using a visually intuitive star-based system.

# Installation 

To use the StarRating component in your project, follow these steps:

1. Create a new folder called 'StarRating' in your project's components directory.
2. Copy the `StarRating.tsx` and `StarRating.css` file into the newly created 'StarRating' folder.

# Props 
### StarRating:
`totalStars` (required number): Determines the maximum number of stars in the rating system.

`size` (optional number): Specifies the size of the stars, with a default value of 24 pixels.\

`handleClick` (optional function): Allows you to provide a callback function to handle click events and capture the selected rating value.

## Example Usage
### page.tsx
```jsx
<StarRating handleClick={(numOfStars) => console.log(numOfStars)} size={40} totalStars={10} />
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

