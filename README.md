## Day 4/100

July 10th / October 16th

# Modal Component for React 

![Modal Component Image](https://cdn.discordapp.com/attachments/715319623637270638/1128369163388330004/image.png "Modal Component Image")

This is a customizable Modal component that can be easily integrated into any React project. It has light and dark modes and is smoothly animated for a modern, sleek look. 

## Features

1. **Dark and Light Modes**: It allows the user to choose between a dark mode and a light mode, providing flexibility for any application theme.

2. **Customizable Content**: It accepts any child component or element, allowing you to create unique modals for any situation. 

3. **Animated**: This modal component uses CSS transitions for smooth and appealing animations. 

4. **BackDrop Clickable**: The modal can be closed by clicking outside of the modal area, giving an intuitive user experience. 

## Installation 

First, copy the Modal component code into your project. It could be placed in a components directory. 

## Usage 

Here is an example of how to use the Modal component. 

```jsx
import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h1>Hello, World!</h1>
      </Modal>
    </div>
  );
}

export default App;
```

In this example, clicking the button would set showModal to true and open the modal. The modal's content in this case is a simple h1 tag, but it could be any React component.

## Props

1. **showModal**: A boolean indicating whether the modal is open or not.

2. **setShowModal**: A function that can be used to open or close the modal.

3. **children**: The content to be rendered within the modal.

4. **darkMode**: An optional boolean that defaults to false. If true, the modal will be displayed in dark mode.

## CSS 

The Modal component comes with its own CSS that can be found in the Modal.css file. You should include this in your project for the modal to appear and animate correctly.

## Full Code 

```jsx
import React, { useEffect, useState } from 'react';
import './Modal.css'


interface ModalProps {
    children?: React.ReactNode
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean
    darkMode?: boolean
}

const Modal: React.FC<ModalProps> = ({ children, setShowModal, showModal, darkMode = false }) => {

    return (
        <>
            <div className={`${darkMode && 'darkMode'} modal ${showModal && 'showModal'}`}>
                {children}
            </div>
            <div onClick={() => setShowModal(false)} className={`${darkMode && 'darkMode'} backdrop ${showModal ? 'showModal' : ''}`}>
            </div>
        </>
    );
};

export default Modal;
```