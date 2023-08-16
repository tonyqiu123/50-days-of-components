import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '@/components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<SearchBar search="" setSearch={() => { }} queries={[]} />);
  });

  it('displays the provided search value', () => {
    const searchValue = 'Test Search';
    render(<SearchBar search={searchValue} setSearch={() => { }} queries={[]} />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toHaveValue(searchValue);
  });

  it('updates search value when typing', () => {
    const setSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar search="" setSearch={setSearch} queries={[]} />);
    const inputElement = getByPlaceholderText('Search');
    const newSearchValue = 'New Search Value';

    fireEvent.change(inputElement, { target: { value: newSearchValue } });

    expect(setSearch).toHaveBeenCalledWith(newSearchValue);
  });

  it('opens dropdown when clicking on input', () => {
    const { container } = render(<SearchBar search="" setSearch={() => { }} queries={[]} />);
    const inputElement = screen.getByPlaceholderText('Search');

    fireEvent.mouseDown(inputElement);

    const dropdownElement = container.querySelector('.searchBarDropdown');
    expect(dropdownElement).toHaveClass('visible');
  });


  it('calls setSearch when clicking on a query', () => {
    const setSearch = jest.fn();
    const queries = ['apple', 'banana', 'cherry'];
    const { getByText } = render(<SearchBar search="" setSearch={setSearch} queries={queries} />);

    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'a' } });

    const appleElement = getByText('apple');
    fireEvent.mouseDown(appleElement);

    expect(setSearch).toHaveBeenCalledWith('apple');
  });

  // Add more test cases as needed

});
