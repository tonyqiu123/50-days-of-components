# Day 42/100

August 18th / October 16th

# VerticalNavigation
<a href="https://www.youtube.com/watch?v=eAro7avGxDA" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/VerticalNavigation" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/VerticalNavigation" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1142485654324920431/image.png"/></a>  

## Description 

###### The VerticalNavigation component facilitates easy navigation through vertical menus or sections, enhancing user experience by providing a structured and accessible interface for selecting options or browsing content. It typically displays links or buttons vertically, aiding users in quickly accessing different sections or pages of an application or website.

Default navigation within settings, profiles, and documentation.

## Installation 

To use the VerticalNavigation component in your project, follow these steps:

1. Create a new folder called 'VerticalNavigation' in your project's components directory.
2. Copy the `VerticalNavigation.tsx` and `VerticalNavigation.css` file into the newly created 'VerticalNavigation' folder.

## Props 
### VerticalNavigation
`selected` (string, required): Represents the currently selected item in the vertical navigation.

`setSelected` (function, required): A state updater function used to set the selected item in the vertical navigation.

`darkMode` (boolean, optional): Determines whether the dark mode styling should be applied to the component.

`children` (ReactNode, required): The content that will be rendered inside the VerticalNavigation component.

Any other props passed to this component using the spread operator (...props) will be forwarded to the underlying HTML div element.

### VerticalNavigationHeader
`text` (string, required): The text content to be displayed within the header.

Any other props passed to this component using the spread operator (...props) will be forwarded to the underlying HTML p element.

### VerticalNavigationLink
`text` (string, required): The text content to be displayed within the link.

Any other props passed to this component using the spread operator (...props) will be forwarded to the underlying HTML p element.

## Example Usage
```jsx
<VerticalNavigation selected={selected1} setSelected={setSelected1} darkMode={isDarkMode}>
    <VerticalNavigationHeader text='Account Settings' />
    <VerticalNavigationLink text='Profile' />
    <VerticalNavigationLink text='Verification' />
    <VerticalNavigationLink text='Trust and Verification' />
    <VerticalNavigationLink text='Security' />
    <VerticalNavigationLink text='Notifications' />

    <VerticalNavigationHeader text='Hosting Settings' />
    <VerticalNavigationLink text='Listing Details' />
    <VerticalNavigationLink text='Pricing' />
    <VerticalNavigationLink text='Availability' />
    <VerticalNavigationLink text='Booking Settings' />
    <VerticalNavigationLink text='House Rules' />

    <VerticalNavigationHeader text='Guest Settings' />
    <VerticalNavigationLink text='Search Preferences' />
    <VerticalNavigationLink text='Saved Listings' />
    <VerticalNavigationLink text='Wishlists' />
    <VerticalNavigationLink text='Reviews' />
    <VerticalNavigationLink text='Trips' />

    <VerticalNavigationHeader text='Payment Settings' />
    <VerticalNavigationLink text='Payment Methods' />
    <VerticalNavigationLink text='Payout Preferences' />
    <VerticalNavigationLink text='Transaction History' />
    <VerticalNavigationLink text='Invoices' />
    <VerticalNavigationLink text='Tax Documents' />
</VerticalNavigation>
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

