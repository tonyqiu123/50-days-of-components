# Day 30/100

August 6th / October 16th

# Counter
<a href="https://youtu.be/9gqlq7rqHrg" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Counter" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Counter" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1138112132811083816/image.png"/></a>  

## Description 

###### The Counter component is a customizable React element that animates incrementing from a starting value to a target value, displaying the changing numerical count with a specified speed and duration. It offers flexibility through props such as 'increment', 'duration', and 'className', making it adaptable for various interactive applications and user interfaces.

A simple unopinionated component to make any number in your projects engaging. I got the idea from the dashboard in https://trayectoai10.web.app/login.
## Installation 

To use the Counter component in your project, follow these steps:

1. Create a new folder called 'Counter' in your project's components directory.
2. Copy the `Counter.tsx` file into the newly created 'Counter' folder.

# Props 
### Counter:
`target` (required number): Final value for the Counter animation.

`increment` (optional number): Step size for each animation interval.

`duration` (optional number): Animation time in milliseconds.

`className` (optional string): Custom CSS classes for styling.

## Example Usage
### page.tsx
```jsx
<Counter target={110} increment={2} duration={750} />
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

