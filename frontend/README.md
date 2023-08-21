# Day 45/100

August 21st / October 16th

# Alert
<a href="https://www.youtube.com/watch?v=TZ2XizQdzZg" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Alert" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Alert" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1143159880937644042/image.png"/></a>  

## Description 

###### The alert component in web development is a crucial tool for displaying important messages or notifications to users, ensuring timely communication of critical information. By providing a visually distinct and attention-grabbing element, the alert component enhances user experience by highlighting key updates or warnings on a website or application.


Essentially the modal component but without the backdrop hiding the modal when clicked.

## Installation 

To use the Alert component in your project, follow these steps:

1. Create a new folder called 'Alert' in your project's components directory.
2. Copy the `Alert.tsx` and `Alert.css` file into the newly created 'Alert' folder.

## Props 
### Alert

`setShowAlert` (required function): A React state setter function used to control whether the alert should be shown or hidden. When called with true, the alert becomes visible. When called with false, the alert is hidden.

`showAlert` (required boolean): A boolean value that determines whether the alert is currently visible or hidden. When true, the alert will be displayed. When false, the alert will be hidden.

`darkMode` (optional boolean, default: false): An optional boolean flag that indicates whether the alert should be displayed in a dark mode. If set to true, the alert's appearance will be adjusted for dark mode styling.

`children` (optional React node): This prop allows you to pass React elements or components as children to the Alert component. These children will be rendered within the content of the alert, allowing you to customize the content of the alert.

`...props` (optional): This spread operator (...props) captures any additional HTML attributes that you might pass to the Alert component. These attributes will be applied to the outer div element wrapping the alert. This allows for further customization and styling of the alert component.

## Example Usage
### page.tsx
```jsx
const [showAlert, setShowAlert] = useState<boolean>(false)

 <Alert darkMode={isDarkMode} showAlert={showAlert} setShowAlert={setShowAlert}>
    <Card darkMode={isDarkMode} style={{ maxWidth:'600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4>Are you absolutely sure?</h4>
            <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
            <div style={{ display: 'flex', gap: '8px', margin: '8px 0 0 auto' }}>
                <Button darkMode={isDarkMode} handleClick={async () => setShowAlert(false)} text='Cancel' variant='outline' size='l' />
                <Button darkMode={isDarkMode} handleClick={async () => setShowAlert(false)} text='Continue' variant='primary' size='l' />
            </div>
        </div>
    </Card>
</Alert>
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

