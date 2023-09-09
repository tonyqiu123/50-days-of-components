# Day 49 / 50

August 25th / October 16th

# NavigationMenu
<a href="https://youtu.be/jW93ckQQdYY" target="_blank">Watch live demo on youtube</a>

<a href="https:/ / 50daysofcomponents.netlify.app/NavigationMenu" target="_blank">Demo it yourself</a>

<a href="https:/ / 50daysofcomponents.netlify.app/NavigationMenu" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1145935133933834260/image.png"/></a>  

## Description 

###### The ScrollIndicator component in React dynamically visualizes the user's scroll progress by overlaying a fixed-width bar with an adjustable colored overlay, elegantly revealing the extent of the scroll. This engaging UI element enhances user experience by providing a clear indication of the scrolled content's proportion.


A progress bar that shows how much a user has scrolled. The component minimizes expensive rerendering by updating the transform styling of the moving bar rather than the width.

## Installation 

To use the NavigationMenu component in your project, follow these steps:

1. Create a new folder called 'NavigationMenu' in your project's components directory.
2. Copy the `NavigationMenu.tsx` and `NavigationMenu.css` file into the newly created 'NavigationMenu' folder.

## Props 

### ScrollIndicator
`darkMode` (optional boolean): Determines whether the ScrollIndicator should be displayed in dark mode.


## Example Usage
### page.tsx
```jsx
 <ScrollIndicator darkMode={isDarkMode} />
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