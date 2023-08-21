import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/Avatar/Avatar'; // Adjust the import path

describe('AvatarImage Component', () => {
  it('renders an image with the provided source', () => {
    render(<AvatarImage src="test.jpg" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });
});

describe('AvatarFallback Component', () => {
  it('renders children inside a div', () => {
    render(<AvatarFallback>Hello, World!</AvatarFallback>);
    const fallbackDiv = screen.getByText('Hello, World!');
    expect(fallbackDiv).toBeInTheDocument();
  });
});