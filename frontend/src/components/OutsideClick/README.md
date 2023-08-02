# Day 26/100

August 2nd / October 16th

# OutsideClick
<a href="https://youtu.be/FwKfbIFAN38" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/OutsideClick" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/OutsideClick" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1136348631461527704/image.png"/></a>  

# Description 

###### The OutsideClick component allows developers to execute a function whenever a user clicks outside a component.

The OutsideClick component allows developers to execute a function whenever a user clicks outside a component. It is super powerful if you are building your own components, as you essentially cut down 15 lines of ugly react ref logic into 3 simple lines: import, declare a state, and add wrapper with the setState passed as a prop. That's it.

# Installation 

To use the OutsideClick component in your project, follow these steps:

1. Create a new folder called 'OutsideClick' in your project's components directory.
2. Copy the `OutsideClick.tsx` file into the newly created 'OutsideClick' folder.

# Props 
### OutsideClick:
`children` (required ReactElement): Only 1 child component allowed.

`handleClickOutside` (required void function): Called function when a mousedown event is detected outside the children. If you are state toggling, please please please make sure you are not doing something along the following:  `onClickOutside={() => setShowModal(!showModal)}`. Instead, refer to my implementation below.

# Example Usage
### page.tsx
```jsx
<OutsideClick onClickOutside={() => setShowModal(showModal => !showModal)}>
    {showModal && <SomeModal>text</SomeModal>}
</OutsideClick>
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