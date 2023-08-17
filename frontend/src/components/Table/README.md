# Day 40/100

August 16th / October 16th

# Table
<a href="https://youtu.be/VtWweL7ZNb0" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/Table" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/Table" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1141496528909905930/image.png"/></a>  

## Description 

###### The table component is a versatile solution for systematically arranging and displaying data, proving particularly advantageous in scenarios like financial portfolio tracking, academic result summaries, and e-commerce product listings, where organized data presentation aids in easy comparison, assessment, and informed decision-making.

This component serves as a necessary precursor for Day 50, where I will be adding a dynamic table component with sorting functionality, pagination, individual actions, and data exportability.

## Installation 

To use the Table component in your project, follow these steps:

1. Create a new folder called 'Table' in your project's components directory.
2. Copy the `Table.tsx` and `Table.css` file into the newly created 'Table' folder.

## Props 
### Table
`darkMode` (optional boolean): Determines whether the table should be displayed in dark mode or not.

`children` (required React.ReactNode): The content to be rendered within the table component.

`...props` (optional HTMLAttributes): Additional HTML attributes that can be applied to the table element, such as className, style, and others.

### TableHeader
`children` (required React.ReactNode): The content to be rendered within the table header component.

`...props` (optional HTMLAttributes): Additional HTML attributes that can be applied to the thead element, such as className, style, and others.

### TableHead
`children` (required React.ReactNode): The content to be rendered within the table head (header cell) component.

`...props` (optional HTMLAttributes): Additional HTML attributes that can be applied to the th (table head cell) element, such as className, style, and others.

### TableBody
`children` (required React.ReactNode): The content to be rendered within the table body component.

`...props` (optional HTMLAttributes): Additional HTML attributes that can be applied to the tbody element, such as className, style, and others.

### TableRow
`children` (required React.ReactNode): The content to be rendered within the table row component.

`...props` (optional HTMLAttributes): Additional HTML attributes that can be applied to the tr (table row) element, such as className, style, and others.

### TableCell
`children` (required React.ReactNode): The content to be rendered within the table cell component.

`...props` (optional HTMLAttributes): Additional HTML attributes that can be applied to the td (table cell) element, such as className, style, and others.

## Example Usage
### page.tsx
```jsx
const chessOpenings = [
        {
            opening: "Ruy Lopez",
            status: "Popular",
            complexity: "High",
            startingMoves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
        },
        {
            opening: "Sicilian Defense",
            status: "Common",
            complexity: "Medium",
            startingMoves: "1.e4 c5",
        },
        {
            opening: "King's Gambit",
            status: "Aggressive",
            complexity: "High",
            startingMoves: "1.e4 e5 2.f4",
        },
        {
            opening: "French Defense",
            status: "Solid",
            complexity: "Medium",
            startingMoves: "1.e4 e6",
        },
        {
            opening: "Caro-Kann Defense",
            status: "Solid",
            complexity: "Medium",
            startingMoves: "1.e4 c6",
        },
        {
            opening: "English Opening",
            status: "Versatile",
            complexity: "Medium",
            startingMoves: "1.c4",
        },
        {
            opening: "Italian Game",
            status: "Popular",
            complexity: "Medium",
            startingMoves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
        },
        {
            opening: "Pirc Defense",
            status: "Solid",
            complexity: "High",
            startingMoves: "1.e4 d6",
        },
        {
            opening: "Nimzo-Indian Defense",
            status: "Strategic",
            complexity: "High",
            startingMoves: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
        },
        {
            opening: "Grünfeld Defense",
            status: "Dynamic",
            complexity: "High",
            startingMoves: "1.d4 Nf6 2.c4 g6 3.Nc3 d5",
        },
        {
            opening: "Scandinavian Defense",
            status: "Uncommon",
            complexity: "Medium",
            startingMoves: "1.e4 d5",
        },
    ];
    
    <Table darkMode={isDarkMode}>
    <TableHeader>
        <TableRow>
            <TableHead>Opening</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Complexity</TableHead>
            <TableHead>Starting Moves</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {chessOpenings.map((opening) => (
            <TableRow key={opening.opening}>
                <TableCell>{opening.opening}</TableCell>
                <TableCell>{opening.status}</TableCell>
                <TableCell>{opening.complexity}</TableCell>
                <TableCell>{opening.startingMoves}</TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
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

