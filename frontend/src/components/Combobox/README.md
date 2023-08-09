# Day 32/100

August 8th / October 16th

# Combobox
<a href="https://www.youtube.com/watch?v=vlroK2Umfew" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Combobox" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Combobox" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1138625108030795918/image.png"/></a>  

# Description 

###### The Combobox component allows developers to execute a function whenever a user clicks outside a component.

The ComboBox component is a user interface element that combines an input field with a dropdown list, allowing users to either type in a value or select from a predefined list of options.

# Installation 

To use the Combobox component in your project, follow these steps:

1. Create a new folder called 'Combobox' in your project's components directory.
2. Copy the `Command.tsx`, `Command.css`, `Popover.tsx`, and `Popover.css` file into the newly created 'Combobox' folder.

# Example Usage
### page.tsx
```jsx
<Popover>
    <Button text='Toggle command' variant='primary' />
    <div>
    <Command darkMode={isDarkMode}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
        <CommandGroup heading="Suggestions">
            <CommandItem text='Calendar' imageSrc='/command/Calendar.svg' />
            <CommandItem text='Search Emojis' imageSrc='/command/Emoji.svg' />
            <CommandItem text='Calculator' imageSrc='/command/Calculator.svg' />
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
            <CommandItem text='Profile' imageSrc='/command/profile.svg' />
            <CommandItem text='Billing' imageSrc='/command/card.svg' />
            <CommandItem text='Settings' imageSrc='/command/settings.svg' />
        </CommandGroup>
        </CommandList>
    </Command>
    </div>
</Popover>
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