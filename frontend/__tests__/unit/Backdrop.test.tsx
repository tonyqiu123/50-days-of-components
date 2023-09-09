import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Backdrop from '@/components/Backdrop/Backdrop';

describe('Backdrop component', () => {

  it('should call setShowBackdrop when clicked', () => {
    const setShowBackdrop = jest.fn();
    const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} />);
    
    const backdropElement = container.querySelector('.backdrop');
    if (backdropElement) {
      fireEvent.click(backdropElement);
      expect(setShowBackdrop).toHaveBeenCalledTimes(1);
      expect(setShowBackdrop).toHaveBeenCalledWith(false);
    }
  });

  it('should apply darkMode class when darkMode prop is true', () => {
    const setShowBackdrop = jest.fn();
    const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} darkMode={true} />);
    
    const backdropElement = container.querySelector('.backdrop');
    expect(backdropElement).toHaveClass('darkMode');
  });

  it('should have "showBackdrop" class when showBackdrop prop is true', () => {
    const setShowBackdrop = jest.fn();
    const { container } = render(<Backdrop setShowBackdrop={setShowBackdrop} showBackdrop={true} />);
    
    const backdropElement = container.querySelector('.backdrop');
    expect(backdropElement).toHaveClass('showBackdrop');
  });
});
