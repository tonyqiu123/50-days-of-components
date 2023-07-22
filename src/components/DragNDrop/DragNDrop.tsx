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
