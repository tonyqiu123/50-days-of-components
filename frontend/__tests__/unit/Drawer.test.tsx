import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Drawer from '@/components/Drawer/Drawer';

describe('Drawer Component', () => {
  it('renders children when showDrawer is true', () => {
    const { getByText } = render(
      <Drawer showDrawer={true} setShowDrawer={() => {}}>
        <p>Drawer Content</p>
      </Drawer>
    );

    const drawerContent = getByText('Drawer Content');
    expect(drawerContent).toBeInTheDocument();
  });

  it('calls setShowDrawer when Backdrop is clicked', () => {
    const mockSetShowDrawer = jest.fn();
    const { container } = render(
      <Drawer showDrawer={true} setShowDrawer={mockSetShowDrawer}>
        <p>Drawer Content</p>
      </Drawer>
    );

    const backdrop = container.querySelector('.backdrop');
    fireEvent.click(backdrop);

    expect(mockSetShowDrawer).toHaveBeenCalledTimes(1);
    expect(mockSetShowDrawer).toHaveBeenCalledWith(false);
  });

  it('applies darkMode class when darkMode prop is true', () => {
    const { container } = render(
      <Drawer showDrawer={true} setShowDrawer={() => {}} darkMode={true}>
        <p>Drawer Content</p>
      </Drawer>
    );

    const drawer = container.querySelector('.drawer');
    expect(drawer).toHaveClass('darkMode');
  });

  it('does not apply darkMode class when darkMode prop is false', () => {
    const { container } = render(
      <Drawer showDrawer={true} setShowDrawer={() => {}} darkMode={false}>
        <p>Drawer Content</p>
      </Drawer>
    );

    const drawer = container.querySelector('.drawer');
    expect(drawer).not.toHaveClass('darkMode');
  });
});
