import React from 'react';
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
});
