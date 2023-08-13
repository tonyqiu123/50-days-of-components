import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sheet from '@/components/Sheet/Sheet';

describe('Sheet Component', () => {
  it('renders children', () => {
    const { getByText } = render(<Sheet showSheet>Hello Sheet</Sheet>);
    const childrenElement = getByText('Hello Sheet');
    expect(childrenElement).toBeInTheDocument();
  });

  it('shows the sheet content when "showSheet" is true', () => {
    const { container } = render(<Sheet showSheet>Hello Sheet</Sheet>);
    const sheetContent = container.querySelector('.sheetContent.active');
    expect(sheetContent).toBeInTheDocument();
  });

  it('hides the sheet content when "showSheet" is false', () => {
    const { container } = render(<Sheet showSheet={false}>Hello Sheet</Sheet>);
    const sheetContent = container.querySelector('.sheetContent.active');
    expect(sheetContent).toBeNull();
  });

  it('renders with dark mode class', () => {
    const { container } = render(<Sheet darkMode showSheet>Hello Sheet</Sheet>);
    const sheetContainer = container.querySelector('.sheet.darkMode');
    expect(sheetContainer).toBeInTheDocument();
  });

  it('calls setShowSheet with false when close icon is clicked', () => {
    const setShowSheetMock = jest.fn();
    const { getByRole } = render(
      <Sheet showSheet setShowSheet={setShowSheetMock}>Hello Sheet</Sheet>
    );
    const closeIcon = getByRole('button');
    fireEvent.click(closeIcon);
    expect(setShowSheetMock).toHaveBeenCalledWith(false);
  });

  // Add more tests as needed
});
