import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ExpandableProvider, Expandable } from '@/components/Expandable/Expandable';

describe('ExpandableProvider Component', () => {
  it('renders children with dark mode', () => {
    const { getByText } = render(
      <ExpandableProvider darkMode>
        <p>Expandable Provider Content</p>
      </ExpandableProvider>
    );

    const providerContent = getByText('Expandable Provider Content');
    expect(providerContent).toBeInTheDocument();
    expect(providerContent).toHaveClass('darkMode');
  });

  // Add more tests as needed
});

describe('Expandable Component', () => {
  it('renders text and icon', () => {
    const { getByText, getByAltText } = render(
      <Expandable text="Expand Me" iconSrc="/path/to/icon.png" />
    );

    const expandableText = getByText('Expand Me');
    const expandableIcon = getByAltText('');
    expect(expandableText).toBeInTheDocument();
    expect(expandableIcon).toBeInTheDocument();
    expect(expandableIcon).toHaveAttribute('src', '/path/to/icon.png');
  });

  it('expands and collapses on click', () => {
    const { getByText, getByAltText } = render(
      <Expandable text="Expand Me">
        <p>Expanded Content</p>
      </Expandable>
    );

    const expandableText = getByText('Expand Me');
    const expandableArrow = getByAltText('');

    fireEvent.click(expandableText);
    const expandedContent = getByText('Expanded Content');
    expect(expandedContent).toBeInTheDocument();
    expect(expandableArrow).toHaveClass('expanded');

    fireEvent.click(expandableText);
    expect(expandedContent).not.toBeInTheDocument();
    expect(expandableArrow).not.toHaveClass('expanded');
  });

  // Add more tests as needed
});
