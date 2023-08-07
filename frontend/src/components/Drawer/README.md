# Day 29/100

August 5th / October 16th

# Drawer
<a href="https://youtu.be/9gqlq7rqHrg" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Drawer" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Drawer" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1137971069593067540/image.png"/></a>  

## Description 

###### The drawer component provides a versatile and user-friendly interface element, often used for presenting supplementary content, menus, or controls. Its intuitive sliding motion and customizable design make it an effective tool for enhancing user interactions within a web or app interface.

Thank you chatGPT ^. The Drawer component is built on top of my Swipeable component. It comes with out-of-the-box styling to give you a base-line template to build off of or to keep if you're making an MVP. Have fun.

## Installation 

To use the Drawer component in your project, follow these steps:

1. Create a new folder called 'Drawer' in your project's components directory.
2. Copy the `Drawer.tsx` and `Drawer.css` file into the newly created 'Drawer' folder.

# Props 
### Drawer:
`showDrawer` (required boolean): Controls the visibility of the Drawer component. When set to true, the drawer is displayed; when set to false, it's hidden.

`setShowDrawer` (required React Dispatch function): Used to update the visibility state of the Drawer component.

`darkMode` (optional boolean): Indicates whether the drawer should be displayed in dark mode. Default value is false.

`children` (required ReactNode): Specifies the content to be placed within the Drawer component.

`className` (optional string): Additional CSS class to style the Drawer component.

## Example Usage
### page.tsx
```jsx
<Drawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} darkMode={isDarkMode}>
    <h3>Example Drawer</h3>
    <p>First Name</p>
    <Input search={input1} setSearch={setInput1} darkMode={isDarkMode} placeHolder='First Name' />
    <p>Last Name</p>
    <Input search={input2} setSearch={setInput2} darkMode={isDarkMode} placeHolder='Last Name' />
    <p>Birthday</p>
    <SearchBar
        placeholder='Select Year'
        fullWidth={true}
        darkMode={isDarkMode}
        queries={years}
        maxHeight='500px'
    />
    <Button
        handleClick={async () => {
            return new Promise<void>(resolve => {
                try {
                    setTimeout(() => {
                        setShowDrawer(false);
                        resolve();
                    }, 500);
                } catch (error) {
                    console.error(error);
                    throw error
                }
            });
        }}
        variant='primary'
        text='Save changes'
    />
</Drawer>
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

