import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar/SearchBar';

describe('SearchBar Component', () => {
  it('renders SearchBar with placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="Test Placeholder" queries={[]} />
    );

    const inputElement = getByPlaceholderText('Test Placeholder');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders SearchBar with queries', () => {
    const queries = ['apple', 'banana', 'cherry'];
    const { getByText } = render(<SearchBar queries={queries} />);

    const queryElements = queries.map(query => getByText(query));
    queryElements.forEach(element => {
      expect(element).toBeInTheDocument();
    });
  });

  it('filters and displays matching queries', () => {
    const queries = ['apple', 'banana', 'cherry'];
    const { getByPlaceholderText, getByText } = render(
      <SearchBar placeholder="Search" queries={queries} />
    );

    const inputElement = getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'ba' } });

    const matchingQueryElements = ['banana'].map(query => getByText(query));
    matchingQueryElements.forEach(element => {
      expect(element).toBeInTheDocument();
    });
  });

  it('handles click on query', () => {
    const handleSelect = jest.fn();
    const queries = ['apple', 'banana', 'cherry'];
    const { getByText } = render(
      <SearchBar queries={queries} handleSelect={handleSelect} />
    );

    const queryElement = getByText('banana');
    fireEvent.mouseDown(queryElement);

    expect(handleSelect).toHaveBeenCalledWith('banana');
  });

  // Add more tests as needed
});
