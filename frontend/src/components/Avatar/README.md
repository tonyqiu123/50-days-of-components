# Day 44/100

August 20th / October 16th

# Avatar
<a href="https://youtu.be/atePQYxreVQ" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Avatar" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Avatar" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1143146579721732126/image.png"/></a>  

# Description 
##### The Avatar component is a versatile React element that encapsulates both an AvatarImage and an AvatarFallback component. It intelligently manages the display of the avatar image alongside a fallback content, ensuring a seamless user experience during image loading or errors.
Easily add a fallback to an image.

# Installation 

To use the Avatar component in your project, follow these steps:

1. Create a new folder called 'Avatar' in your project's components directory.
2. Copy the `Avatar.tsx` files into the newly created 'Avatar' folder.

# Props 
### AvatarImage
`src` (required string): The source URL of the avatar image.
All other HTML attributes can also be passed to the underlying HTML element.
### AvatarFallback
`children` (required React.ReactNode): The content to be displayed as a fallback when the avatar image is loading or fails to load.
All other HTML attributes can also be passed to the underlying HTML element.
### Avatar
`children` (required React.ReactNode): The content to be displayed inside the Avatar component. Typically, this includes an AvatarImage and an AvatarFallback component.
All other HTML attributes can also be passed to the underlying HTML element.


# Example Usage
### page.tsx
```jsx
<Avatar>
    <AvatarImage className='avatarDemo' src="/Avatar/profile.png" />
    <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

# Prerequisites
This component requires Node v14 or later to work correctly with NextJS framework version ^13
The following dependencies were used for this component:
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"