import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ExpandableProvider, Expandable } from '@/components/Expandable/Expandable';

describe('Expandable Components', () => {
  it('renders Expandable component with text', () => {
    const { getByText } = render(
      <ExpandableProvider>
        <Expandable text="Click to expand" />
      </ExpandableProvider>
    );

    const expandableText = getByText('Click to expand');
    expect(expandableText).toBeInTheDocument();
  });

  it('expands when clicked', () => {
    const { getByText, queryByText } = render(
      <ExpandableProvider>
        <Expandable text="Click to expand">
          <Expandable text="Expanded content" />
        </Expandable>
      </ExpandableProvider>
    );

    const expandable = getByText('Click to expand');
    fireEvent.click(expandable);

    const expandedContent = queryByText('Expanded content');
    expect(expandedContent).toBeInTheDocument();
  });


  it('renders expanded content when expanded', () => {
    const { getByText } = render(
      <ExpandableProvider>
        <Expandable text="Click to expand" open>
          <div>Expanded content</div>
        </Expandable>
      </ExpandableProvider>
    );

    const expandedContent = getByText('Expanded content');
    expect(expandedContent).toBeInTheDocument();
  });

  // Add more test cases as needed
});
