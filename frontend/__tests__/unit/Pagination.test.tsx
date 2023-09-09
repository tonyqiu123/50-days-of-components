import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '@/components/Pagination/Pagination';

describe('Pagination Component', () => {
  it('renders pagination with indicators', () => {
    const { getByText } = render(
      <Pagination totalQueries={50} queriesPerPage={10} />
    );

    const indicator1 = getByText('1');
    const indicator5 = getByText('5');

    expect(indicator1).toBeInTheDocument();
    expect(indicator5).toBeInTheDocument();
  });

  it('renders selected indicator with "selected" class', () => {
    const { getByText } = render(
      <Pagination totalQueries={50} queriesPerPage={10} />
    );

    const selectedIndicator = getByText('1');

    expect(selectedIndicator).toHaveClass('selected');
  });

  it('invokes handleClick when an indicator is clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByText } = render(
      <Pagination totalQueries={50} queriesPerPage={10} handleClick={mockHandleClick} />
    );

    const indicator3 = getByText('3');
    fireEvent.click(indicator3);

    expect(mockHandleClick).toHaveBeenCalledTimes(2);
    expect(mockHandleClick).toHaveBeenCalledWith(3, 21, 30, 10);
  });

  // Add more test cases as needed
});
