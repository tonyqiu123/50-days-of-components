import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Counter from '@/components/Counter/Counter';

describe('Counter component', () => {
  it('renders with default props', () => {
    render(<Counter target={10} />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();
  });

  it('renders with custom target', () => {
    render(<Counter target={50} />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();

    // Wait for the animation to complete
    waitFor(() => {
      const updatedCounterElement = screen.getByText('50');
      expect(updatedCounterElement).toBeInTheDocument();
    });
  });

  it('renders with custom increment and duration', () => {
    render(<Counter target={100} increment={5} duration={2000} />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();

    // Wait for the animation to complete
    waitFor(() => {
      const updatedCounterElement = screen.getByText('100');
      expect(updatedCounterElement).toBeInTheDocument();
    });
  });

  it('renders with custom class name', () => {
    render(<Counter target={75} className="custom-counter" />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();

    // Wait for the animation to complete
    waitFor(() => {
      const updatedCounterElement = screen.getByText('75');
      expect(updatedCounterElement).toBeInTheDocument();
      expect(counterElement).toHaveClass('custom-counter');
    });
  });
});
