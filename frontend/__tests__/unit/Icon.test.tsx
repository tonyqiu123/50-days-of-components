import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Icon from '@/components/Icon/Icon';

describe('Icon Component', () => {
  it('renders with default props', () => {
    const { getByAltText } = render(
      <Icon image="/path/to/icon.png" />
    );

    const iconImage = getByAltText('icon');
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute('width', '20');
    expect(iconImage).toHaveAttribute('height', '20');
  });

  it('renders with text', () => {
    const { getByText } = render(
      <Icon image="/path/to/icon.png" text="User" />
    );

    const iconText = getByText('User');
    expect(iconText).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByAltText } = render(
      <Icon image="/path/to/icon.png" handleClick={mockHandleClick} />
    );

    const iconImage = getByAltText('icon');
    fireEvent.click(iconImage);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with inverted style', () => {
    const { container } = render(
      <Icon image="/path/to/icon.png" invert />
    );

    const iconContainer = container.querySelector('.icon');
    expect(iconContainer).toHaveClass('inverted');
  });

  // Add more tests as needed
});
