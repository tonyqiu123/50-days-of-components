import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '@/components/Checkbox/Checkbox';

describe('Checkbox Component', () => {
  it('renders with primary text', () => {
    const { getByText } = render(<Checkbox primaryText="Checkbox Text" />);
    const primaryTextElement = getByText('Checkbox Text');

    expect(primaryTextElement).toBeInTheDocument();
  });

  it('renders with primary and sub text', () => {
    const { getByText } = render(<Checkbox primaryText="Primary Text" subText="Sub Text" />);
    const primaryTextElement = getByText('Primary Text');
    const subTextElement = getByText('Sub Text');

    expect(primaryTextElement).toBeInTheDocument();
    expect(subTextElement).toBeInTheDocument();
  });

  it('calls onChange when checkbox is clicked', () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(<Checkbox primaryText="Checkbox Text" onChange={mockOnChange} />);
    const checkboxElement = getByRole('checkbox');

    fireEvent.click(checkboxElement);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(checkboxElement).toBeChecked();
  });

  it('renders with dark mode', () => {
    const { container } = render(<Checkbox primaryText="Checkbox Text" darkMode />);
    const checkboxContainer = container.querySelector('.checkbox-container');

    expect(checkboxContainer).toHaveClass('darkMode');
  });

  // Add more test cases as needed
});
