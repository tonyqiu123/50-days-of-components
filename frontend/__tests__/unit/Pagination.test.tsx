import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '@/components/Pagination/Pagination';

describe('Pagination Component', () => {
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    mockHandleClick.mockClear();
  });

  it('renders indicators with correct number of pages', () => {
    const { getByText } = render(
      <Pagination totalQueries={10} queriesPerPage={5} />
    );

    const indicator1 = getByText('1');
    const indicator2 = getByText('2');
    expect(indicator1).toBeInTheDocument();
    expect(indicator2).toBeInTheDocument();
  });

  it('calls handleClick when indicator is clicked', () => {
    const { getByText } = render(
      <Pagination totalQueries={10} queriesPerPage={5} handleClick={mockHandleClick} />
    );

    const indicator2 = getByText('2');
    fireEvent.click(indicator2);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(2, 6, 10, 5);
  });

  it('displays reverseDoubleArrow when selected is not 1', () => {
    const { getByAltText } = render(
      <Pagination totalQueries={10} queriesPerPage={5} />
    );

    const reverseDoubleArrow = getByAltText('Reverse Double Arrow');
    expect(reverseDoubleArrow).toBeInTheDocument();
  });

  it('displays arrow when selected is not numberOfPages', () => {
    const { getByAltText } = render(
      <Pagination totalQueries={10} queriesPerPage={5} />
    );

    const arrow = getByAltText('Arrow');
    expect(arrow).toBeInTheDocument();
  });

  it('calls handleClick when reverseDoubleArrow is clicked', () => {
    const { getByAltText } = render(
      <Pagination totalQueries={10} queriesPerPage={5} handleClick={mockHandleClick} />
    );

    const reverseDoubleArrow = getByAltText('Reverse Double Arrow');
    fireEvent.click(reverseDoubleArrow);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(1, 1, 5, 5);
  });

  it('calls handleClick when reverseArrow is clicked', () => {
    const { getByAltText } = render(
      <Pagination totalQueries={10} queriesPerPage={5} handleClick={mockHandleClick} />
    );

    const reverseArrow = getByAltText('Reverse Arrow');
    fireEvent.click(reverseArrow);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(1, 1, 5, 5);
  });

  // Add more tests as needed
});
