# Day 24/100

July 31th / October 16th

# Skeleton
<a href="https://youtu.be/geQ69BSOM8c" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Skeleton" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Skeleton" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1135780618760888340/image.png"/></a>  

# Description 

###### The Skeleton component in web development is a design tool for improving user experience during content loading. Used extensively by sites like Facebook, LinkedIn, and YouTube, it shows a blank version of the page to give the impression that content is about to be placed, minimizing perceived load time and maintaining user engagement even on slower connections.

There is a lot more to this component than you expect. Firstly, the skeleton's are positioned absolutely. This is done to allow the developer to mimic Stripe's incredible UI in their payment page, where you have a loading animation that sits over components. There is nuance to this including handling pointer-events, z-indices, and animations. This component is heavily in beta, and I do not recommend using it in your projects. Cheers.

# Installation 

To use the Skeleton component in your project, follow these steps:

1. Create a new folder called 'Skeleton' in your project's components directory.
2. Copy the `Skeleton.tsx` and `Skeleton.css` files into the newly created 'Skeleton' folder.

# Props 
### SkeletonProvider Component:
`children` (required React.ReactNode): This represents the child components or elements that the SkeletonProvider component is wrapping around.

`className` (optional string): This property enables the user to append additional CSS classes to the SkeletonProvider component.

`loading` (required boolean): This property signifies whether the skeleton screen is visible or not. When set to true, the skeleton screen is shown, representing a loading state.

`darkMode` (optional boolean): This property is used to decide whether the skeleton screen should be displayed in dark mode or not. If set to true, the skeleton will be rendered in dark mode.

### Skeleton Component:
`className` (optional string): This property allows the user to add additional CSS classes to the Skeleton component.

`width` (optional number | string): This property sets the width of the Skeleton component. It can be specified as a number (in pixels) or a string (representing a percentage).

`height` (optional number): This property sets the height of the Skeleton component, and it should be specified as a number representing pixels.

`borderRadius` (optional number | string): This property sets the border-radius of the Skeleton component. It can be either a number (in pixels) or a string. If a string, it typically corresponds to a CSS value (like "50%").

# Example Usage
### page.tsx
```jsx
<div className="row" style={{ gap: '40px', height: '100%' }}>
    <div className="column">
        <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
            <div className='row' style={{ gap: '40px' }}>
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width='100%' height={60} borderRadius={10} />
            </div>
            <Skeleton width='100%' height={300} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={130} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={200} borderRadius={10} />
        </SkeletonProvider>
    </div>
    <div className="column">
        <SkeletonProvider darkMode={isDarkMode} loading={isLoading}>
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
            <div className='row' style={{ gap: '40px' }}>
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
                <Skeleton width={60} height={60} borderRadius='100%' />
            </div>
            <Skeleton width='100%' height={60} borderRadius={10} />
            <Skeleton width='100%' height={130} borderRadius={10} />
            <Skeleton width='100%' height={60} borderRadius={10} />
        </SkeletonProvider>
    </div>
</div>
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