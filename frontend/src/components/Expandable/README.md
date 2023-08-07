# Day 31/100

August 7th / October 16th

# Expandable
<a href="https://youtu.be/yiolgCDMEbw" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Expandable" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Expandable" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1138175093445492786/image.png"/></a>  

## Description 

###### The Expandable component empowers interactive user interfaces by creating expandable elements with customizable text and optional icons. It offers a seamless integration of content expansion and collapse, enhancing user experience and engagement.

A simple unopinionated component to make any number in your projects engaging. I got the idea from the dashboard in https://trayectoai10.web.app/login.

## Installation 

To use the Expandable component in your project, follow these steps:

1. Create a new folder called 'Expandable' in your project's components directory.
2. Copy the `Expandable.tsx` and `Expandable.css` file into the newly created 'Expandable' folder.

# Props 
### ExpandableProvider:
`className` (optional string): Custom CSS classes for styling.

`children` (optional JSX): Nested components sharing context.

`darkMode` (optional boolean): Initial dark mode state.

### Expandable:
`className` (optional string): Additional CSS classes.

`children` (optional React.ReactNode): Content within the expandable.

`iconSrc` (optional string): Icon URL for visual cue.

`text` (required string): Main expandable label.

`handleClick` (optional function): Custom click behavior.

`open` (optional boolean): Initial expansion state.

## Example Usage
### page.tsx
```jsx
<ExpandableProvider className='expandableDemo' darkMode={isDarkMode}>
    <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Attach Files'>
        <Expandable iconSrc='/Expandable/paperclip.svg' text='Document 1'>
            <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 1'></Expandable>
            <Expandable text='Subdocument 2'></Expandable>
        </Expandable>
        <Expandable open={true} iconSrc='/Expandable/paperclip.svg' text='Document 2'>
            <Expandable iconSrc='/Expandable/paperclip.svg' text='Subdocument 3'></Expandable>
            <Expandable text='Subdocument 4'></Expandable>
        </Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/mail.svg' text='Send Email'>
        <Expandable text='Compose New Email'></Expandable>
        <Expandable text='Check Inbox'></Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/calendar.svg' text='Schedule Event'>
        <Expandable text='Create New Event'></Expandable>
        <Expandable text='View Upcoming Events'></Expandable>
    </Expandable>
    <Expandable iconSrc='/Expandable/settings.svg' text='Settings'>
        <Expandable text='General Settings'></Expandable>
        <Expandable text='Privacy and Security'></Expandable>
        <Expandable text='Notifications'></Expandable>
    </Expandable>
</ExpandableProvider>
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

