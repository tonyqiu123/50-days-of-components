import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '@/components/Input/Input';

describe('Input Component', () => {
  it('renders input with placeholder and value', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <Input placeHolder="Search..." search="Example" setSearch={() => { }} />
    );

    const inputWithPlaceholder = getByPlaceholderText('Search...');
    const inputWithDisplayValue = getByDisplayValue('Example');

    expect(inputWithPlaceholder).toBeInTheDocument();
    expect(inputWithDisplayValue).toBeInTheDocument();
  });

  it('invokes setSearch function on input change', () => {
    const mockSetSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeHolder="Search..." search="" setSearch={mockSetSearch} />
    );

    const input = getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(mockSetSearch).toHaveBeenCalledTimes(1);
    expect(mockSetSearch).toHaveBeenCalledWith('New Value');
  });

  it('applies darkMode class when darkMode prop is true', () => {
    const { container } = render(
      <Input placeHolder="Search..." search="" setSearch={() => { }} darkMode={true} />
    );

    const inputContainer = container.querySelector('.input');
    expect(inputContainer).toHaveClass('darkMode');
  });

  it('renders input with icon when iconSrc prop is provided', () => {
    const { container } = render(
      <Input placeHolder="Search..." search="" setSearch={() => { }} iconSrc="/path/to/icon.png" />
    );

    const iconImage = container.querySelector('img');
    expect(iconImage).toBeInTheDocument();
  });

  it('renders input with fullWidth class when fullWidth prop is true', () => {
    const { container } = render(
      <Input placeHolder="Search..." search="" setSearch={() => { }} fullWidth={true} />
    );

    const inputContainer = container.querySelector('.input');
    expect(inputContainer).toHaveClass('fullWidth');
  });

  // Add more test cases as needed
});
