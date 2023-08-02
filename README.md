# Day 25/100

August 1st / October 16th

# Command
<a href="https://youtu.be/0yIhtC0RUVY" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Command" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Command" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1136028712056393840/image.png"/></a>  

# Description 

###### The command web dev component is a searchable modal interface, optimized for user accessibility and functionality, allowing categorized queries to be input through keyboard commands. This unique blend of features enhances user experience by making information readily available and easily navigable, all through a simple keypress.

The command component is a dropdown that is navigatable with keyboard commands. My implementation is a clone of ShadCn's version, except I opted to not use the cmdk library. Because of this, I couldn't for the life of me figure out how to implement several features due to React's limitations with parsing through children. As such, I do not recommend using this component in your projects. Have fun.

# Installation 

To use the Command component in your project, follow these steps:

1. Create a new folder called 'Command' in your project's components directory.
2. Copy the `Command.tsx` and `Command.css` files into the newly created 'Command' folder.

# Props 
### Command:
`classname` (optional string): This property enables the user to add additional CSS classes to the Command component.

`children` (required ReactNode): This represents the child components or elements that the Command component is wrapping around.

`darkMode` (optional boolean): This property is used to determine whether the Command component should be displayed in dark mode. If set to true, the Command will be rendered in dark mode.

`handleSelect` (optional function): This function is called when a command is selected.

### CommandInput:
`classname` (optional string): This property enables the user to append additional CSS classes to the CommandInput component.

`placeholder` (required string): This property specifies a short hint that describes the expected value of an input field. It gets displayed in the input field before the user enters a value.

### CommandList:
`classname` (optional string): This property allows the user to append additional CSS classes to the CommandList component.

`children` (required ReactNode): This represents the child components or elements that the CommandList component is wrapping around.

### CommandGroup:
`classname` (optional string): This property allows the user to add additional CSS classes to the CommandGroup component.

`heading` (required string): This property sets the heading of the CommandGroup component.

`children` (required ReactNode): This represents the child components or elements that the CommandGroup component is wrapping around.

### CommandItem:
`classname` (optional string): This property allows the user to add additional CSS classes to the CommandItem component.

`text` (required string): This property sets the text of the CommandItem component.

`imageSrc` (optional string): This property sets the source URL of the image in the CommandItem component.

### CommandSeparator:
`classname` (optional string): This property allows the user to add additional CSS classes to the CommandSeparator component.

# Example Usage
### page.tsx
```jsx
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