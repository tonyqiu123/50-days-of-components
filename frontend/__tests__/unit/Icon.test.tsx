import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Avatar from '@/components/Icon/Icon';

describe('Avatar Component', () => {
  it('renders with default props', () => {
    const { getByAltText } = render(
      <Avatar image="/path/to/avatar.png" />
    );

    const avatarImage = getByAltText('avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('width', '20');
    expect(avatarImage).toHaveAttribute('height', '20');
  });

  it('renders with text', () => {
    const { getByText } = render(
      <Avatar image="/path/to/avatar.png" text="User" />
    );

    const avatarText = getByText('User');
    expect(avatarText).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByAltText } = render(
      <Avatar image="/path/to/avatar.png" handleClick={mockHandleClick} />
    );

    const avatarImage = getByAltText('avatar');
    fireEvent.click(avatarImage);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with inverted style', () => {
    const { container } = render(
      <Avatar image="/path/to/avatar.png" invert />
    );

    const avatarContainer = container.querySelector('.avatar');
    expect(avatarContainer).toHaveClass('inverted');
  });

  // Add more tests as needed
});
