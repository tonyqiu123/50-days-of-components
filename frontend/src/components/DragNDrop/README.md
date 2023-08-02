# Day 15/100

July 22th / October 16th

# DragNDrop
<a href="https://www.youtube.com/watch?v=i70Cjnq2tYE" target="_blank">Watch live demo on youtube</a>

<a href="https://100daysofcomponents.netlify.app/DragNDrop" target="_blank">Demo it yourself</a>

<a href="https://100daysofcomponents.netlify.app/DragNDrop" target="_blank"><img src="https://cdn.discordapp.com/attachments/715319623637270638/1132372058031001650/image.png"/></a>  

# Description 

The DragNDrop component! I put in a bit of extra effort to optimize the developer experience. In particular, I made it so that developers can simply throw any jsx elements inside a <DragNDrop> element, and boom, those elements are draggable with proper context.

One of my favorite usecases of the DragNDrop component is formtasy.com - a web app using AI to build online forms. Formtasy uses the DragNDrop component to rearrange inputs in a form and it works so incredibly well, both in the visuals and the functionality.


# Prerequisites
This package requires Node v14 or later and react-beautiful-dnd to work correctly with NextJS framework version ^13
The following dependencies were used in this project :
1. "@types/node": "20.4.1",
2. "@types/react": "18.2.14",
3. "@types/react-dom": "18.2.6",
4. "next": "13.4.9",
5. "react": "18.2.0",
6. "react-dom": "18.2.0",
7. "typescript": "5.1.6"
8. "react-beautiful-dnd": "^13.1.1",


# Installation 

To use the DragNDrop component in your project, follow these steps:

1. Install the "react-beautiful-dnd" node dependancy.
2. Create a new folder called 'DragNDrop' in your project's components directory.
3. Copy the `DragNDrop.tsx` and `DragNDrop.css` files into the newly created 'DragNDrop' folder.

# Props 

1. `children` (required element): This is simply the children that will appear in the dragndrop.
 

# Example Usage
### page.tsx
```jsx
'use client'

import React from 'react';
import DragNDrop, { ChildComponentProps } from '@/components/DragNDrop/DragNDrop';
import Tooltip from '@/components/Tooltip/Tooltip';
import '@/components/DragNDrop/DragNDrop.css'
import Image from 'next/image';


export default function DragNDropDemo() {

    return (

        <div className='page'>
            <Tooltip toolTipText='Takes in child elements and provides a mechanism to rearrange them in the order of display through a simple drag-and-drop action.'>
                <p>DragNDrop Component</p>
            </Tooltip>
            <DragNDrop>
                <div className="item1 row">
                    <h1>Buy Groceries</h1>
                    <div className='column'>
                        <h4>Weekend Shopping List</h4>
                        <p>Make sure to buy fruits, vegetables, dairy products, and bread for the upcoming week.</p>
                    </div>
                </div>
                <div className="item1 row">
                    <h1>Workout</h1>
                    <div className='column'>
                        <h4>Evening Routine</h4>
                        <p>Spend at least 30 minutes on cardio and finish the session with some stretching exercises.</p>
                    </div>
                </div>
                <div className="item1 row">
                    <h1>Read a Book</h1>
                    <div className='column'>
                        <h4>Personal Development</h4>
                        <p>Continue reading the latest book and aim to finish at least two chapters today.</p>
                    </div>
                </div>
            </DragNDrop>
            <DragNDrop>
                <Image className='item2' height={200} width={150} src='/DragNDrop/ace.png' alt='' />
                <Image className='item2' height={200} width={150} src='/DragNDrop/jack.png' alt='' />
                <Image className='item2' height={200} width={150} src='/DragNDrop/queen.png' alt='' />
                <Image className='item2' height={200} width={150} src='/DragNDrop/king.png' alt='' />
            </DragNDrop>

        </div>
    );
};
```
In this example, I have 2 DragNDrop components: one with nested divs, and another with images.  

# Component Code 

### DragNDrop.tsx
```jsx
import React, { ReactElement, useState, useEffect, Children } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DropResult, ResponderProvided, DraggableProvided, DraggableStateSnapshot, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

export interface ChildComponentProps {
    id: string;
    node: React.ReactNode;
}

interface DragNDropProps {
    children: React.ReactNode
}

const DragNDrop: React.FC<DragNDropProps> = ({ children }) => {
    const [childComponents, setChildComponents] = useState<ChildComponentProps[]>([]);

    // Extract the id and content from children
    useEffect(() => {
        setChildComponents(
            Children.toArray(children)
                .filter(React.isValidElement)
                .map((child: ReactElement, index) => ({
                    id: `draggable-${index}`,
                    node: child
                }))
        );
    }, [children]);

    const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
        if (!result.destination) {
            return;
        }

        const items = Array.from(childComponents);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setChildComponents(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                    <div className='dragndrop' {...provided.droppableProps} ref={provided.innerRef}>
                        {childComponents.map((child, index) => (
                            <Draggable key={child.id} draggableId={child.id} index={index}>
                                {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {child.node}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragNDrop;
```
 