import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Toast from '@/components/Toast/Toast';

describe('Toast Component', () => {
  it('renders Toast component correctly', () => {
    const setShowToast = jest.fn();
    const showToast = true;
    const darkMode = false;
    render(
      <Toast data-testid='toast' setShowToast={setShowToast} showToast={showToast} darkMode={darkMode}>
        This is a toast message.
      </Toast>
    );
    const toastElement = screen.getByTestId('toast');
    expect(toastElement).toBeInTheDocument();
  });

  it('calls setShowToast when close icon is clicked', () => {
    const setShowToast = jest.fn();
    const showToast = true;
    const darkMode = false;
    render(
      <Toast setShowToast={setShowToast} showToast={showToast} darkMode={darkMode}>
        This is a toast message.
      </Toast>
    );
    const closeIcon = screen.getByAltText('close toast');
    fireEvent.mouseDown(closeIcon);
    expect(setShowToast).toHaveBeenCalledWith(false);
  });

  it('does not render Toast component when showToast is false', () => {
    const setShowToast = jest.fn();
    const showToast = false;
    const darkMode = false;
    render(
      <Toast setShowToast={setShowToast} showToast={showToast} darkMode={darkMode}>
        This is a toast message.
      </Toast>
    );
    const toastElement = screen.queryByTestId('toast');
    expect(toastElement).toBeNull();
  });

  // Add more tests as needed
});
