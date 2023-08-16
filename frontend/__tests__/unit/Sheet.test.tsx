import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Sheet from '@/components/Sheet/Sheet';

// Mock components used within Sheet
describe('Sheet', () => {
  it('renders without crashing', () => {
    render(
      <Sheet showSheet={false} setShowSheet={() => { }}>
        {/* Test children */}
      </Sheet>
    );
  });

  it('displays children when showSheet is true', () => {
    render(
      <Sheet showSheet={true} setShowSheet={() => { }}>
        <div data-testid="test-children">Test Children</div>
      </Sheet>
    );

    const childrenElement = screen.getByTestId('test-children');
    expect(childrenElement).toBeInTheDocument();
  });

  it('does not display children when showSheet is false', () => {
    render(
      <Sheet showSheet={false} setShowSheet={() => { }}>
        <div data-testid="test-children">Test Children</div>
      </Sheet>
    );

    const childrenElement = screen.queryByTestId('test-children');
    expect(childrenElement).not.toHaveClass('active');
  });

  it('calls setShowSheet(false) when close icon is clicked', () => {
    const setShowSheetMock = jest.fn();
    const { container } = render(
      <Sheet showSheet={true} setShowSheet={setShowSheetMock}>
        {/* Test children */}
      </Sheet>
    );

    const closeIcon = container.querySelector('.avatar');
    fireEvent.click(closeIcon);

    expect(setShowSheetMock).toHaveBeenCalledWith(false);
  });

  // Add more test cases as needed
});
