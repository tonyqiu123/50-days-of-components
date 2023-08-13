import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from '@/components/Button/Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button text="Click me" variant="primary" />);
    const buttonElement = getByText('Click me');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('primary');
  });

  it('renders with secondary variant and image', () => {
    const { getByText, getByAltText } = render(
      <Button text="Submit" variant="secondary" imageSrc="/path/to/image.png" />
    );
    const buttonElement = getByText('Submit');
    const imageElement = getByAltText('');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('secondary');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/path/to/image.png');
  });

  it('calls handleClick when clicked', async () => {
    const mockHandleClick = jest.fn(() => Promise.resolve());
    const { getByText } = render(
      <Button text="Submit" variant="primary" handleClick={mockHandleClick} />
    );
    const buttonElement = getByText('Submit');

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });
  });

  it('disables the button when isDisabled is true', () => {
    const { getByText } = render(<Button text="Disabled" variant="primary" isDisabled />);
    const buttonElement = getByText('Disabled');

    expect(buttonElement).toBeDisabled();
  });

  // Add more test cases as needed
});
