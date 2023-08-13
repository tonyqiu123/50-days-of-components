import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowMore from '@/components/ShowMore/ShowMore';

describe('ShowMore Component', () => {
  it('renders children', () => {
    const { getByText } = render(<ShowMore>Hello ShowMore</ShowMore>);
    const childrenElement = getByText('Hello ShowMore');
    expect(childrenElement).toBeInTheDocument();
  });

  it('expands content when "Show more" is clicked', () => {
    const { getByText, container } = render(
      <ShowMore height={100}>Hello ShowMore</ShowMore>
    );
    const showMoreButton = getByText('Show more');
    fireEvent.click(showMoreButton);
    const containerElement = container.querySelector('.showMoreContainer');
    expect(containerElement).toHaveStyle('height: auto');
  });

  it('renders custom "Show more" text', () => {
    const { getByText } = render(
      <ShowMore text="View all">Hello ShowMore</ShowMore>
    );
    const showMoreButton = getByText('View all');
    expect(showMoreButton).toBeInTheDocument();
  });

  it('renders with dark mode class', () => {
    const { container } = render(<ShowMore darkMode>Hello ShowMore</ShowMore>);
    const showMoreContainer = container.querySelector('.showMoreContainer.darkMode');
    expect(showMoreContainer).toBeInTheDocument();
  });

  // Add more tests as needed
});
