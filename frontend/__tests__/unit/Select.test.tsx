import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Select from '@/components/Select/Select';

describe('Select component', () => {
  const queries = ['Option 1', 'Option 2', 'Option 3'];

  test('renders without errors', () => {
    const setSelected = jest.fn();
    render(
      <Select selected="" setSelected={setSelected} queries={queries} />
    );

    // Assert that the component renders without throwing any errors
  });

  test('displays placeholder when no option is selected', () => {
    const setSelected = jest.fn();
    render(
      <Select selected="" setSelected={setSelected} queries={queries} placeholder="Select an option" />
    );

    const placeholderText = screen.getByText('Select an option');
    expect(placeholderText).toBeInTheDocument();
  });

  test('displays selected option', () => {
    const setSelected = jest.fn();
    render(
      <Select selected="Option 2" setSelected={setSelected} queries={queries} />
    );
  
    const selectedOptions = screen.getAllByText('Option 2');
    expect(selectedOptions.length).toBeGreaterThan(1); // At least 1 element should be present
  });
  

  test('opens dropdown when clicked', () => {
    const setSelected = jest.fn();
    render(
      <Select selected="" setSelected={setSelected} queries={queries} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    const option3 = screen.getByText('Option 3');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  test('calls setSelected when an option is clicked', () => {
    const setSelected = jest.fn();
    render(
      <Select selected="" setSelected={setSelected} queries={queries} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    expect(setSelected).toHaveBeenCalledWith('Option 2');
  });

  test('closes dropdown after an option is clicked', () => {
    const setSelected = jest.fn();
    render(
      <Select selected="" setSelected={setSelected} queries={queries} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    const dropdown = screen.queryByRole('listbox');
    expect(dropdown).not.toBeInTheDocument();
  });
});
