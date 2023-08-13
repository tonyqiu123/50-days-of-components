import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OutsideClick from '@/components/OutsideClick/OutsideClick';

describe('OutsideClick Component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <OutsideClick onClickOutside={() => { }}>
        <p>Inside Content</p>
      </OutsideClick>
    );

    const insideContent = getByText('Inside Content');
    expect(insideContent).toBeInTheDocument();
  });

  it('calls onClickOutside when clicking outside', () => {
    const mockOnClickOutside = jest.fn();
    const { container } = render(
      <OutsideClick onClickOutside={mockOnClickOutside}>
        <p>Inside Content</p>
      </OutsideClick>
    );

    const outsideElement = container.querySelector('.outsideClick');
    if (outsideElement) {
      fireEvent.mouseDown(outsideElement);
    }

    expect(mockOnClickOutside).toHaveBeenCalledTimes(1);
  });

  it('does not call onClickOutside when clicking inside', () => {
    const mockOnClickOutside = jest.fn();
    const { getByText } = render(
      <OutsideClick onClickOutside={mockOnClickOutside}>
        <p>Inside Content</p>
      </OutsideClick>
    );

    const insideContent = getByText('Inside Content');
    fireEvent.mouseDown(insideContent);

    expect(mockOnClickOutside).not.toHaveBeenCalled();
  });

  // Add more tests as needed
});
