import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Drawer from '@/components/Drawer/Drawer';

describe('Drawer Component', () => {
  it('renders children when showDrawer is true', () => {
    const [show, setShow] = useState(true)
    const { getByText } = render(
      <Drawer showDrawer={show} setShowDrawer={setShow}>
        <p>Drawer Content</p>
      </Drawer>
    );

    const drawerContent = getByText('Drawer Content');
    expect(drawerContent).toBeInTheDocument();
  });

  it('does not render children when showDrawer is false', () => {
    const [show, setShow] = useState(false)
    const { queryByText } = render(
      <Drawer showDrawer={show} setShowDrawer={setShow}>
        <p>Drawer Content</p>
      </Drawer>
    );

    const drawerContent = queryByText('Drawer Content');
    expect(drawerContent).toBeNull();
  });

  it('calls setShowDrawer when Backdrop is clicked', () => {
    const mockSetShowDrawer = jest.fn();
    const { getByTestId } = render(
      <Drawer showDrawer={true} setShowDrawer={mockSetShowDrawer}>
        <p>Drawer Content</p>
      </Drawer>
    );

    const backdrop = getByTestId('backdrop');
    fireEvent.click(backdrop);

    expect(mockSetShowDrawer).toHaveBeenCalledTimes(1);
    expect(mockSetShowDrawer).toHaveBeenCalledWith(false);
  });

  // Add more test cases as needed
});
