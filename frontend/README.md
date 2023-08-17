# Day 41/100

August 17th / October 16th

# AspectRatio
<a href="https://youtu.be/bJvV43ZRd0A" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/AspectRatio" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/AspectRatio" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1141804467243728906/image.png"/></a>  

## Description 

###### The AspectRatio component intelligently maintains a given aspect ratio for its content, dynamically adjusting both width and height. It seamlessly adapts to varying dimensions while elegantly handling maximum height constraints, making it ideal for responsive designs requiring consistent proportions.


The Aspect Ratio component is useful for maintaining an image's aspect ratio when either its height or width changes. In order to apply a maxHeight or maxWidth, pass a number to the maxHeight prop.

## Installation 

To use the AspectRatio component in your project, follow these steps:

1. Create a new folder called 'AspectRatio' in your project's components directory.
2. Copy the `AspectRatio.tsx` and `AspectRatio.css` file into the newly created 'AspectRatio' folder.

## Props 
### AspectRatio
`ratio` (required number): Aspect ratio of the content (width-to-height). E.g., 16 / 9 for a 16:9 aspect ratio.

`children` (required ReactNode): Elements to be rendered within the AspectRatio component, maintaining the specified aspect ratio.

`maxHeight` (optional number): Max height while maintaining aspect ratio. Content may scale down if needed.

`...props` (optional HTMLAttributes<HTMLElement>): Additional HTML attributes for the underlying <div>.

## Example Usage
### page.tsx
```jsx
// Do not specify maxWidth, only maxHeight
    <AspectRatio style={{ border: '1px solid red' }} maxHeight={700} ratio={1 / 1}>
    <img
        src="https://cdn.discordapp.com/attachments/715319623637270638/1141796329564147772/image.png"
        alt="Photo by Drew Beamer"
    />
</AspectRatio>

<AspectRatio style={{ border: '1px solid red' }} ratio={3 / 1}>
    <img
        src="https://media.tacdn.com/media/attractions-content--1x-1/10/5a/80/a6.jpg"
        alt="Photo by Drew Beamer"
    />
</AspectRatio>

<AspectRatio style={{ border: '1px solid red' }} ratio={2 / 1}>
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg"
        alt="Photo by Drew Beamer"
    />
</AspectRatio>
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

