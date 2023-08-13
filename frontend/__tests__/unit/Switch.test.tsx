import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Switch from '@/components/Switch/Switch';

describe('Switch Component', () => {
  it('renders correctly', () => {
    const onChange = jest.fn();
    render(<Switch onChange={onChange} />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const onChange = jest.fn();
    render(<Switch onChange={onChange} />);
    const switchElement = screen.getByTestId('switch');
    fireEvent.click(switchElement);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('updates checked state on click', () => {
    const onChange = jest.fn();
    render(<Switch onChange={onChange} />);
    const switchElement = screen.getByTestId('switch');
    fireEvent.click(switchElement);
    expect(switchElement).toHaveClass('checked');
  });

  it('applies darkMode class', () => {
    const onChange = jest.fn();
    render(<Switch onChange={onChange} darkMode />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveClass('darkMode');
  });

  // Add more tests as needed
});
