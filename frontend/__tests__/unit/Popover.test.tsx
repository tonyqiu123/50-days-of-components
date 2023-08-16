import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popover from '@/components/Popover/Popover';

describe('Popover Component', () => {
  it('renders trigger and content when isOpen is true', () => {
    const { getByText } = render(
      <Popover isOpen={true} setIsOpen={() => {}}>
        <button>Open Popover</button>
        <div>Popover Content</div>
      </Popover>
    );

    const triggerButton = getByText('Open Popover');
    const content = getByText('Popover Content');

    expect(triggerButton).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('toggles isOpen when trigger is clicked', () => {
    const { getByText } = render(
      <Popover isOpen={false} setIsOpen={() => {}}>
        <button>Open Popover</button>
        <div>Popover Content</div>
      </Popover>
    );

    const triggerButton = getByText('Open Popover');
    fireEvent.click(triggerButton);

    const content = getByText('Popover Content');
    expect(content).toBeInTheDocument();
  });

  it('closes popover when outside click occurs', () => {
    const { getByText, queryByText, container } = render(
      <div>
        <button>Outside</button>
        <Popover isOpen={false} setIsOpen={() => {}}>
          <button>Open Popover</button>
          <div>Popover Content</div>
        </Popover>
      </div>
    );

    const triggerButton = getByText('Open Popover');
    fireEvent.click(triggerButton);

    const outsideButton = getByText('Outside');
    fireEvent.click(outsideButton);

    const content = queryByText('Popover Content');
    expect(content).not.toHaveClass('showPopoverContent');
  });

  // Add more test cases as needed
});
