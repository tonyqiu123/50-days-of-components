import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import ScrollIndicator from '@/components/ScrollIndicator/ScrollIndicator';

describe('ScrollIndicator', () => {
  it('renders without crashing', () => {
    render(<ScrollIndicator />);
  });

  it('renders with default class when no props are provided', () => {
    const { container } = render(<ScrollIndicator />);
    expect(container.firstChild).toHaveClass('scroll-indicator-container');
    expect(container.firstChild).not.toHaveClass('darkMode');
  });

  it('renders with custom class when className prop is provided', () => {
    const { container } = render(<ScrollIndicator className="custom-class" />);
    expect(container.firstChild).toHaveClass('scroll-indicator-container custom-class');
  });

  it('renders with dark mode class when darkMode prop is true', () => {
    const { container } = render(<ScrollIndicator darkMode={true} />);
    expect(container.firstChild).toHaveClass('scroll-indicator-container darkMode');
  });

  it('renders with correct transform style for scroll indicator overlay', () => {
    const { container } = render(<ScrollIndicator />);
    const scrollIndicatorOverlay = container.querySelector('.scroll-indicator-overlay');
    expect(scrollIndicatorOverlay).toHaveStyle({ transform: 'translateX(-100%)' }); // Initial value
  });
});
