import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HoverCard from '@/components/HoverCard/HoverCard';

describe('HoverCard Component', () => {
  it('renders trigger element', () => {
    const { getByText } = render(
      <HoverCard>
        <button>Trigger</button>
        <div>Card Content</div>
      </HoverCard>
    );

    const triggerElement = getByText('Trigger');
    expect(triggerElement).toBeInTheDocument();
  });

  it('opens and closes content on hover', () => {
    const { getByText, queryByText } = render(
      <HoverCard>
        <button>Trigger</button>
        <div>Card Content</div>
      </HoverCard>
    );

    const triggerElement = getByText('Trigger');
    fireEvent.mouseEnter(triggerElement);

    const contentElement = getByText('Card Content');
    expect(contentElement).toHaveClass('showHoverCardContent');

    fireEvent.mouseLeave(triggerElement);

    const closedContentElement = queryByText('Card Content');
    expect(closedContentElement).not.toHaveClass('showHoverCardContent');
  });

  it('renders in dark mode', () => {
    const { container } = render(
      <HoverCard darkMode>
        <button>Trigger</button>
        <div>Card Content</div>
      </HoverCard>
    );

    const hoverCardContainer = container.querySelector('.hoverCard');
    expect(hoverCardContainer).toHaveClass('darkMode');
  });

  // Add more tests as needed
});
