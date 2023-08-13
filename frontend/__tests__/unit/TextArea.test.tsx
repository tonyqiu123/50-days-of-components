import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextArea from '@/components/TextArea/TextArea';

describe('TextArea Component', () => {
  it('renders correctly', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    render(<TextArea placeholder={placeholder} onChange={onChange} />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    expect(textareaElement).toBeInTheDocument();
  });

  it('calls onChange when text is entered', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    render(<TextArea placeholder={placeholder} onChange={onChange} />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(textareaElement, { target: { value: 'Hello, World!' } });
    expect(onChange).toHaveBeenCalledWith('Hello, World!');
  });

  it('applies darkMode class', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    render(<TextArea placeholder={placeholder} onChange={onChange} darkMode />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    expect(textareaElement).toHaveClass('darkMode');
  });

  it('sets custom width and height', () => {
    const placeholder = 'Enter text';
    const onChange = jest.fn();
    const width = '300px';
    const height = '200px';
    render(<TextArea placeholder={placeholder} onChange={onChange} width={width} height={height} />);
    const textareaElement = screen.getByPlaceholderText(placeholder);
    expect(textareaElement).toHaveStyle(`width: ${width}; height: ${height};`);
  });

  // Add more tests as needed
});
