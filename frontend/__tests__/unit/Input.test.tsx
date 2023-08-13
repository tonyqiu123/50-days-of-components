import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '@/components/Input/Input';

describe('Input Component', () => {
  const [search, setSearch] = useState('')
  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input search={search} setSearch={setSearch} placeHolder="Enter text" />
    );

    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders with search value', () => {
    const [search, setSearch] = useState('Search Query')
    const { getByDisplayValue } = render(
      <Input search={search} setSearch={setSearch} placeHolder="Enter text" />
    );

    const inputElement = getByDisplayValue('Search Query');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls setSearch on input change', () => {
    const mockSetSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Input search="" setSearch={mockSetSearch} />
    );

    const inputElement = getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(mockSetSearch).toHaveBeenCalledTimes(1);
    expect(mockSetSearch).toHaveBeenCalledWith('New Value');
  });

  it('renders with dark mode', () => {
    const { container } = render(
      <Input search="" setSearch={() => {}} darkMode />
    );

    const inputContainer = container.querySelector('.inputContainer');
    expect(inputContainer).toHaveClass('darkMode');
  });

  it('renders with icon', () => {
    const { getByAltText } = render(
      <Input search="" setSearch={() => {}} iconSrc="/path/to/icon.png" />
    );

    const inputIcon = getByAltText('');
    expect(inputIcon).toBeInTheDocument();
    expect(inputIcon).toHaveAttribute('src', '/path/to/icon.png');
  });

  it('renders with fullWidth', () => {
    const { container } = render(
      <Input search="" setSearch={() => {}} fullWidth />
    );

    const inputContainer = container.querySelector('.inputContainer');
    expect(inputContainer).toHaveClass('fullWidth');
  });

  // Add more tests as needed
});
