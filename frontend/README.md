# Day 27/100

August 3rd / October 16th

# ShowMore
<a href="https://youtu.be/UK7svbfuLI0" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/ShowMore" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/ShowMore" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1136780128052060320/image.png"/></a>  

## Description 

###### The ShowMore gradient component is a visually appealing element that acts as a clickable label, prompting users to reveal more content. When clicked, it expands the container to display the full content, providing a user-friendly "Show more" functionality.

Another simple component meant to power custom components. The ShowMore.tsx component enables you to implement a 'Show more' effect found in Medium, Youtube, Netflix, and Reddit. Enjoy.

## Installation 

To use the ShowMore component in your project, follow these steps:

1. Create a new folder called 'ShowMore' in your project's components directory.
2. Copy the `ShowMore.tsx` and `ShowMore.css` file into the newly created 'ShowMore' folder.

# Props 
### ShowMore:
`children` (required ReactElement): Only 1 child component allowed.

`height` (optional number): Represents the height (in pixels) of the ShowMore container when it is collapsed. By default 200 pixels.

`text` (optional string): Represents the text to be displayed. By default will be "Show more".

`darkMode` (optional boolean): This prop is optional and represents whether the ShowMore component should be displayed in dark mode or not.  

## Example Usage
### page.tsx
```jsx
<ShowMore height={400} darkMode={isDarkMode}>
    <Image src='/ShowMore/california.jpg' alt='' height={750} width={750} />
</ShowMore>

<ShowMore height={300} darkMode={isDarkMode}>
    <Image src='/ShowMore/mcBuilding.png' alt='' height={550} width={700} />
</ShowMore>
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