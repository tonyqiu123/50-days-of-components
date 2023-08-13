import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popover from '@/components/Popover/Popover';

describe('Popover Component', () => {
  it('renders trigger element', () => {
    const { getByText } = render(
      <Popover>
        <button>Trigger</button>
        <div>Content</div>
      </Popover>
    );

    const trigger = getByText('Trigger');
    expect(trigger).toBeInTheDocument();
  });

  it('toggles popover content on trigger click', () => {
    const { getByText, queryByText } = render(
      <Popover>
        <button>Trigger</button>
        <div>Content</div>
      </Popover>
    );

    const trigger = getByText('Trigger');
    fireEvent.click(trigger);

    const content = getByText('Content');
    expect(content).toBeInTheDocument();

    fireEvent.click(trigger);

    expect(queryByText('Content')).not.toBeInTheDocument();
  });

  it('renders popover content', () => {
    const { getByText } = render(
      <Popover>
        <button>Trigger</button>
        <div>Content</div>
      </Popover>
    );

    const trigger = getByText('Trigger');
    fireEvent.click(trigger);

    const content = getByText('Content');
    expect(content).toBeInTheDocument();
  });

  it('hides popover content on outside click', () => {
    const { getByText, queryByText } = render(
      <Popover>
        <button>Trigger</button>
        <div>Content</div>
      </Popover>
    );

    const trigger = getByText('Trigger');
    fireEvent.click(trigger);

    const outsideElement = document.body;
    fireEvent.mouseDown(outsideElement);

    expect(queryByText('Content')).not.toBeInTheDocument();
  });

  // Add more tests as needed
});
