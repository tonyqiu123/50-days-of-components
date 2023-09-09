'use client'

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs';
import PrettyCode from '@/components/PrettyCode/PrettyCode';
import { useGlobal } from '../layout'; // Add this import
import ShowMore from '@/components/ShowMore/ShowMore';
import DragNDrop from '@/components/DragNDrop/DragNDrop';
import Spacer from '@/components/Spacer/Spacer';
import Icon from '@/components/Icon/Icon';
import Separator from '@/components/Separator/Separator';
import Input from '@/components/Input/Input';
import SearchBar from '@/components/SearchBar/SearchBar';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const DragNDropDemo: React.FC = () => {
    const { isDarkMode, setIsDarkMode } = useGlobal();


    const reactCode = `import DragNDrop from '@/components/DragNDrop/DragNDrop';
    
<DragNDrop>
    <Image className='item2' height={200} width={150} src='/DragNDrop/ace.png' alt='' />
    <Image className='item2' height={200} width={150} src='/DragNDrop/jack.png' alt='' />
    <Image className='item2' height={200} width={150} src='/DragNDrop/queen.png' alt='' />
    <Image className='item2' height={200} width={150} src='/DragNDrop/king.png' alt='' />
</DragNDrop>`

    const tsxCode = `import React, { ReactElement, useState, useEffect, Children } from 'react';
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
                    id: \`draggable-\${index}\`,
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
`

const cssCode = `/* CSS FOR DEMO IMPLEMENTATION  */
.item1 {
    background-color: white;
    border: 1px solid #dddddd;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    gap: 24px;
    cursor: pointer;
}

.item2 {
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;
    margin: 4px 0;
}

/* Note: there is no pre-requisite css for the actual component */`


    const unitTestCode = `import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DragNDrop from '@/components/DragNDrop/DragNDrop';

describe('DragNDrop Component', () => {
    it('renders children as draggable items', () => {
    const { getByText } = render(
        <DragNDrop>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        </DragNDrop>
    );

    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');
    const item3 = getByText('Item 3');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
    });

    it('reorders items on drag and drop', () => {
    const { getByText } = render(
        <DragNDrop>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        </DragNDrop>
    );

    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');
    const item3 = getByText('Item 3');

    // Simulate drag and drop
    // You can use @testing-library/user-event for more realistic interaction simulation
    item3.style.transform = 'translate(0px, 72px)';
    item3.style.transition = 'none';

    fireEvent.dragEnd(item3, { clientX: 0, clientY: 72 });

    const reorderedItem1 = getByText('Item 2');
    const reorderedItem2 = getByText('Item 3');
    const reorderedItem3 = getByText('Item 1');

    expect(reorderedItem1).toBeInTheDocument();
    expect(reorderedItem2).toBeInTheDocument();
    expect(reorderedItem3).toBeInTheDocument();
    });

    // Add more test cases as needed
});`

    return (
        <React.Fragment>

            <h4>Day 15 / 50</h4>
            <Spacer y={2} />
            <h1>DragNDrop component</h1>
            <Spacer y={4} />
            <p>The DragNDrop component! I put in a bit of extra effort to optimize the developer experience. In particular, I made it so that developers can simply throw any jsx elements inside a element, and boom, those elements are draggable with proper context.

One of my favorite usecases of the DragNDrop component is formtasy.com - a web app using AI to build online forms. Formtasy uses the DragNDrop component to rearrange inputs in a form and it works so incredibly well, both in the visuals and the functionality.</p>
            <Spacer y={4} />
            <div className='row' style={{ gap: '8px' }}>
                <Icon target='_blank' href='https://github.com/tonyqiu123/50-days-of-components/tree/main/frontend/src/components/DragNDrop' text='Source code' invert={isDarkMode} image='/Icon/githubIcon.png' />
                <Icon target='_blank' href='https://www.youtube.com/watch?v=i70Cjnq2tYE' width={20} height={16} text='Video demo' invert={isDarkMode} image='/Icon/youtubeIcon.png' />
            </div>
            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />

            <h1>Usage</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>

                <TabsTrigger value='preview'><p>Preview</p></TabsTrigger>
                <TabsTrigger value='code'><p>Code</p></TabsTrigger>

                <TabsContent value='preview'>
                    <div className='demoBox'>
                        <DragNDrop>
                            <Image className='item2' height={200} width={150} src='/DragNDrop/ace.png' alt='' />
                            <Image className='item2' height={200} width={150} src='/DragNDrop/jack.png' alt='' />
                            <Image className='item2' height={200} width={150} src='/DragNDrop/queen.png' alt='' />
                            <Image className='item2' height={200} width={150} src='/DragNDrop/king.png' alt='' />
                        </DragNDrop>
                    </div>
                </TabsContent>
                <TabsContent value='code'><PrettyCode className='prettycodeDemo' language='jsx' code={reactCode} darkMode={isDarkMode} /></TabsContent>

            </Tabs>


            <Spacer y={4} />
            <Separator darkMode={isDarkMode} orientation='h' />
            <Spacer y={8} />
            <h1>Component Code</h1>
            <Spacer y={4} />
            <Tabs darkMode={isDarkMode}>
                <TabsTrigger value='tsx'><p>tsx</p></TabsTrigger>
                <TabsTrigger value='css'><p>css</p></TabsTrigger>
                <TabsTrigger value='test'><p>Unit tests</p></TabsTrigger>

                <TabsContent value='tsx'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={tsxCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

                <TabsContent value='css'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='css' code={cssCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>

                <TabsContent value='test'>
                    <ShowMore height={600} darkMode={isDarkMode}>
                        <PrettyCode className='prettycodeDemo' language='jsx' code={unitTestCode} darkMode={isDarkMode} />
                    </ShowMore>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    );
};

export default DragNDropDemo;
