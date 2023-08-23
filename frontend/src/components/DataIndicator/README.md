# Day 46/100

August 22nd / October 16th

# DataIndicator
<a href="https://youtu.be/z-UiOh0E-fM" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/DataIndicator" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/DataIndicator" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1143730248274415766/image.png"/></a>  

## Description 

###### A data indicator component visually represents real-time data fluctuations through color-coded signals, providing an instant overview of the data's current state.


A genuinely helpful component that will add visual flavor whenever you need to visualize data compared to a previous timeframe. I found it useful while building a job portal admin dashboard and while building a web analytics dashboard.

## Installation 

To use the DataIndicator component in your project, follow these steps:

1. Create a new folder called 'DataIndicator' in your project's components directory.
2. Copy the `DataIndicator.tsx` and `DataIndicator.css` file into the newly created 'DataIndicator' folder.

## Props 
### DataIndicator

`currentData` (required number): The current numerical data value that the indicator will represent.

`previousData` (required number): The previous numerical data value for comparison, enabling the calculation of the data change.

`text` (optional string): Additional text or context to be displayed alongside the data indicator, providing a brief description of the data being represented.

## Example Usage
### page.tsx
```jsx
<DataIndicator currentData={50} previousData={20} text='from last month' />
<DataIndicator currentData={5} previousData={20} text='from last month' />
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

