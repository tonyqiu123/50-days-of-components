import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from '@/components/Slider/Slider';

describe('Slider Component', () => {
  it('renders with default value', () => {
    const { getByRole } = render(<Slider />);
    const slider = getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('value', '0');
  });

  it('renders with specified default value', () => {
    const { getByRole } = render(<Slider defaultValue={50} />);
    const slider = getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('value', '50');
  });

  it('renders with specified min and max values', () => {
    const { getByRole } = render(<Slider min={10} max={90} />);
    const slider = getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '90');
  });

  it('calls onChange when slider value changes', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Slider onChange={handleChange} />);
    const slider = getByRole('slider');
    fireEvent.change(slider, { target: { value: '30' } });
    expect(handleChange).toHaveBeenCalledWith(30);
  });

  it('applies dark mode class', () => {
    const { container } = render(<Slider darkMode />);
    const slider = container.querySelector('.darkMode');
    expect(slider).toBeInTheDocument();
  });

  it('applies fullWidth class', () => {
    const { container } = render(<Slider fullWidth />);
    const slider = container.querySelector('.fullWidth');
    expect(slider).toBeInTheDocument();
  });

  // Add more tests as needed
});
