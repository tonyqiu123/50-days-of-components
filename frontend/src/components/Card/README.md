# Day 35/100

August 11th / October 16th

# Card
<a href="https://www.youtube.com/watch?v=CQMOWi0HVhQ" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Card" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Card" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1139675213106262037/image.png"/></a>  

## Description 

###### The card component elegantly structures and presents content, offering an organized format for displaying information or data. Its versatility makes it a valuable tool for creating visually appealing user interfaces.

A straight up div with border + padding + flex column. While redeveloping the design of this project, realized I needed a lot of cards so here we are. 

# Installation 

To use the Card component in your project, follow these steps:

1. Create a new folder called 'Card' in your project's components directory.
2. Copy the `Card.tsx` and `Card.css` file into the newly created 'Card' folder.

# Props 
### Card:
`darkMode` (optional boolean): Enables Card component to adapt to dark mode when true.

`size` (optional 's' | 'm' | 'l'): Adjusts Card dimensions for customized display.

## Example Usage
### page.tsx
```jsx
<Card style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} darkMode={isDarkMode}>
    <h2>Create project</h2>
    <p>Deply your new project in one-click.</p>
    <p style={{ marginTop: '16px' }}>Name</p>
    <Input darkMode={isDarkMode} search={name} setSearch={setName} placeHolder='Name of your project' />
    <p style={{ marginTop: '16px' }}>Framework</p>
    <SearchBar darkMode={isDarkMode} queries={['Next.js', 'SvelteKit', 'Vue.js', 'Nuxt.js']} />
    <Button style={{ marginTop: '16px' }} darkMode={isDarkMode} variant='primary' text='Submit' />
</Card>
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

